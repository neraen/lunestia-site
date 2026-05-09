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
                  Comment va se passer ma vie amoureuse ce mois-ci&nbsp;?
                </div>
                <div className={styles.msgAi} style={{ fontSize: '10.5px' }}>
                  Vénus traverse ton secteur 7 jusqu'au 22 — une vraie ouverture
                  côté lien à l'autre. Tu pourrais ressentir le besoin de poser
                  des mots plus tendres et plus clairs. Mars en carré demande de
                  ne pas confondre passion et impatience…
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
