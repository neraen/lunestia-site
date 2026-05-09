import { ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  variant?: 'primary' | 'ghost'
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  href,
  onClick,
}: ButtonProps) {
  const cls = `${styles.btn} ${variant === 'primary' ? styles.primary : styles.ghost} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
