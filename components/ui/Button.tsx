import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  target?: string
  rel?: string
}

const variants = {
  primary: 'bg-[#3D6DB8] text-white hover:bg-[#2D5A9E] shadow-md',
  secondary: 'bg-white text-[#1A2B4A] border border-[#1A2B4A]/10 hover:border-[#3D6DB8]/30 hover:bg-[#F5F7FB]',
  ghost: 'text-[#3D6DB8] hover:bg-[#3D6DB8]/8',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled,
  target,
  rel,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
