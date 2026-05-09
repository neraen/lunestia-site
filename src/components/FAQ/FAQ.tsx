import { SectionHead } from '../ui/SectionHead'
import { FAQItem } from './FAQItem'
import { AnimateIn } from '../ui/AnimateIn'
import styles from './FAQ.module.css'

const faqs = [
  {
    question: 'Lyra utilise-t-elle vraiment mon thème natal\u00a0?',
    answer:
      "Oui. À chaque échange, Lyra a accès à votre carte du ciel exacte (planètes, maisons, aspects) et aux transits du jour. Ses réponses sont calculées à partir de ces données — pas de phrases pré-écrites pour les douze signes.",
    defaultOpen: true,
  },
  {
    question: 'Mes données de naissance sont-elles privées\u00a0?',
    answer:
      "Vos informations restent chiffrées et ne sont jamais revendues. Vous pouvez supprimer votre compte et toutes vos données en un clic depuis l'app.",
  },
  {
    question: "Puis-je calculer le thème de quelqu'un d'autre\u00a0?",
    answer:
      "Oui, dans la section Compatibilité. Vous pouvez sauvegarder plusieurs profils (partenaire, enfants, amis) et faire des analyses synastriques entre eux.",
  },
  {
    question: "Et si je ne connais pas mon heure de naissance\u00a0?",
    answer:
      "Lunestia fonctionne sans heure exacte (vous obtenez votre Soleil, Lune et signes principaux). Mais pour l'Ascendant et les maisons, l'heure est nécessaire — un mode «\u00a0rectification\u00a0» vous aide à l'estimer.",
  },
  {
    question: 'Puis-je annuler à tout moment\u00a0?',
    answer:
      "Sans condition, depuis vos réglages App Store / Google Play. Pas d'engagement, pas de frais cachés.",
  },
]

export function FAQ() {
  return (
    <section className={styles.section} id="faq">
      <div className="container">
        <AnimateIn>
          <SectionHead
            eyebrow="Questions"
            title="Vous nous demandez souvent."
            centered
          />
        </AnimateIn>
        <div className={styles.grid}>
          {faqs.map((faq, i) => (
            <AnimateIn key={faq.question} delay={i * 50}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                defaultOpen={faq.defaultOpen}
              />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
