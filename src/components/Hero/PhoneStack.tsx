import styles from './PhoneStack.module.css'

export function PhoneStack() {
  return (
    <div className={styles.stack} aria-hidden="true">
      {/* Back phone — chat interface */}
      <div className={`${styles.phone} ${styles.back}`}>
        <div className={styles.content}>
          <div className={styles.row}>
            <div className={styles.phoneLogo}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
              </svg>
              Lunestia
            </div>
            <div className={styles.avatar}>C</div>
          </div>
          <div className={styles.chatHeader}>
            <div className={styles.chatAvatar}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
              </svg>
            </div>
            <div>
              <div className={styles.chatName}>Lyra</div>
              <div className={styles.chatStatus}>Astrologue IA · En ligne</div>
            </div>
          </div>
          <div className={styles.msgAi}>Bonjour ✦ Que veux-tu explorer aujourd'hui&nbsp;?</div>
          <div className={styles.msgUser}>Comment se présente ma semaine&nbsp;?</div>
          <div className={styles.msgAi}>
            Vénus rentre dans ton secteur 7 mardi — attendez-vous à des
            conversations plus tendres autour des relations…
          </div>
        </div>
      </div>

      {/* Front phone — natal chart */}
      <div className={`${styles.phone} ${styles.front}`}>
        <div className={styles.content}>
          <div className={styles.row}>
            <div className={styles.phoneLogo}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
              </svg>
              Lunestia
            </div>
            <div className={styles.avatar}>C</div>
          </div>
          <div className={styles.phBadge}>
            <span className={styles.phDot} />
            Thème Natal
          </div>
          <div className={`serif ${styles.phTitle}`}>Votre Portrait Astral</div>
          <div className={styles.phSub}>
            Vos positions planétaires au moment exact de votre naissance.
          </div>
          <div className={styles.phGrid}>
            <div className={styles.phCard}>
              <div className={styles.phIcon} style={{ background: 'rgba(230,200,96,0.2)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="4" />
                  <path
                    d="M12 2v4M12 18v4M2 12h4M18 12h4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className={styles.phCardTitle}>Soleil</div>
              <div className={styles.phCardMeta}>4°27' Verseau</div>
            </div>
            <div className={styles.phCard}>
              <div className={styles.phIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </div>
              <div className={styles.phCardTitle}>Lune</div>
              <div className={styles.phCardMeta}>28°34' Gémeaux</div>
            </div>
            <div className={styles.phCard}>
              <div className={styles.phIcon}>
                <span style={{ fontFamily: 'serif' }}>☿</span>
              </div>
              <div className={styles.phCardTitle}>Mercure</div>
              <div className={styles.phCardMeta}>18°01' Verseau</div>
            </div>
            <div className={styles.phCard}>
              <div className={styles.phIcon}>
                <span style={{ fontFamily: 'serif' }}>♀</span>
              </div>
              <div className={styles.phCardTitle}>Vénus</div>
              <div className={styles.phCardMeta}>6°16' Verseau</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
