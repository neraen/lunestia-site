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
                Comprenez vos cycles. <em>Explorez votre destinée.</em>
              </>
            }
            lead="Des analyses astrologiques claires, modernes et personnalisées."
            centered
          />
        </AnimateIn>
        <div className={styles.grid}>
          <AnimateIn>
            <PriceCard
              name="Gratuit"
              description="Pour comprendre les bases de votre ciel."
              price="0€"
              period="/ pour toujours"
              features={[
                <span key="horoscope"><strong>Horoscope quotidien :</strong> tes prévisions du jour.</span>,
                <span key="theme"><strong>Thème natal :</strong> ta carte du ciel.</span>,
                <span key="lyra"><strong>Lyra IA :</strong> 5 questions gratuites.</span>,
                <span key="compat"><strong>Compatibilité :</strong> 1 analyse relationnelle.</span>,
                <span key="miroir"><strong>Miroir Temporel :</strong> 1 année dévoilée.</span>,
              ]}
              ctaText="Commencer gratuitement"
              ctaVariant="ghost"
            />
          </AnimateIn>
          <AnimateIn delay={100}>
            <PriceCard
              name="Premium"
              description="L'expérience complète, sans limite."
              price="7,99 €"
              period="/ mois"
              features={[
                <span key="illimite"><strong>Lyra en illimité :</strong> poses toutes tes questions.</span>,
                <span key="infinies"><strong>Compatibilité illimitée :</strong> teste tes relations.</span>,
                <span key="transits"><strong>Calendrier des transits :</strong> anticipe ton futur.</span>,
                <span key="integral"><strong>Miroir intégral :</strong> décrypte ta chronologie.</span>,
                <span key="approfondi"><strong>Thème approfondi :</strong> relations et destinée.</span>,
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
