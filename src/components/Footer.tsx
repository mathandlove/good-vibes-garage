import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.top}>
          <div className={`${styles.contactBlock} reveal`}>
            <h2 className={styles.heading}>Say hi.</h2>
            <a href="mailto:elliott@goodvibesgarage.ai" className={styles.emailLink}>
              elliott@goodvibesgarage.ai
            </a>
          </div>

          {/* Add social links back when URLs are ready */}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © Elliott Hedman / Good Vibes Garage
          </p>
          <div className={styles.bottomRight}>
            <p className={styles.copyRight}>Built with vibe coding. Obviously.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
