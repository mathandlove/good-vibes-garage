import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={`${styles.contactBlock} reveal`}>
          <h2 className={styles.heading}>I'm just getting started.</h2>
          <p className={styles.sub}>
            If any of this sounds interesting, sign up and I'll let you know
            when there's something to see.
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
          </div>
        </div>
      </div>
    </footer>
  )
}
