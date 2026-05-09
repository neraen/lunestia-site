import { ReactNode } from 'react'
import styles from './SectionHead.module.css'

interface SectionHeadProps {
  eyebrow: string
  title: ReactNode
  lead?: string
  centered?: boolean
  className?: string
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  centered = false,
  className = '',
}: SectionHeadProps) {
  return (
    <div
      className={`${styles.head} ${centered ? styles.centered : ''} ${className}`.trim()}
    >
      <div
        className={`${styles.eyebrow} ${centered ? styles.eyebrowCentered : ''}`.trim()}
      >
        {eyebrow}
      </div>
      <h2>{title}</h2>
      {lead && <p className={styles.lead}>{lead}</p>}
    </div>
  )
}
