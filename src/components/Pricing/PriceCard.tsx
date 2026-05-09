import { Button } from '../ui/Button'
import styles from './PriceCard.module.css'

interface PriceCardProps {
  name: string
  description: string
  price: string
  period: string
  features: string[]
  ctaText: string
  ctaVariant?: 'primary' | 'ghost'
  featured?: boolean
  featuredTag?: string
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export function PriceCard({
  name,
  description,
  price,
  period,
  features,
  ctaText,
  ctaVariant = 'ghost',
  featured = false,
  featuredTag,
}: PriceCardProps) {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''}`}>
      {featured && featuredTag && (
        <span className={styles.tag}>{featuredTag}</span>
      )}
      <div className={`serif ${styles.name}`}>{name}</div>
      <div className={styles.desc}>{description}</div>
      <div className={styles.amount}>
        <span className={`serif ${styles.num}`}>{price}</span>
        <span className={styles.per}>{period}</span>
      </div>
      <ul className={styles.features}>
        {features.map((f) => (
          <li key={f} className={styles.featureItem}>
            <CheckIcon />
            {f}
          </li>
        ))}
      </ul>
      <Button href="#download" variant={ctaVariant} className={styles.cta}>
        {ctaText}
      </Button>
    </div>
  )
}
