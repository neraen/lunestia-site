import { SectionHead } from '../ui/SectionHead'
import { AnimateIn } from '../ui/AnimateIn'
import styles from './Testimonials.module.css'

interface Testimonial {
  quote: string
  name: string
  meta: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      '«\u00a0Lyra m\u2019a dit en deux phrases ce que trois apps n\u2019avaient pas su voir. C\u2019est précis, et c\u2019est vraiment moi.\u00a0»',
    name: 'Margaux L.',
    meta: 'Lyon · Bélier ascendant Lion',
    avatar: 'M',
  },
  {
    quote:
      '«\u00a0Le calendrier astral m\u2019a fait planifier le lancement de mon studio sur la bonne semaine. Aucun regret.\u00a0»',
    name: 'Théo R.',
    meta: 'Paris · Verseau',
    avatar: 'T',
  },
  {
    quote:
      '«\u00a0Enfin une app qui ne me prend pas pour une débutante. La synastrie m\u2019a appris des choses sur mon couple.\u00a0»',
    name: 'Salma B.',
    meta: 'Marseille · Cancer ascendant Scorpion',
    avatar: 'S',
  },
]

function StarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
    </svg>
  )
}

function TestimonialCard({ quote, name, meta, avatar }: Testimonial) {
  return (
    <div className={styles.card}>
      <div className={styles.stars} aria-label="5 étoiles sur 5">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <p className={`serif ${styles.quote}`}>{quote}</p>
      <div className={styles.author}>
        <div className={styles.avatar} aria-hidden="true">
          {avatar}
        </div>
        <div>
          <div className={styles.name}>{name}</div>
          <div className={styles.authorMeta}>{meta}</div>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <AnimateIn>
          <SectionHead
            eyebrow="Témoignages"
            title="Ils ont retrouvé leur ciel."
            centered
          />
        </AnimateIn>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 80}>
              <TestimonialCard {...t} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
