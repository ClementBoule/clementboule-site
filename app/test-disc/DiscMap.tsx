'use client'
import { useMemo } from 'react'
import type { ProfileKey, SubProfileKey } from './disc-data'
import { DISC_COLORS, subProfiles } from './disc-data'

// ─── DISC CARTOGRAPHY MAP ──────────────────────────────────────────────────
// Composant SVG interactif de la carte DISC circulaire avec :
// - 4 quadrants colorés (D/I/S/C)
// - 15 sous-profils positionnés
// - Mode "teasing" (sous-profils cachés avec "?")
// - Mode "résultat" (position exacte de l'utilisateur mise en évidence)

interface DiscMapProps {
  scores: Record<ProfileKey, number>
  dominant: ProfileKey
  secondary: ProfileKey
  phase2Unlocked?: boolean
  identifiedSubProfile?: SubProfileKey | null
  onLockedClick?: () => void
  compact?: boolean
}

const SUB_PROFILE_POSITIONS: Record<SubProfileKey, { x: number; y: number }> = {
  evaluateur:    { x: 62, y: 18 },
  explorateur:   { x: 78, y: 28 },
  competiteur:   { x: 85, y: 15 },
  producteur:    { x: 82, y: 40 },
  inspirateur:   { x: 82, y: 55 },
  influenceur:   { x: 85, y: 72 },
  promoteur:     { x: 75, y: 82 },
  coach:         { x: 55, y: 82 },
  pacificateur:  { x: 28, y: 82 },
  planificateur: { x: 18, y: 72 },
  factuel:       { x: 15, y: 55 },
  formaliste:    { x: 15, y: 40 },
  concretiseur:  { x: 22, y: 28 },
  investigateur: { x: 35, y: 18 },
  technicien:    { x: 18, y: 20 },
}

const SUB_PROFILE_QUADRANT: Record<SubProfileKey, ProfileKey> = {
  evaluateur: 'D', explorateur: 'D', competiteur: 'D', producteur: 'D',
  inspirateur: 'I', influenceur: 'I', promoteur: 'I',
  coach: 'S', pacificateur: 'S', planificateur: 'S',
  factuel: 'C', formaliste: 'C', concretiseur: 'C', investigateur: 'C', technicien: 'C',
}

export default function DiscMap({
  scores, dominant, secondary, phase2Unlocked = false,
  identifiedSubProfile = null, onLockedClick, compact = false,
}: DiscMapProps) {
  const total = Object.values(scores).reduce((a, b) => a + b, 0) || 1
  const size = compact ? 320 : 420
  const userPosition = useMemo(() => {
    const dPct = scores.D / total
    const iPct = scores.I / total
    const sPct = scores.S / total
    const cPct = scores.C / total
    const x = 50 + (dPct + iPct - sPct - cPct) * 40
    const y = 50 + (sPct + iPct - dPct - cPct) * 40
    return { x, y }
  }, [scores, total])
  const fontSize = compact ? 8 : 10
  const labelFontSize = compact ? 7 : 9
  const dotR = compact ? 4 : 5

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="w-full h-full" style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.08))' }}>
        <defs>
          <clipPath id="disc-circle"><circle cx="50" cy="50" r="46" /></clipPath>
          {(['D', 'I', 'S', 'C'] as ProfileKey[]).map(k => (
            <radialGradient key={k} id={`grad-${k}`} cx="50%" cy="50%" r="80%">
              <stop offset="0%" stopColor={DISC_COLORS[k].main} stopOpacity="0.08" />
              <stop offset="100%" stopColor={DISC_COLORS[k].main} stopOpacity="0.25" />
            </radialGradient>
          ))}
        </defs>
        <circle cx="50" cy="50" r="46" fill="white" stroke="#E5E7EB" strokeWidth="0.5" />
        <g clipPath="url(#disc-circle)">
          <path d="M50,50 L50,4 A46,46 0 0,1 96,50 Z" fill={`url(#grad-D)`} />
          <path d="M50,50 L96,50 A46,46 0 0,1 50,96 Z" fill={`url(#grad-I)`} />
          <path d="M50,50 L50,96 A46,46 0 0,1 4,50 Z" fill={`url(#grad-S)`} />
          <path d="M50,50 L4,50 A46,46 0 0,1 50,4 Z" fill={`url(#grad-C)`} />
        </g>
        {[15, 28, 38].map(r => (
          <circle key={r} cx="50" cy="50" r={r} fill="none" stroke="#E5E7EB" strokeWidth="0.3" strokeDasharray="2,2" />
        ))}
        <line x1="50" y1="4" x2="50" y2="96" stroke="#D1D5DB" strokeWidth="0.4" />
        <line x1="4" y1="50" x2="96" y2="50" stroke="#D1D5DB" strokeWidth="0.4" />
        <line x1="17" y1="17" x2="83" y2="83" stroke="#E5E7EB" strokeWidth="0.2" strokeDasharray="1,2" />
        <line x1="83" y1="17" x2="17" y2="83" stroke="#E5E7EB" strokeWidth="0.2" strokeDasharray="1,2" />
        <text x="50" y="2.5" textAnchor="middle" fontSize="3.5" fontWeight="800" fill={DISC_COLORS.D.main} opacity="0.7">ASSERTIF</text>
        <text x="50" y="99" textAnchor="middle" fontSize="3.5" fontWeight="800" fill={DISC_COLORS.S.main} opacity="0.7">SUPPORTIF</text>
        <text x="2" y="50" textAnchor="start" fontSize="3.5" fontWeight="800" fill={DISC_COLORS.C.main} opacity="0.7" transform="rotate(-90, 2, 50)" dy="1">ANALYTIQUE</text>
        <text x="98" y="50" textAnchor="end" fontSize="3.5" fontWeight="800" fill={DISC_COLORS.I.main} opacity="0.7" transform="rotate(90, 98, 50)" dy="1">PERSUASIF</text>
        <text x="72" y="22" textAnchor="middle" fontSize="14" fontWeight="900" fill={DISC_COLORS.D.main} opacity="0.12">D</text>
        <text x="78" y="72" textAnchor="middle" fontSize="14" fontWeight="900" fill={DISC_COLORS.I.main} opacity="0.12">I</text>
        <text x="28" y="78" textAnchor="middle" fontSize="14" fontWeight="900" fill={DISC_COLORS.S.main} opacity="0.12">S</text>
        <text x="22" y="28" textAnchor="middle" fontSize="14" fontWeight="900" fill={DISC_COLORS.C.main} opacity="0.12">C</text>
        {[
          { profile: 'D' as ProfileKey, startAngle: -90, endAngle: 0 },
          { profile: 'I' as ProfileKey, startAngle: 0, endAngle: 90 },
          { profile: 'S' as ProfileKey, startAngle: 90, endAngle: 180 },
          { profile: 'C' as ProfileKey, startAngle: 180, endAngle: 270 },
        ].map(({ profile, startAngle, endAngle }) => {
          const r = 46
          const x1 = 50 + r * Math.cos((startAngle * Math.PI) / 180)
          const y1 = 50 + r * Math.sin((startAngle * Math.PI) / 180)
          const x2 = 50 + r * Math.cos((endAngle * Math.PI) / 180)
          const y2 = 50 + r * Math.sin((endAngle * Math.PI) / 180)
          return (
            <path key={profile} d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
              fill="none" stroke={DISC_COLORS[profile].main} strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
          )
        })}
        {(Object.keys(subProfiles) as SubProfileKey[]).map(key => {
          const pos = SUB_PROFILE_POSITIONS[key]
          const quadrant = SUB_PROFILE_QUADRANT[key]
          const color = DISC_COLORS[quadrant]
          const sp = subProfiles[key]
          const isIdentified = identifiedSubProfile === key
          const isInDominantZone = quadrant === dominant
          const isLocked = !phase2Unlocked && !isIdentified
          const showLabel = phase2Unlocked || isIdentified || isInDominantZone
          const showAsLocked = isLocked && !isInDominantZone
          return (
            <g key={key} className="transition-all duration-300"
              style={{ cursor: showAsLocked && onLockedClick ? 'pointer' : 'default' }}
              onClick={() => showAsLocked && onLockedClick?.()}>
              <circle cx={pos.x} cy={pos.y} r={isIdentified ? dotR + 2 : dotR}
                fill={isIdentified ? color.main : showAsLocked ? '#D1D5DB' : `${color.main}88`}
                stroke={isIdentified ? 'white' : 'none'} strokeWidth={isIdentified ? 1 : 0}>
                {isIdentified && (
                  <animate attributeName="r" values={`${dotR + 2};${dotR + 4};${dotR + 2}`} dur="2s" repeatCount="indefinite" />
                )}
              </circle>
              {showAsLocked ? (
                <text x={pos.x} y={pos.y + 0.8} textAnchor="middle" dominantBaseline="central"
                  fontSize={fontSize} fontWeight="900" fill="#9CA3AF">?</text>
              ) : (
                <text x={pos.x} y={pos.y + (compact ? 7 : 9)} textAnchor="middle"
                  fontSize={labelFontSize} fontWeight={isIdentified ? '800' : '600'}
                  fill={isIdentified ? color.dark : `${color.main}99`}>
                  {sp.name.replace("L'", '').replace('Le ', '')}
                </text>
              )}
            </g>
          )
        })}
        <g>
          <circle cx={userPosition.x} cy={userPosition.y} r="3" fill="white"
            stroke={DISC_COLORS[dominant].main} strokeWidth="1.5" />
          <circle cx={userPosition.x} cy={userPosition.y} r="1.5" fill={DISC_COLORS[dominant].main} />
          <circle cx={userPosition.x} cy={userPosition.y} r="3" fill="none"
            stroke={DISC_COLORS[dominant].main} strokeWidth="0.5" opacity="0.5">
            <animate attributeName="r" values="3;8;3" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
      <div className="flex justify-center gap-4 mt-3 flex-wrap">
        {(['D', 'I', 'S', 'C'] as ProfileKey[]).map(k => {
          const pct = Math.round((scores[k] / total) * 100)
          return (
            <div key={k} className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: DISC_COLORS[k].main, opacity: k === dominant ? 1 : 0.4 }} />
              <span className={`text-xs font-semibold ${k === dominant ? 'text-gray-900' : 'text-gray-400'}`}>
                {k} · {pct}%
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
