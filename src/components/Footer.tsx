import { useState } from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: wire up mailing list platform
    setSubmitted(true)
  }

  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={`${styles.contactBlock} reveal`}>
          <h2 className={styles.heading}>Let's build something.</h2>
          <div className={styles.ctaRow}>
            <div className={styles.ctaItem}>
              <p className={styles.ctaLabel}>Speaking, workshops & advising</p>
              <a href="mailto:elliott@goodvibesgarage.ai" className={styles.emailLink}>
                elliott@goodvibesgarage.ai
              </a>
            </div>
            <div className={styles.ctaDivider} />
            <div className={styles.ctaItem}>
              <p className={styles.ctaLabel}>New episodes as they drop.</p>
              {submitted ? (
                <p className={styles.signupConfirm}>You're in.</p>
              ) : (
                <form onSubmit={handleSubmit} className={styles.signupForm}>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={styles.signupInput}
                  />
                  <button type="submit" className={styles.signupButton}>
                    Sign up
                  </button>
                </form>
              )}
            </div>
          </div>
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
