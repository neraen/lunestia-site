import { AnimateIn } from '../ui/AnimateIn'
import styles from './Showcase.module.css'

export function ShowcaseCalendar() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.showcase} ${styles.reverse}`}>
          <AnimateIn className={styles.text}>
            <div className={styles.eyebrow}>Calendrier</div>
            <h2>
              Voyez les jours <em>qui comptent</em>, à l'avance.
            </h2>
            <p>
              Carrés, trigones, conjonctions — les transits qui rencontrent
              votre thème natal sont projetés mois par mois. Anticipez les pics,
              planifiez l'important, comprenez l'ambiance.
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
                Vue mensuelle avec densité d'aspects
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
                Filtres&nbsp;: transits, calendrier, miroir
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
                Notifications avant les jours-clés
              </li>
            </ul>
          </AnimateIn>

          <AnimateIn delay={150} className={styles.phoneWrap}>
            <div className={styles.phone} aria-hidden="true">
              <div className={styles.phoneContent}>
                <div className={styles.phoneRow}>
                  <div className={styles.phoneLogo}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
                    </svg>
                    Lunestia
                  </div>
                  <div className={styles.phoneAvatar}>C</div>
                </div>

                <div className={styles.calTitle}>Calendrier astral</div>
                <div className={styles.calSub}>
                  Visualisez jour par jour les aspects entre les planètes et
                  votre thème.
                </div>
                <div className={styles.calTabs}>
                  <span className={styles.tabActive}>Calendrier</span>
                  <span className={styles.tabInactive}>Transits</span>
                  <span className={styles.tabInactive}>Miroir</span>
                </div>
                <div className={styles.calMonth}>Mai 2026</div>
                <div className={styles.calGrid}>
                  {/* Day headers */}
                  {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => (
                    <div key={i} className={styles.calDay}>
                      {d}
                    </div>
                  ))}
                  {/* Empty offset — May 2026 starts on Friday (4 empty) */}
                  <div /><div /><div /><div />
                  {/* Day 1 */}
                  <div className={styles.calNum}>
                    <div>1</div>
                    <div className={styles.dots}>
                      <span className={styles.dot} style={{ background: '#f59e0b' }} />
                      <span className={styles.dot} style={{ background: 'var(--gold)' }} />
                    </div>
                  </div>
                  {/* Day 2 */}
                  <div className={styles.calNum}>
                    <div>2</div>
                    <div className={styles.dots}>
                      <span className={styles.dot} style={{ background: '#f59e0b' }} />
                      <span className={styles.dot} style={{ background: 'var(--gold)' }} />
                    </div>
                  </div>
                  {/* Day 3 */}
                  <div className={styles.calNum}>
                    <div>3</div>
                    <div className={styles.dots}>
                      <span className={styles.dot} style={{ background: 'var(--gold)' }} />
                    </div>
                  </div>
                  {/* Day 4 */}
                  <div className={styles.calNum}>
                    <div>4</div>
                    <div className={styles.dots}>
                      <span className={styles.dot} style={{ background: 'var(--gold)' }} />
                      <span className={styles.dot} style={{ background: '#3b82f6' }} />
                    </div>
                  </div>
                  {/* Day 5 */}
                  <div className={styles.calNum}>
                    <div>5</div>
                    <div className={styles.dots}>
                      <span className={styles.dot} style={{ background: '#22c55e' }} />
                      <span className={styles.dot} style={{ background: 'var(--gold)' }} />
                    </div>
                  </div>
                  {/* Day 6 */}
                  <div className={styles.calNum}>
                    <div>6</div>
                    <div className={styles.dots}>
                      <span className={styles.dot} style={{ background: '#3b82f6' }} />
                      <span className={styles.dot} style={{ background: '#f59e0b' }} />
                    </div>
                  </div>
                  {/* Day 7 */}
                  <div className={styles.calNum}>
                    <div>7</div>
                    <div className={styles.dots}>
                      <span className={styles.dot} style={{ background: '#3b82f6' }} />
                    </div>
                  </div>
                  {/* Day 8 */}
                  <div className={styles.calNum}>
                    <div>8</div>
                    <div className={styles.dots}>
                      <span className={styles.dot} style={{ background: 'var(--gold)' }} />
                    </div>
                  </div>
                  {/* Day 9 — today/highlighted */}
                  <div className={styles.calNumActive}>
                    <div>9</div>
                    <div className={styles.dots}>
                      <span className={styles.dot} style={{ background: 'var(--gold)' }} />
                      <span className={styles.dot} style={{ background: '#f59e0b' }} />
                    </div>
                  </div>
                  {/* Day 10 */}
                  <div className={styles.calNum}>
                    <div>10</div>
                    <div className={styles.dots}>
                      <span className={styles.dot} style={{ background: 'var(--gold)' }} />
                    </div>
                  </div>
                  {/* Days 11–17 dimmed */}
                  {[11, 12, 13, 14, 15, 16, 17].map((d) => (
                    <div key={d} className={styles.calNumDim}>
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
