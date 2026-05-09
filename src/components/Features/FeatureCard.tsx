import { ReactNode } from 'react'
import styles from './FeatureCard.module.css'

interface FeatureCardProps {
  icon: ReactNode
  iconVariant?: 'gold' | 'pink' | 'violet'
  title: string
  text: string
  span2?: boolean
}

export function FeatureCard({
  icon,
  iconVariant = 'gold',
  title,
  text,
  span2 = false,
}: FeatureCardProps) {
  const iconCls = `${styles.icon} ${
    iconVariant === 'pink'
      ? styles.iconPink
      : iconVariant === 'violet'
        ? styles.iconViolet
        : styles.iconGold
  }`

  return (
    <div className={`${styles.card} ${span2 ? styles.span2 : ''}`}>
      <div className={iconCls}>{icon}</div>
      <div className={`serif ${styles.title}`}>{title}</div>
      <p className={styles.text}>{text}</p>
    </div>
  )
}
