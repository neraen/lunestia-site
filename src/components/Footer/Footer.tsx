import { Logo } from '../ui/Logo'
import styles from './Footer.module.css'

const productLinks = [
  { label: 'Fonctionnalités', href: '#features' },
  { label: 'Tarifs', href: '#pricing' },
  { label: 'Lyra · IA', href: '#' },
  { label: 'Mises à jour', href: '#' },
]

const resourceLinks = [
  { label: 'Glossaire astrologique', href: '#' },
  { label: 'Blog', href: '#' },
  { label: "Centre d'aide", href: '#' },
  { label: 'Contact', href: '#' },
]

const companyLinks = [
  { label: 'À propos', href: '#' },
  { label: 'Mentions légales', href: '#' },
  { label: 'Confidentialité', href: '#' },
  { label: 'CGU', href: '#' },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <Logo />
            <p className={styles.about}>
              L'astrologie personnelle, calculée au degré près. Pour les curieux
              du ciel comme pour les habitués des thèmes natals.
            </p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Produit</h4>
            <ul className={styles.colList}>
              {productLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className={styles.link}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Ressources</h4>
            <ul className={styles.colList}>
              {resourceLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className={styles.link}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Entreprise</h4>
            <ul className={styles.colList}>
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className={styles.link}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div>© 2026 Lunestia · Fait avec attention sous les étoiles.</div>
          <div>Paris · Lisbonne</div>
        </div>
      </div>
    </footer>
  )
}
