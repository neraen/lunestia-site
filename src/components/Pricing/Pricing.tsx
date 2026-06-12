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
                <span key="horoscope"><strong>Horoscope quotidien :</strong> Tes prévisions chaque jour.</span>,
                <span key="theme"><strong>Thème natal :</strong> Ta carte du ciel essentielle.</span>,
                <span key="lyra"><strong>Lyra IA :</strong> 5 questions à ton astrologue privé.</span>,
                <span key="compat"><strong>Compatibilité :</strong> 1 analyse relationnelle.</span>,
                <span key="miroir"><strong>Miroir Temporel :</strong> Aperçu d'une année de ta vie.</span>,
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
                <span key="illimite"><strong>Lyra en illimité :</strong> Pose tes questions sans aucune restriction.</span>,
                <span key="infinies"><strong>Compatibilités infinies :</strong> Teste toutes tes relations.</span>,
                <span key="transits"><strong>Calendrier des transits :</strong> Anticipe les mouvements planétaires.</span>,
                <span key="integral"><strong>Miroir intégral :</strong> L'analyse complète de ta chronologie.</span>,
                <span key="approfondi"><strong>Thème approfondi :</strong> Décrypte tes relations et ton chemin de vie.</span>,
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
