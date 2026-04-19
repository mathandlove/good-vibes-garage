import { useState } from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/email/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
      } else {
        setError(data.error || 'Something went wrong. Try again.')
      }
    } catch {
      setError('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={`${styles.contactBlock} reveal`}>
          <h2 className={styles.heading}>Let's build something.</h2>
          <div className={styles.ctaRow}>
            <div className={styles.ctaItem}>
              <p className={styles.ctaLabel}>Speaking, workshops & advising</p>
              <a href="mailto:hedman@buildempathy.com" className={styles.emailLink}>
                hedman@buildempathy.com
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
                    disabled={loading}
                  />
                  <button type="submit" className={styles.signupButton} disabled={loading}>
                    {loading ? '...' : 'Sign up'}
                  </button>
                  {error && <p className={styles.signupError}>{error}</p>}
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
