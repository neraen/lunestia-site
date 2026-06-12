import { AnimateIn } from '../ui/AnimateIn'
import styles from './Showcase.module.css'

export function ShowcaseConversation() {
  return (
    <section className={styles.section} id="showcase">
      <div className="container">
        <div className={styles.showcase}>
          <AnimateIn className={styles.text}>
            <div className={styles.eyebrow}>Conversation</div>
            <h2>
              Une astrologue qui
              <br />
              <em>vous connaît</em> déjà.
            </h2>
            <p>
              Lyra a votre thème natal en mémoire. Elle ne vous demande pas
              votre signe — elle a déjà vu votre Mars en Capricorne et votre
              Lune en Gémeaux. Posez vos vraies questions, recevez de vraies
              réponses.
            </p>
            <ul className={styles.checkList}>
              <li className={styles.checkItem}>
                <span className={styles.check}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Réponses ancrées dans votre thème, pas génériques
              </li>
              <li className={styles.checkItem}>
                <span className={styles.check}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Mémoire des conversations précédentes
              </li>
              <li className={styles.checkItem}>
                <span className={styles.check}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Tonalité chaleureuse, ni mystique de pacotille ni cynique
              </li>
            </ul>
          </AnimateIn>

          <AnimateIn delay={150} className={styles.phoneWrap}>
            <div className={styles.phone} aria-hidden="true">
              <div className={styles.phoneContent}>
                <div className={styles.chatHeader}>
                  <div className={styles.chatAvatar}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
                    </svg>
                  </div>
                  <div>
                    <div className={styles.chatName}>Lyra</div>
                    <div className={styles.chatStatus}>
                      Astrologue IA · En ligne
                    </div>
                  </div>
                </div>
                <div className={styles.msgAi}>
                  Bonjour, je suis Lyra ✦ Je suis là pour te guider à travers
                  les étoiles. Qu'as-tu en tête aujourd'hui&nbsp;?
                </div>
                <div className={styles.msgUser}>
                  Est-ce que je vais trouver l'amour cette année &nbsp;?
                </div>
                <div className={styles.msgAi} style={{ fontSize: '10.5px' }}>
                  Les transits actuels de Vénus et Jupiter ouvrent un cycle favorable aux rencontres — mais l'astrologie ne prédit pas qui, elle éclaire quand tu es le plus réceptif. Si ton thème natal montre une Vénus en maison 7, ces prochains mois pourraient être un vrai tournant. L'important : rester ouvert aux connexions inattendues.
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
