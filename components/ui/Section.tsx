import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  bg?: 'white' | 'light' | 'dark'
  py?: 'sm' | 'md' | 'lg'
  className?: string
  id?: string
}

const bgs = {
  white: 'bg-white',
  light: 'bg-[#F5F7FB]',
  dark: 'bg-[#1A2B4A]',
}

const pys = {
  sm: 'py-12',
  md: 'py-16',
  lg: 'py-20 md:py-28',
}

export default function Section({ children, bg = 'white', py = 'lg', className = '', id }: SectionProps) {
  return (
    <section id={id} className={`${bgs[bg]} ${pys[py]} ${className}`}>
      {children}
    </section>
  )
}
