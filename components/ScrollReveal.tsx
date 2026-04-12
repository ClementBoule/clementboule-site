'use client'
import { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'scale'
  className?: string
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const transition = 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)'

  const hiddenStyle: React.CSSProperties =
    direction === 'left'
      ? { opacity: 0, transform: 'translateX(-32px)', transition }
      : direction === 'right'
      ? { opacity: 0, transform: 'translateX(32px)', transition }
      : direction === 'scale'
      ? { opacity: 0, transform: 'scale(0.93)', transition }
      : { opacity: 0, transform: 'translateY(32px)', transition }

  const visibleStyle: React.CSSProperties = {
    opacity: 1,
    transform: 'translateY(0) translateX(0) scale(1)',
    transition,
  }

  return (
    <div ref={ref} className={className} style={visible ? visibleStyle : hiddenStyle}>
      {children}
    </div>
  )
}
