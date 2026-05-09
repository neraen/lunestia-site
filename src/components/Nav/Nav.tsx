import { Logo } from '../ui/Logo'
import { Button } from '../ui/Button'
import styles from './Nav.module.css'

export function Nav() {
  return (
    <nav className={styles.nav} aria-label="Navigation principale">
      <div className={`container ${styles.inner}`}>
        <Logo />
        <div className={styles.links}>
          <a href="#features" className={styles.link}>
            Fonctionnalités
          </a>
          <a href="#showcase" className={styles.link}>
            L'app
          </a>
          <a href="#pricing" className={styles.link}>
            Tarifs
          </a>
          <a href="#faq" className={styles.link}>
            FAQ
          </a>
        </div>
        <Button href="#download" variant="primary">
          Télécharger
        </Button>
      </div>
    </nav>
  )
}
