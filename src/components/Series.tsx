import styles from './Series.module.css'

export default function Series() {
  return (
    <section className={`${styles.series} section`} id="series">
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.left} reveal`}>
            <div className={styles.placeholder}>
              <span className={styles.placeholderIcon}>▶</span>
              <span className={styles.placeholderText}>Episodes coming soon</span>
            </div>
          </div>

          <div className={styles.right}>
            <div className={`${styles.badge} reveal`}>
              <span className={styles.badgeText}>Video Series</span>
            </div>

            <h2 className={`${styles.heading} reveal reveal-delay-1`}>
              Building things with people<br />
              <em>doing social good.</em>
            </h2>
            <p className={`${styles.body} reveal reveal-delay-2`}>
              I sit down with non-profits, hear what they're trying to do, and
              we build it together — live, from scratch, using AI. No pitch decks.
              No six-month timelines. Just an idea and 30 minutes.
            </p>

            <div className={`${styles.emailCapture} reveal reveal-delay-3`}>
              <p className={styles.emailLabel}>Get notified when the first episode drops</p>
              <form
                className={styles.emailForm}
                action="#"
                method="post"
                onSubmit={e => e.preventDefault()}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className={styles.emailInput}
                />
                <button type="submit" className={styles.emailBtn}>
                  Notify me
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
