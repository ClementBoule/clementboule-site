'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useLang } from './LanguageContext'

const STYLES = `
@keyframes floatA { 0%,100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-18px) rotate(2deg); } }
@keyframes floatB { 0%,100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-12px) rotate(-3deg); } }
@keyframes floatC { 0%,100% { transform: translateY(0px); } 33% { transform: translateY(-8px); } 66% { transform: translateY(4px); } }
@keyframes gradientShift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
@keyframes orbPulse { 0%,100% { opacity: .18; transform: scale(1); } 50% { opacity: .28; transform: scale(1.12); } }
@keyframes orbPulse2 { 0%,100% { opacity: .12; transform: scale(1); } 50% { opacity: .22; transform: scale(1.08); } }
@keyframes discTileFloat { 0%,100% { transform: rotate(var(--r)) translateY(0); } 50% { transform: rotate(var(--r)) translateY(-5px); } }
@keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
.hero-name-shimmer { background: linear-gradient(90deg, #1A2B4A 40%, #3D6DB8 50%, #6B9ED4 60%, #1A2B4A 70%); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: shimmer 4s linear infinite; animation-delay: 1.5s; }
.hero-headline-gradient { background: linear-gradient(135deg, #1A2B4A 0%, #3D6DB8 55%, #6B9ED4 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.orb-a { animation: orbPulse 6s ease-in-out infinite; }
.orb-b { animation: orbPulse2 8s ease-in-out infinite 1s; }
.orb-c { animation: orbPulse 10s ease-in-out infinite 2s; }
.tile-d { --r: -3deg; animation: discTileFloat 4.2s ease-in-out infinite; }
.tile-i { --r: 2deg; animation: discTileFloat 3.8s ease-in-out infinite .4s; }
.tile-s { --r: -2deg; animation: discTileFloat 4.6s ease-in-out infinite .8s; }
.tile-c { --r: 3deg; animation: discTileFloat 4.0s ease-in-out infinite 1.2s; }
`

function FadeIn({ children, delay = 0, direction = 'up', className = '' }: { children: React.ReactNode; delay?: number; direction?: 'up'|'left'|'right'|'down'; className?: string }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVisible(true), delay); return () => clearTimeout(t) }, [delay])
  const tr = 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)'
  const hidden = direction === 'left' ? { opacity: 0, transform: 'translateX(-40px)', transition: tr } : direction === 'right' ? { opacity: 0, transform: 'translateX(40px)', transition: tr } : direction === 'down' ? { opacity: 0, transform: 'translateY(-24px)', transition: tr } : { opacity: 0, transform: 'translateY(24px)', transition: tr }
  return <div className={className} style={visible ? { opacity: 1, transform: 'none', transition: tr } : hidden}>{children}</div>
}

function DiscLogo({ size = 120 }: { size?: number }) {
  const s = size, tileW = s*0.23, tileH = s*0.23, gap = s*0.04, r = s*0.04
  const tiles = [
    { x: 0, y: s*0.06, w: tileW, h: tileH, fill: '#DC2626', letter: 'D', cls: 'tile-d' },
    { x: tileW+gap, y: 0, w: tileW*1.06, h: tileH*1.08, fill: '#EAB308', letter: 'I', cls: 'tile-i' },
    { x: (tileW+gap)*2, y: s*0.04, w: tileW, h: tileH, fill: '#16A34A', letter: 'S', cls: 'tile-s' },
    { x: (tileW+gap)*3, y: s*0.08, w: tileW*0.97, h: tileH*0.95, fill: '#2563EB', letter: 'C', cls: 'tile-c' },
  ]
  return (
    <svg width={s} height={s*0.35} viewBox={`-6 -6 ${s+12} ${s*0.35+12}`} overflow="visible" fill="none" xmlns="http://www.w3.org/2000/svg">
      {tiles.map((t,i) => (
        <g key={i} className={t.cls} style={{ transformOrigin: `${t.x+t.w/2}px ${t.y+t.h/2}px` }}>
          <rect x={t.x} y={t.y} width={t.w} height={t.h} rx={r} fill={t.fill} />
          <text x={t.x+t.w/2} y={t.y+t.h*0.68} textAnchor="middle" fill="white" fontSize={t.h*0.55} fontWeight="bold" fontFamily="Arial, Helvetica, sans-serif">{t.letter}</text>
        </g>
      ))}
    </svg>
  )
}

function FloatingShape({ style, className }: { style?: React.CSSProperties; className?: string }) {
  return <div className={className} style={style} />
}

export default function Hero() {
  const { t } = useLang()
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #EEF3FC 0%, #F5F7FA 40%, #EAF0FB 70%, #F0EEF8 100%)', backgroundSize: '400% 400%', animation: 'gradientShift 12s ease infinite' }}>
      <style>{STYLES}</style>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb-a absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, #F5A98C44 0%, transparent 70%)' }} />
        <div className="orb-b absolute top-1/3 -left-32 w-[420px] h-[420px] rounded-full" style={{ background: 'radial-gradient(circle, #6B9ED444 0%, transparent 70%)' }} />
        <div className="orb-c absolute bottom-0 left-1/2 -translate-x-1/2 w-[380px] h-[280px] rounded-full" style={{ background: 'radial-gradient(circle, #B09FE530 0%, transparent 70%)' }} />
        <FloatingShape className="absolute top-[18%] left-[8%] w-3 h-3 rounded-sm opacity-25" style={{ background: '#3D6DB8', transform: 'rotate(15deg)', animation: 'floatA 5s ease-in-out infinite' }} />
        <FloatingShape className="absolute top-[35%] right-[12%] w-4 h-4 rounded-sm opacity-20" style={{ background: '#F5A98C', transform: 'rotate(-10deg)', animation: 'floatB 6s ease-in-out infinite .5s' }} />
        <FloatingShape className="absolute bottom-[30%] left-[15%] w-2.5 h-2.5 rounded-full opacity-30" style={{ background: '#16A34A', animation: 'floatC 7s ease-in-out infinite 1s' }} />
        <FloatingShape className="absolute top-[60%] right-[20%] w-2 h-2 rounded-full opacity-25" style={{ background: '#EAB308', animation: 'floatA 4.5s ease-in-out infinite 2s' }} />
        <FloatingShape className="absolute bottom-[20%] right-[8%] w-3 h-3 opacity-20" style={{ background: '#DC2626', borderRadius: '2px', transform: 'rotate(30deg)', animation: 'floatB 5.5s ease-in-out infinite .8s' }} />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-5">
            <FadeIn direction="left" delay={80}><h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight hero-name-shimmer">Clément Boulé</h1></FadeIn>
            <FadeIn direction="left" delay={200}><div className="inline-flex items-center gap-2"><span className="w-8 h-[2px] rounded-full bg-gradient-to-r from-[#3D6DB8] to-[#6B9ED4]" /><p className="text-xl md:text-2xl font-semibold text-[#3D6DB8]">{t.hero.badge}</p></div></FadeIn>
            <FadeIn direction="left" delay={280}><h2 className="text-2xl md:text-3xl font-bold leading-snug hero-headline-gradient">{t.hero.headline}</h2></FadeIn>
            <FadeIn direction="left" delay={360}><p className="text-base md:text-lg text-[#1A2B4A]/65 leading-relaxed max-w-md">{t.hero.subtitle}</p></FadeIn>
            <FadeIn direction="left" delay={460}><div className="flex flex-wrap items-center gap-4 pt-3"><a href="/test-disc" className="inline-flex items-center gap-3 border border-[#1A2B4A]/15 hover:border-[#3D6DB8]/40 bg-white/70 hover:bg-white font-medium px-5 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#3D6DB8]/10 group backdrop-blur-sm"><DiscLogo size={80} /><span className="text-[#1A2B4A]/70 group-hover:text-[#3D6DB8] transition-colors">{t.hero.disc}</span></a></div></FadeIn>
            <FadeIn direction="left" delay={560}><div className="flex items-center gap-4 pt-2"><a href="https://www.linkedin.com/in/cl%C3%A9ment-boul%C3%A9/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#0A66C2] hover:text-[#004182] font-medium transition-all hover:-translate-y-0.5"><img src="/logos/linkedin.png" alt="LinkedIn" style={{ height: '20px', width: 'auto', objectFit: 'contain' }} />LinkedIn</a><span className="text-[#1A2B4A]/20">|</span><a href="https://www.malt.fr/profile/clementboule" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#FC5656] hover:text-[#E03E3E] font-medium transition-all hover:-translate-y-0.5"><img src="/logos/malt.png" alt="Malt" style={{ height: '20px', width: 'auto', objectFit: 'contain' }} />Malt</a></div></FadeIn>
          </div>
          <FadeIn direction="right" delay={150} className="relative flex justify-center md:justify-end">
            <div className="absolute inset-0 rounded-3xl blur-2xl scale-90" style={{ background: 'linear-gradient(135deg, #6B9ED455 0%, #F5A98C40 50%, #B09FE540 100%)', animation: 'orbPulse 5s ease-in-out infinite' }} />
            <div className="absolute -left-3 top-8 bottom-8 w-1 rounded-full bg-gradient-to-b from-[#3D6DB8] via-[#6B9ED4] to-[#B09FE5] opacity-60" />
            <div className="relative w-72 h-96 md:w-80 md:h-[460px] rounded-2xl overflow-hidden border border-[#3D6DB8]/20 shadow-2xl shadow-[#1A2B4A]/15 hover:shadow-[#3D6DB8]/25 hover:border-[#3D6DB8]/35 transition-all duration-500 hover:-translate-y-1">
              <Image src="/clement.jpg" alt="Clément Boulé" fill className="object-cover object-top" priority />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1A2B4A]/30 to-transparent" />
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#3D6DB8]/10 to-transparent" />
            </div>
            <a href="/test-disc" className="absolute -bottom-4 left-1/2 md:left-4 -translate-x-1/2 md:translate-x-0 flex items-center gap-2 bg-white border border-[#3D6DB8]/25 shadow-lg shadow-[#1A2B4A]/10 backdrop-blur-sm text-[#1A2B4A]/70 text-xs font-semibold px-4 py-2 rounded-full hover:border-[#3D6DB8]/50 hover:shadow-[#3D6DB8]/20 hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"><DiscLogo size={40} />{t.hero.discCta}</a>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-25" style={{ backgroundImage: 'radial-gradient(circle, #3D6DB8 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }} />
          </FadeIn>
        </div>
        <FadeIn delay={900} direction="up" className="absolute bottom-6 left-1/2 -translate-x-1/2"><div className="flex flex-col items-center gap-1 text-[#1A2B4A]/30 text-xs"><div className="w-[1px] h-8 bg-gradient-to-b from-[#3D6DB8]/50 to-transparent" style={{ animation: 'floatC 2s ease-in-out infinite' }} /></div></FadeIn>
      </div>
    </section>
  )
}
