'use client'
import { useEffect, useRef, ReactNode } from 'react'

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

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const cls =
      direction === 'left'
        ? 'reveal-left'
        : direction === 'right'
        ? 'reveal-right'
        : direction === 'scale'
        ? 'reveal-scale'
        : 'reveal'

    el.classList.add(cls)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('visible')
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, direction])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
