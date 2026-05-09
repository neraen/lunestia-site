import { SectionHead } from '../ui/SectionHead'
import { FeatureCard } from './FeatureCard'
import { AnimateIn } from '../ui/AnimateIn'
import styles from './Features.module.css'

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    iconVariant: 'gold' as const,
    title: 'Horoscope du jour',
    text: 'Une lecture personnalisée chaque matin, basée sur vos transits réels — pas un signe solaire générique.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
      </svg>
    ),
    iconVariant: 'gold' as const,
    title: 'Thème natal complet',
    text: 'Soleil, Lune, Ascendant, maisons, aspects. Chaque planète expliquée dans un langage clair et incarné.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 21s-7-4.35-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.65-7 10-7 10z" />
      </svg>
    ),
    iconVariant: 'pink' as const,
    title: 'Compatibilité',
    text: 'Synastrie détaillée à deux thèmes. Allez plus loin que les signes — comprenez vraiment votre dynamique.',
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    iconVariant: 'violet' as const,
    title: 'Lyra · Votre astrologue IA',
    text: "Posez n'importe quelle question — du choix de carrière à la dispute du week-end. Lyra répond avec votre carte sous les yeux, pas avec des banalités.",
    span2: true,
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    iconVariant: 'gold' as const,
    title: 'Calendrier astral',
    text: "Visualisez d'un coup d'œil les jours forts, les rétrogrades et les transits qui vous concernent vraiment.",
  },
]

export function Features() {
  return (
    <section className={styles.section} id="features">
      <div className="container">
        <AnimateIn>
          <SectionHead
            eyebrow="Fonctionnalités"
            title={
              <>
                Tout votre ciel,
                <br />
                <em>au creux de la main.</em>
              </>
            }
            lead="Cinq outils pensés pour aller au-delà du signe solaire et révéler la vraie nuance de votre carte du ciel."
          />
        </AnimateIn>
        <div className={styles.grid}>
          {features.map(({ title, icon, iconVariant, text, span2 }, i) => (
            <AnimateIn key={title} delay={i * 60}>
              <FeatureCard
                icon={icon}
                iconVariant={iconVariant}
                title={title}
                text={text}
                span2={span2}
              />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
