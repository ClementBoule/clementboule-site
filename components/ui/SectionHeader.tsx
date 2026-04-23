interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({ label, title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {label && (
        <p className={`text-xs font-semibold ${light ? 'text-white/60' : 'text-[#3D6DB8]'} uppercase tracking-widest mb-3`}>
          {label}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold ${light ? 'text-white' : 'text-[#1A2B4A]'} leading-tight mb-4`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base ${light ? 'text-white/70' : 'text-[#6B7E95]'} leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
