import { AnimateIn } from '../ui/AnimateIn'
import styles from './ProofBar.module.css'

const stats = [
  { num: '180k+', label: 'Thèmes calculés' },
  { num: '4.9', label: 'Note moyenne' },
  { num: '42', label: 'Pays' },
  { num: '24/7', label: 'Lyra disponible' },
]

export function ProofBar() {
  return (
    <section className={styles.proof} aria-label="Chiffres clés">
      <div className={`container ${styles.inner}`}>
        <AnimateIn>
          <p className={styles.label}>Une nouvelle façon d'écouter le ciel</p>
        </AnimateIn>
        <div className={styles.stats}>
          {stats.map(({ num, label }, i) => (
            <AnimateIn key={label} delay={i * 80}>
              <div className={styles.stat}>
                <span className={`serif ${styles.num}`}>{num}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
