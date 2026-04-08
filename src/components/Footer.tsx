import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={`${styles.contactBlock} reveal`}>
          <h2 className={styles.heading}>Let's build something.</h2>
          <p className={styles.sub}>
            Got an idea? Want to be on the show? Just curious? Drop me a line.
          </p>
          <a href="mailto:elliott@goodvibesgarage.ai" className={styles.emailLink}>
            elliott@goodvibesgarage.ai
          </a>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; Elliott Hedman / Good Vibes Garage
          </p>
          <div className={styles.bottomLinks}>
            <a
              href="https://www.linkedin.com/in/elliotthedman/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bottomLink}
            >
              LinkedIn
            </a>
            <span className={styles.divider}>&middot;</span>
            <span className={styles.builtWith}>Built with vibe coding. Obviously.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
