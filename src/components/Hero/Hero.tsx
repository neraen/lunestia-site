import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { PhoneStack } from './PhoneStack'
import { AnimateIn } from '../ui/AnimateIn'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <header className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <AnimateIn>
          <Badge>Nouveau · Astrologue IA</Badge>
          <h1 className={`serif ${styles.title}`}>
            L'astrologie qui vous <em>ressemble</em> vraiment.
          </h1>
          <p className={styles.sub}>
            Lunestia décode votre thème natal, vos transits et votre
            compatibilité au degré près. Plus qu'un horoscope — un guide intime,
            calculé pour votre ciel, conversationnel quand il faut.
          </p>
          <div className={styles.actions}>
            <Button href="#download" variant="primary">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z" />
              </svg>
              Télécharger l'app
            </Button>
            <Button href="#showcase" variant="ghost">
              Voir une démo
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Button>
          </div>
          <div className={styles.meta}>
            <div className={styles.rating}>
              <div className={styles.stars} aria-label="5 étoiles">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
                  </svg>
                ))}
              </div>
              <span className={styles.metaText}>
                <strong>4.9</strong> / 5 sur l'App Store
              </span>
            </div>
            <div className={styles.metaText}>
              <strong>180&nbsp;000+</strong> utilisateurs guidés
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={150}>
          <PhoneStack />
        </AnimateIn>
      </div>
    </header>
  )
}
