'use client'
import { useMemo } from 'react'
import type { ProfileKey, SubProfileKey } from './disc-data'
import { DISC_COLORS, subProfiles } from './disc-data'

// ─── DISC RADAR CHART (Toile d'araignée) ─────────────────────────────────
// Composant SVG : radar chart à 4 axes (D/I/S/C)
// - Grille concentrique en toile d'araignée
// - Zone colorée représentant les scores
// - Animation au reveal
// - Sous-profil identifié mis en évidence

interface DiscMapProps {
  scores: Record<ProfileKey, number>
  dominant: ProfileKey
  secondary: ProfileKey
  phase2Unlocked?: boolean
  identifiedSubProfile?: SubProfileKey | null
  onLockedClick?: () => void
  compact?: boolean
}

// Les 4 axes dans l'ordre : D (haut), I (droite), S (bas), C (gauche)
const AXES: { key: ProfileKey; label: string; angle: number }[] = [
  { key: 'D', label: 'Dominant', angle: -90 },    // haut
  { key: 'I', label: 'Influent', angle: 0 },      // droite
  { key: 'S', label: 'Stable', angle: 90 },       // bas
  { key: 'C', label: 'Consciencieux', angle: 180 }, // gauche
]

const CENTER = 50
const MAX_R = 40 // rayon max de la toile
const GRID_LEVELS = [0.25, 0.5, 0.75, 1.0] // niveaux de grille

function polarToXY(angleDeg: number, radius: number): { x: number; y: number } {
  const rad = (angleDeg * Math.PI) / 180
  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  }
}

export default function DiscMap({
  scores,
  dominant,
  secondary,
  phase2Unlocked = false,
  identifiedSubProfile = null,
  onLockedClick,
  compact = false,
}: DiscMapProps) {
  const total = Object.values(scores).reduce((a, b) => a + b, 0) || 1
  const size = compact ? 320 : 420

  // Calculer les pourcentages normalisés (0 à 1)
  const pcts = useMemo(() => {
    const raw: Record<ProfileKey, number> = {
      D: scores.D / total,
      I: scores.I / total,
      S: scores.S / total,
      C: scores.C / total,
    }
    // Normaliser pour que le max touche le bord
    const maxPct = Math.max(...Object.values(raw))
    const scale = maxPct > 0 ? 1 / maxPct : 1
    return {
      D: raw.D * scale,
      I: raw.I * scale,
      S: raw.S * scale,
      C: raw.C * scale,
    }
  }, [scores, total])

  // Points du polygone des scores
  const scorePoints = useMemo(() => {
    return AXES.map(axis => {
      const r = pcts[axis.key] * MAX_R
      return polarToXY(axis.angle, r)
    })
  }, [pcts])

  const scorePolygon = scorePoints.map(p => `${p.x},${p.y}`).join(' ')

  // Couleur du gradient basée sur le dominant
  const mainColor = DISC_COLORS[dominant].main
  const sp = identifiedSubProfile ? subProfiles[identifiedSubProfile] : null

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          {/* Gradient pour la zone des scores */}
          <radialGradient id="score-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={mainColor} stopOpacity="0.35" />
            <stop offset="100%" stopColor={mainColor} stopOpacity="0.12" />
          </radialGradient>
          {/* Gradient pour chaque quadrant de fond */}
          <linearGradient id="bg-D" x1="0.5" y1="0" x2="0.5" y2="0.5">
            <stop offset="0%" stopColor={DISC_COLORS.D.main} stopOpacity="0.06" />
            <stop offset="100%" stopColor={DISC_COLORS.D.main} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="bg-I" x1="1" y1="0.5" x2="0.5" y2="0.5">
            <stop offset="0%" stopColor={DISC_COLORS.I.main} stopOpacity="0.06" />
            <stop offset="100%" stopColor={DISC_COLORS.I.main} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="bg-S" x1="0.5" y1="1" x2="0.5" y2="0.5">
            <stop offset="0%" stopColor={DISC_COLORS.S.main} stopOpacity="0.06" />
            <stop offset="100%" stopColor={DISC_COLORS.S.main} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="bg-C" x1="0" y1="0.5" x2="0.5" y2="0.5">
            <stop offset="0%" stopColor={DISC_COLORS.C.main} stopOpacity="0.06" />
            <stop offset="100%" stopColor={DISC_COLORS.C.main} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Fond par quadrant (subtil) */}
        <path d={`M${CENTER},${CENTER} L${CENTER},${CENTER - MAX_R} A${MAX_R},${MAX_R} 0 0,1 ${CENTER + MAX_R},${CENTER} Z`} fill="url(#bg-D)" />
        <path d={`M${CENTER},${CENTER} L${CENTER + MAX_R},${CENTER} A${MAX_R},${MAX_R} 0 0,1 ${CENTER},${CENTER + MAX_R} Z`} fill="url(#bg-I)" />
        <path d={`M${CENTER},${CENTER} L${CENTER},${CENTER + MAX_R} A${MAX_R},${MAX_R} 0 0,1 ${CENTER - MAX_R},${CENTER} Z`} fill="url(#bg-S)" />
        <path d={`M${CENTER},${CENTER} L${CENTER - MAX_R},${CENTER} A${MAX_R},${MAX_R} 0 0,1 ${CENTER},${CENTER - MAX_R} Z`} fill="url(#bg-C)" />

        {/* Grille concentrique (toile d'araignée) */}
        {GRID_LEVELS.map(level => {
          const r = level * MAX_R
          const points = AXES.map(axis => polarToXY(axis.angle, r))
          const d = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ') + ' Z'
          return (
            <path
              key={level}
              d={d}
              fill="none"
              stroke="#E5E7EB"
              strokeWidth={level === 1 ? '0.5' : '0.3'}
              strokeDasharray={level === 1 ? 'none' : '1.5,1.5'}
            />
          )
        })}

        {/* Axes */}
        {AXES.map(axis => {
          const end = polarToXY(axis.angle, MAX_R)
          return (
            <line
              key={axis.key}
              x1={CENTER}
              y1={CENTER}
              x2={end.x}
              y2={end.y}
              stroke={DISC_COLORS[axis.key].main}
              strokeWidth="0.4"
              strokeOpacity="0.5"
            />
          )
        })}

        {/* Zone des scores (polygone rempli) */}
        <polygon
          points={scorePolygon}
          fill="url(#score-gradient)"
          stroke={mainColor}
          strokeWidth="1.2"
          strokeLinejoin="round"
          style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.1))' }}
        >
          <animate
            attributeName="opacity"
            values="0;1"
            dur="0.8s"
            fill="freeze"
          />
        </polygon>

        {/* Points sur chaque axe */}
        {AXES.map((axis, i) => {
          const p = scorePoints[i]
          const isMain = axis.key === dominant
          const r = isMain ? 2.5 : 1.8
          return (
            <g key={axis.key}>
              <circle
                cx={p.x}
                cy={p.y}
                r={r}
                fill={DISC_COLORS[axis.key].main}
                stroke="white"
                strokeWidth="0.8"
              />
              {isMain && (
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={r}
                  fill="none"
                  stroke={DISC_COLORS[axis.key].main}
                  strokeWidth="0.4"
                  opacity="0.5"
                >
                  <animate attributeName="r" values={`${r};${r + 3};${r}`} dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
                </circle>
              )}
            </g>
          )
        })}

        {/* Labels des axes avec pourcentages */}
        {AXES.map(axis => {
          const pct = Math.round((scores[axis.key] / total) * 100)
          const labelR = MAX_R + 6
          const pos = polarToXY(axis.angle, labelR)
          const isTop = axis.angle === -90
          const isBottom = axis.angle === 90
          const isLeft = axis.angle === 180
          const isRight = axis.angle === 0

          const anchor = isLeft ? 'end' : isRight ? 'start' : 'middle'
          const dy = isTop ? -1 : isBottom ? 3 : 0.5

          return (
            <g key={`label-${axis.key}`}>
              {/* Lettre DISC */}
              <text
                x={pos.x}
                y={pos.y + dy}
                textAnchor={anchor}
                fontSize={compact ? 4.5 : 5}
                fontWeight="800"
                fill={DISC_COLORS[axis.key].main}
              >
                {axis.key}
              </text>
              {/* Pourcentage */}
              <text
                x={pos.x}
                y={pos.y + dy + (compact ? 3.5 : 4)}
                textAnchor={anchor}
                fontSize={compact ? 3 : 3.2}
                fontWeight="600"
                fill={DISC_COLORS[axis.key].main}
                opacity="0.7"
              >
                {pct}%
              </text>
            </g>
          )
        })}

        {/* Sous-profil identifié — badge au centre */}
        {sp && (
          <g>
            <rect
              x={CENTER - 14}
              y={CENTER - 3.5}
              width="28"
              height="7"
              rx="3.5"
              fill={mainColor}
              opacity="0.9"
            />
            <text
              x={CENTER}
              y={CENTER + 1}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={compact ? 2.5 : 2.8}
              fontWeight="700"
              fill="white"
            >
              {sp.name}
            </text>
          </g>
        )}
      </svg>

      {/* Légende en dessous */}
      <div className="flex justify-center gap-4 mt-3 flex-wrap">
        {AXES.map(axis => {
          const pct = Math.round((scores[axis.key] / total) * 100)
          return (
            <div key={axis.key} className="flex items-center gap-1.5">
              <div
                className="w-3 h-3 rounded-sm"
                style={{
                  backgroundColor: DISC_COLORS[axis.key].main,
                  opacity: axis.key === dominant ? 1 : 0.4,
                }}
              />
              <span
                className={`text-xs font-semibold ${
                  axis.key === dominant ? 'text-gray-900' : 'text-gray-400'
                }`}
              >
                {axis.label} · {pct}%
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
