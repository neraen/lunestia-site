import { ReactNode } from 'react'
import styles from './Badge.module.css'

interface BadgeProps {
  children: ReactNode
}

export function Badge({ children }: BadgeProps) {
  return (
    <div className={styles.badge}>
      <span className={styles.dot} aria-hidden="true" />
      {children}
    </div>
  )
}
