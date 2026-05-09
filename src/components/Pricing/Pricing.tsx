import { SectionHead } from '../ui/SectionHead'
import { PriceCard } from './PriceCard'
import { AnimateIn } from '../ui/AnimateIn'
import styles from './Pricing.module.css'

export function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className="container">
        <AnimateIn>
          <SectionHead
            eyebrow="Tarifs"
            title={
              <>
                Simple. <em>Honnête.</em>
              </>
            }
            lead="Commencez gratuitement. Passez Premium quand vous voulez aller plus loin."
            centered
          />
        </AnimateIn>
        <div className={styles.grid}>
          <AnimateIn>
            <PriceCard
              name="Découverte"
              description="Pour comprendre les bases de votre ciel."
              price="0€"
              period="/ pour toujours"
              features={[
                'Horoscope du jour personnalisé',
                'Thème natal (Soleil, Lune, Asc.)',
                '3 questions à Lyra par mois',
              ]}
              ctaText="Commencer gratuitement"
              ctaVariant="ghost"
            />
          </AnimateIn>
          <AnimateIn delay={100}>
            <PriceCard
              name="Premium"
              description="L'expérience complète, sans limite."
              price="7,99€"
              period="/ mois"
              features={[
                'Tout du plan Découverte',
                'Lyra en illimité, 24/7',
                'Synastrie & compatibilité détaillées',
                'Calendrier astral complet',
                'Notifications de transits',
              ]}
              ctaText="Essayer 7 jours gratuits"
              ctaVariant="primary"
              featured
              featuredTag="Recommandé"
            />
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
