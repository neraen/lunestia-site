import { AnimateIn } from '../ui/AnimateIn'
import styles from './CTABanner.module.css'

function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  )
}

function GooglePlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.6 1.6c-.4.4-.6 1-.6 1.7v17.4c0 .8.2 1.3.6 1.7l.1.1L13 13l-9.4-9.4zM16.8 16.8 14.2 14l8 4.6c-.4.4-.9.5-1.5.3l-3.9-2.1zM22.2 5.4l-8 4.6 2.6-2.7 4 2.2c.5.4.5 1.4-.6-.1zM4.4 23.1c.3.1.7 0 1-.2L18 16l-3.6-3.5L4.4 23.1z" />
    </svg>
  )
}

export function CTABanner() {
  return (
    <section className={styles.section} id="download">
      <div className="container">
        <AnimateIn>
          <div className={styles.banner}>
            <div className={styles.eyebrow}>L'app</div>
            <h2>
              Votre ciel vous attend, <em>déjà.</em>
            </h2>
            <p className={styles.lead}>
              Téléchargez Lunestia gratuitement et recevez votre premier portrait
              astral en 2 minutes.
            </p>
            <div className={styles.actions}>
              <a
                href="#"
                className={styles.storeBtn}
                aria-label="Télécharger sur l'App Store"
              >
                <AppleIcon />
                <div>
                  <div className={styles.storeBtnSmall}>Télécharger sur l'</div>
                  <div className={`serif ${styles.storeBtnBig}`}>App Store</div>
                </div>
              </a>
              <a
                href="#"
                className={styles.storeBtn}
                aria-label="Disponible sur Google Play"
              >
                <GooglePlayIcon />
                <div>
                  <div className={styles.storeBtnSmall}>Disponible sur</div>
                  <div className={`serif ${styles.storeBtnBig}`}>Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
