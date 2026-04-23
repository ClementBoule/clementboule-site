import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const maxWidths = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
}

export default function Container({ children, size = 'lg', className = '' }: ContainerProps) {
  return (
    <div className={`${maxWidths[size]} mx-auto px-6 ${className}`}>
      {children}
    </div>
  )
}
