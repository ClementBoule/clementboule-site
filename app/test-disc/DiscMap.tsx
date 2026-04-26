'use client'
import { useMemo, useState, useRef, useCallback } from 'react'
import type { ProfileKey, SubProfileKey } from './disc-data'
import { DISC_COLORS, subProfiles } from './disc-data'

// ─── DISC CARTOGRAPHIE CIRCULAIRE + RADAR OVERLAY ─────────────────────────
// Composant SVG professionnel fidèle à la méthodologie Assessments 24x7
// - Roue circulaire avec 4 quadrants colorés (D/C/S/I)
// - Arcs extérieurs identifiant chaque zone
// - Grille concentrique
// - Polygone radar des scores superposé
// - 15 sous-profils positionnés selon mapPosition (angle/radius)
// - Tooltips interactifs au survol
// - Animation pulse sur le sous-profil identifié
// - Labels intelligents : quadrant dominant visible, autres masqués

interface DiscMapProps {
  scores: Record<ProfileKey, number>
  dominant: ProfileKey
  secondary: ProfileKey
  phase2Unlocked?: boolean
  identifiedSubProfile?: SubProfileKey | null
  onLockedClick?: () => void
  compact?: boolean
}

// ─── CONSTANTES ────────────────────────────────────────────────────────────

const CENTER = 50
const MAX_R = 38          // rayon max de la grille
const OUTER_R = 42        // rayon de l'arc extérieur
const OUTER_RING_W = 3    // épaisseur de l'arc
const GRID_LEVELS = [0.25, 0.5, 0.75, 1.0]

// Tous les sous-profils
const ALL_SP_KEYS = Object.keys(subProfiles) as SubProfileKey[]

// Limites des quadrants (degrés compas : 0°=haut, sens horaire)
// Calculées à partir des midpoints entre les clusters de sous-profils
const QUADRANT_ARCS: { key: ProfileKey; start: number; end: number; label: string; labelShort: string }[] = [
  { key: 'D', start: 343, end: 52,  label: 'Dominant',       labelShort: 'D' },
  { key: 'C', start: 52,  end: 185, label: 'Consciencieux',  labelShort: 'C' },
  { key: 'S', start: 185, end: 285, label: 'Stable',         labelShort: 'S' },
  { key: 'I', start: 285, end: 343, label: 'Influent',       labelShort: 'I' },
]

// Axes radar à 90° d'intervalle pour le polygone des scores
const RADAR_AXES: { key: ProfileKey; compassAngle: number }[] = [
  { key: 'D', compassAngle: 17 },   // centre du cluster D
  { key: 'C', compassAngle: 100 },  // centre du cluster C
  { key: 'S', compassAngle: 252 },  // centre du cluster S
  { key: 'I', compassAngle: 315 },  // centre du cluster I
]

// ─── UTILS ─────────────────────────────────────────────────────────────────

/** Convertit un angle compas (0°=nord, horaire) en coordonnées SVG */
function compassToXY(deg: number, r: number): { x: number; y: number } {
  const rad = (deg * Math.PI) / 180
  return {
    x: CENTER + r * Math.sin(rad),
    y: CENTER - r * Math.cos(rad),
  }
}

/** Génère un path SVG d'arc circulaire entre deux angles compas */
function arcPath(startDeg: number, endDeg: number, r: number): string {
  const p1 = compassToXY(startDeg, r)
  const p2 = compassToXY(endDeg, r)
  const sweep = ((endDeg - startDeg) + 360) % 360
  const large = sweep > 180 ? 1 : 0
  return `M ${p1.x.toFixed(2)} ${p1.y.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`
}

/** Génère un path SVG de secteur (wedge) entre deux angles */
function wedgePath(startDeg: number, endDeg: number, r: number): string {
  const p1 = compassToXY(startDeg, r)
  const p2 = compassToXY(endDeg, r)
  const sweep = ((endDeg - startDeg) + 360) % 360
  const large = sweep > 180 ? 1 : 0
  return `M ${CENTER} ${CENTER} L ${p1.x.toFixed(2)} ${p1.y.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} Z`
}

/** Normalise un angle dans [0, 360) */
function normAngle(deg: number): number {
  return ((deg % 360) + 360) % 360
}

/** Vérifie si un angle est dans un arc [start, end) (sens horaire) */
function isInArc(angle: number, start: number, end: number): boolean {
  const a = normAngle(angle)
  const s = normAngle(start)
  const e = normAngle(end)
  if (s < e) return a >= s && a < e
  return a >= s || a < e // wrap around 0
}

// ─── COMPOSANT ─────────────────────────────────────────────────────────────

export default function DiscMap({
  scores,
  dominant,
  secondary,
  phase2Unlocked = false,
  identifiedSubProfile = null,
  onLockedClick,
  compact = false,
}: DiscMapProps) {
  const [hoveredSP, setHoveredSP] = useState<SubProfileKey | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  const total = Object.values(scores).reduce((a, b) => a + b, 0) || 1
  const size = compact ? 360 : 500

  // ─── Pourcentages normalisés (0→1) pour le radar ──────────────
  const pcts = useMemo(() => {
    const raw: Record<ProfileKey, number> = {
      D: scores.D / total,
      I: scores.I / total,
      S: scores.S / total,
      C: scores.C / total,
    }
    const maxPct = Math.max(...Object.values(raw))
    const scale = maxPct > 0 ? 1 / maxPct : 1
    return {
      D: raw.D * scale,
      I: raw.I * scale,
      S: raw.S * scale,
      C: raw.C * scale,
    }
  }, [scores, total])

  // ─── Points du polygone radar ─────────────────────────────────
  const radarPoints = useMemo(() => {
    return RADAR_AXES.map(axis => {
      const r = pcts[axis.key] * MAX_R
      return compassToXY(axis.compassAngle, r)
    })
  }, [pcts])
  const radarPolygon = radarPoints.map(p => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' ')

  // ─── Sous-profils du quadrant dominant ────────────────────────
  const dominantQuadrant = QUADRANT_ARCS.find(q => q.key === dominant)!
  const dominantSPKeys = useMemo(() => {
    return ALL_SP_KEYS.filter(k => subProfiles[k].zone.dominant === dominant)
  }, [dominant])

  // ─── Couleur principale ───────────────────────────────────────
  const mainColor = DISC_COLORS[dominant].main

  // ─── Sous-profil identifié ────────────────────────────────────
  const sp = identifiedSubProfile ? subProfiles[identifiedSubProfile] : null

  // ─── Gestion tooltip ──────────────────────────────────────────
  const handleDotHover = useCallback((spKey: SubProfileKey, svgX: number, svgY: number) => {
    setHoveredSP(spKey)
    setTooltipPos({ x: (svgX / 100) * 100, y: (svgY / 100) * 100 })
  }, [])

  const handleDotLeave = useCallback(() => {
    setHoveredSP(null)
  }, [])

  // Le sous-profil survolé
  const hoveredData = hoveredSP ? subProfiles[hoveredSP] : null

  // Déterminer si un sous-profil doit afficher son label
  const shouldShowLabel = useCallback((spKey: SubProfileKey): boolean => {
    if (spKey === identifiedSubProfile) return true
    if (phase2Unlocked && subProfiles[spKey].zone.dominant === dominant) return true
    if (!phase2Unlocked && subProfiles[spKey].zone.dominant === dominant) return true
    return false
  }, [dominant, identifiedSubProfile, phase2Unlocked])

  // Déterminer si un sous-profil est "verrouillé" (hors quadrant dominant, phase2 pas débloquée)
  const isLocked = useCallback((spKey: SubProfileKey): boolean => {
    if (phase2Unlocked) return false
    return subProfiles[spKey].zone.dominant !== dominant
  }, [dominant, phase2Unlocked])

  return (
    <div
      ref={containerRef}
      className="relative mx-auto select-none"
      style={{ width: size, height: size + 60 }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full"
        style={{ height: size }}
      >
        <defs>
          {/* Gradients radiaux pour chaque quadrant */}
          {QUADRANT_ARCS.map(q => (
            <radialGradient key={`qgrad-${q.key}`} id={`qgrad-${q.key}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={DISC_COLORS[q.key].main} stopOpacity="0.02" />
              <stop offset="70%" stopColor={DISC_COLORS[q.key].main} stopOpacity={q.key === dominant ? '0.10' : '0.04'} />
              <stop offset="100%" stopColor={DISC_COLORS[q.key].main} stopOpacity={q.key === dominant ? '0.16' : '0.06'} />
            </radialGradient>
          ))}

          {/* Gradient pour le polygone radar */}
          <radialGradient id="radar-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={mainColor} stopOpacity="0.30" />
            <stop offset="100%" stopColor={mainColor} stopOpacity="0.08" />
          </radialGradient>

          {/* Glow filter pour le sous-profil identifié */}
          <filter id="glow-identified" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur" />
            <feFlood floodColor={mainColor} floodOpacity="0.6" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="shadow" />
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Drop shadow subtile */}
          <filter id="dot-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0.3" stdDeviation="0.4" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* ═══ LAYER 1 : Fond des quadrants ═══ */}
        {QUADRANT_ARCS.map(q => (
          <path
            key={`wedge-${q.key}`}
            d={wedgePath(q.start, q.end, MAX_R + 1)}
            fill={`url(#qgrad-${q.key})`}
          />
        ))}

        {/* ═══ LAYER 2 : Grille concentrique circulaire ═══ */}
        {GRID_LEVELS.map(level => {
          const r = level * MAX_R
          return (
            <circle
              key={`grid-${level}`}
              cx={CENTER}
              cy={CENTER}
              r={r}
              fill="none"
              stroke={level === 1 ? '#D1D5DB' : '#E5E7EB'}
              strokeWidth={level === 1 ? '0.4' : '0.25'}
              strokeDasharray={level === 1 ? 'none' : '1.5,2'}
              opacity={level === 1 ? 0.8 : 0.5}
            />
          )
        })}

        {/* ═══ LAYER 3 : Lignes de séparation des quadrants ═══ */}
        {QUADRANT_ARCS.map(q => {
          const end = compassToXY(q.start, MAX_R + 1)
          return (
            <line
              key={`sep-${q.key}`}
              x1={CENTER}
              y1={CENTER}
              x2={end.x}
              y2={end.y}
              stroke="#D1D5DB"
              strokeWidth="0.3"
              strokeDasharray="2,2"
              opacity="0.6"
            />
          )
        })}

        {/* ═══ LAYER 4 : Arcs extérieurs colorés par quadrant ═══ */}
        {QUADRANT_ARCS.map(q => {
          const isActive = q.key === dominant
          return (
            <path
              key={`arc-${q.key}`}
              d={arcPath(q.start, q.end, OUTER_R)}
              fill="none"
              stroke={DISC_COLORS[q.key].main}
              strokeWidth={isActive ? OUTER_RING_W + 0.8 : OUTER_RING_W}
              strokeLinecap="round"
              opacity={isActive ? 1 : 0.3}
            />
          )
        })}

        {/* ═══ LAYER 5 : Axes radar (lignes fines vers les centres de quadrant) ═══ */}
        {RADAR_AXES.map(axis => {
          const end = compassToXY(axis.compassAngle, MAX_R)
          return (
            <line
              key={`raxis-${axis.key}`}
              x1={CENTER}
              y1={CENTER}
              x2={end.x}
              y2={end.y}
              stroke={DISC_COLORS[axis.key].main}
              strokeWidth="0.35"
              strokeOpacity="0.4"
            />
          )
        })}

        {/* ═══ LAYER 6 : Polygone radar des scores ═══ */}
        <polygon
          points={radarPolygon}
          fill="url(#radar-gradient)"
          stroke={mainColor}
          strokeWidth="1"
          strokeLinejoin="round"
          opacity="0.9"
          style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.08))' }}
        >
          <animate attributeName="opacity" values="0;0.9" dur="0.7s" fill="freeze" />
        </polygon>

        {/* Points aux sommets du radar */}
        {RADAR_AXES.map((axis, i) => {
          const p = radarPoints[i]
          const isMain = axis.key === dominant
          const dotR = isMain ? 1.8 : 1.2
          return (
            <circle
              key={`rdot-${axis.key}`}
              cx={p.x}
              cy={p.y}
              r={dotR}
              fill={DISC_COLORS[axis.key].main}
              stroke="white"
              strokeWidth="0.6"
            />
          )
        })}

        {/* ═══ LAYER 7 : Labels des profils principaux (D/I/S/C) ═══ */}
        {RADAR_AXES.map(axis => {
          const pct = Math.round((scores[axis.key] / total) * 100)
          const labelR = OUTER_R + 4.5
          const pos = compassToXY(axis.compassAngle, labelR)
          const color = DISC_COLORS[axis.key]
          const isMain = axis.key === dominant

          // Ajuster l'ancrage selon la position
          const angle = normAngle(axis.compassAngle)
          let anchor: 'start' | 'middle' | 'end' = 'middle'
          if (angle > 30 && angle < 150) anchor = 'start'
          else if (angle > 210 && angle < 330) anchor = 'end'

          let dy = 0
          if (angle < 30 || angle > 330) dy = -1
          else if (angle > 150 && angle < 210) dy = 3

          return (
            <g key={`label-${axis.key}`}>
              {/* Lettre D/I/S/C */}
              <text
                x={pos.x}
                y={pos.y + dy}
                textAnchor={anchor}
                fontSize={compact ? 4.2 : 4.8}
                fontWeight="800"
                fill={color.main}
                opacity={isMain ? 1 : 0.5}
              >
                {axis.key}
              </text>
              {/* Pourcentage */}
              <text
                x={pos.x}
                y={pos.y + dy + (compact ? 3.5 : 3.8)}
                textAnchor={anchor}
                fontSize={compact ? 3.2 : 3.4}
                fontWeight="700"
                fill={color.main}
                opacity={isMain ? 0.8 : 0.35}
              >
                {pct}%
              </text>
            </g>
          )
        })}

        {/* ═══ LAYER 8 : Sous-profils, 15 points positionnés ═══ */}
        {ALL_SP_KEYS.map(spKey => {
          const spData = subProfiles[spKey]
          const { angle, radius } = spData.mapPosition
          const r = radius * MAX_R
          const pos = compassToXY(angle, r)
          const color = DISC_COLORS[spData.zone.dominant]

          const isIdentified = spKey === identifiedSubProfile
          const isInDominantQ = spData.zone.dominant === dominant
          const locked = isLocked(spKey)
          const showLabel = shouldShowLabel(spKey)
          const isHovered = hoveredSP === spKey

          // Taille du point
          const dotRadius = isIdentified ? 2.5 : isInDominantQ ? 1.8 : 1.0

          // Opacité
          const dotOpacity = isIdentified ? 1 : isInDominantQ ? 0.9 : 0.3

          // Position du label (décalage intelligent, écarté du point pour éviter les chevauchements)
          const labelAngle = normAngle(angle)
          // Decalages agrandis pour eviter chevauchements entre sous-profils du meme quadrant
          let labelDx = 0
          let labelDy = -5.5
          let labelAnchor: 'start' | 'middle' | 'end' = 'middle'

          if (labelAngle >= 30 && labelAngle < 150) {
            labelDx = 6
            labelDy = 0.8
            labelAnchor = 'start'
          } else if (labelAngle >= 150 && labelAngle < 210) {
            labelDy = 6.5
          } else if (labelAngle >= 210 && labelAngle < 330) {
            labelDx = -6
            labelDy = 0.8
            labelAnchor = 'end'
          }
          // Micro-decalage vertical base sur hash du nom pour eviter collisions exactes
          const nameHash = (spData.name.charCodeAt(3) || 0) + (spData.name.charCodeAt(5) || 0)
          labelDy += ((nameHash % 5) - 2) * 1.4

          return (
            <g
              key={`sp-${spKey}`}
              className="transition-opacity duration-300"
              style={{ cursor: locked && onLockedClick ? 'pointer' : 'default' }}
              onMouseEnter={() => handleDotHover(spKey, pos.x, pos.y)}
              onMouseLeave={handleDotLeave}
              onClick={locked && onLockedClick ? onLockedClick : undefined}
            >
              {/* Halo de fond au survol */}
              {isHovered && (
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={dotRadius + 3}
                  fill={color.main}
                  opacity="0.12"
                >
                  <animate attributeName="r" values={`${dotRadius + 2};${dotRadius + 4};${dotRadius + 2}`} dur="1s" repeatCount="indefinite" />
                </circle>
              )}

              {/* Pulse animation pour le sous-profil identifié */}
              {isIdentified && (
                <>
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={dotRadius}
                    fill="none"
                    stroke={color.main}
                    strokeWidth="0.5"
                    opacity="0"
                  >
                    <animate attributeName="r" values={`${dotRadius};${dotRadius + 4};${dotRadius + 6}`} dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0.2;0" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={dotRadius}
                    fill="none"
                    stroke={color.main}
                    strokeWidth="0.3"
                    opacity="0"
                  >
                    <animate attributeName="r" values={`${dotRadius};${dotRadius + 3};${dotRadius + 5}`} dur="2s" repeatCount="indefinite" begin="0.5s" />
                    <animate attributeName="opacity" values="0.4;0.1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
                  </circle>
                </>
              )}

              {/* Point principal */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={isHovered ? dotRadius + 0.6 : dotRadius}
                fill={locked ? '#9CA3AF' : color.main}
                stroke="white"
                strokeWidth={isIdentified ? '0.8' : '0.5'}
                opacity={dotOpacity}
                filter={isIdentified ? 'url(#glow-identified)' : 'url(#dot-shadow)'}
                className="transition-all duration-200"
              />

              {/* Label du sous-profil */}
              {showLabel && !locked && (
                <text
                  x={pos.x + labelDx}
                  y={pos.y + labelDy}
                  textAnchor={labelAnchor}
                  fontSize={isIdentified ? 3.0 : 2.5}
                  fontWeight={isIdentified ? '700' : '600'}
                  fill={color.dark}
                  opacity={isIdentified ? 1 : 0.75}
                  className="pointer-events-none"
                  style={{ textShadow: '0 0 3px white, 0 0 3px white, 0 0 3px white' }}
                >
                  {spData.name.replace(/^(L'|Le |La )/, '')}
                </text>
              )}

              {/* Sous-profils verrouillés : pas de "?", juste le point grisé suffit */}
            </g>
          )
        })}

        {/* ═══ LAYER 9 : Badge central (sous-profil identifié) ═══ */}
        {sp && (
          <g>
            <rect
              x={CENTER - 13}
              y={CENTER - 3}
              width="26"
              height="6"
              rx="3"
              fill={mainColor}
              opacity="0.92"
              style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.15))' }}
            />
            <text
              x={CENTER}
              y={CENTER + 0.8}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={compact ? 2.2 : 2.5}
              fontWeight="700"
              fill="white"
              className="pointer-events-none"
            >
              {sp.name}
            </text>
          </g>
        )}

        {/* ═══ LAYER 10 : Descripteurs d'axes sur l'arc extérieur ═══ */}
        {/* Petits labels aux frontières des quadrants */}
        {[
          { angle: (343 + 52) / 2 + 180, text: 'Analytique & Assertif', textAngle: 17 },
          { angle: (52 + 185) / 2, text: 'Assertif & Méthodique', textAngle: 118 },
          { angle: (185 + 285) / 2, text: 'Supportif & Méthodique', textAngle: 235 },
          { angle: (285 + 343) / 2, text: 'Supportif & Assertif', textAngle: 314 },
        ].map((desc, i) => {
          const pos = compassToXY(desc.textAngle, MAX_R + 0.5)
          const angle = normAngle(desc.textAngle)
          let anchor: 'start' | 'middle' | 'end' = 'middle'
          if (angle > 30 && angle < 150) anchor = 'start'
          else if (angle > 210 && angle < 330) anchor = 'end'
          const dy = angle < 60 || angle > 300 ? -0.5 : angle > 120 && angle < 240 ? 2 : 0.5
          return (
            <text
              key={`desc-${i}`}
              x={pos.x}
              y={pos.y + dy}
              textAnchor={anchor}
              fontSize="1.4"
              fontWeight="400"
              fill="#9CA3AF"
              opacity="0.6"
              className="pointer-events-none"
            >
              {desc.text}
            </text>
          )
        })}

        {/* Animation d'entrée globale */}
        <animateTransform
          attributeName="transform"
          type="scale"
          values="0.92 0.92;1 1"
          dur="0.5s"
          fill="freeze"
          additive="sum"
        />
      </svg>

      {/* ═══ TOOLTIP OVERLAY ═══ */}
      {hoveredData && (
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            left: `${tooltipPos.x}%`,
            top: `${tooltipPos.y}%`,
            transform: 'translate(-50%, -120%)',
          }}
        >
          <div
            className="bg-white rounded-xl shadow-xl border px-4 py-3 max-w-[220px]"
            style={{ borderColor: DISC_COLORS[hoveredData.zone.dominant].main + '40' }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: DISC_COLORS[hoveredData.zone.dominant].main }}
              />
              <span className="text-xs font-bold text-cb-encre leading-tight">
                {hoveredData.name}
              </span>
            </div>
            <p className="text-[10px] text-cb-encre-soft leading-snug mb-1.5">
              {hoveredData.nameEn}
            </p>
            {/* Premiers traits */}
            <div className="space-y-0.5">
              {hoveredData.traits.slice(0, 2).map((trait, i) => (
                <p key={i} className="text-[10px] text-cb-encre-soft leading-snug flex gap-1">
                  <span className="text-gray-300 flex-shrink-0">•</span>
                  <span>{trait}</span>
                </p>
              ))}
            </div>
            {isLocked(hoveredSP!) && (
              <p className="text-[10px] text-amber-600 font-medium mt-1.5 flex items-center gap-1">
                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Phase 2 pour en savoir plus
              </p>
            )}
          </div>
        </div>
      )}

      {/* ═══ LÉGENDE ═══ */}
      <div
        className="flex justify-center gap-3 flex-wrap mt-2 px-4"
        style={{ marginTop: compact ? 8 : 12 }}
      >
        {RADAR_AXES.map(axis => {
          const pctVal = Math.round((scores[axis.key] / total) * 100)
          const isMain = axis.key === dominant
          const isSec = axis.key === secondary
          const q = QUADRANT_ARCS.find(q => q.key === axis.key)!
          return (
            <div key={axis.key} className="flex items-center gap-1.5">
              <div
                className="rounded-sm"
                style={{
                  width: isMain ? 14 : 10,
                  height: isMain ? 14 : 10,
                  backgroundColor: DISC_COLORS[axis.key].main,
                  opacity: isMain ? 1 : isSec ? 0.6 : 0.25,
                  border: isMain ? `2px solid ${DISC_COLORS[axis.key].dark}` : 'none',
                }}
              />
              <span
                className={`text-xs font-semibold whitespace-nowrap ${
                  isMain ? 'text-cb-encre' : isSec ? 'text-cb-encre-soft' : 'text-cb-encre-soft/70'
                }`}
              >
                {q.label} · {pctVal}%
              </span>
            </div>
          )
        })}
      </div>

      {/* Info sous-profil identifié */}
      {sp && (
        <div className="text-center mt-2 px-4">
          <p className="text-xs text-cb-encre-soft">
            Sous-profil identifié :{' '}
            <span className="font-bold" style={{ color: mainColor }}>
              {sp.name}
            </span>
            <span className="text-cb-encre-soft/70 ml-1">({sp.nameEn})</span>
          </p>
        </div>
      )}
    </div>
  )
}
