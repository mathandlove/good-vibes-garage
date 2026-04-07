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
              we build it together — live, from scratch, using AI. Along the way
              I show how to vibe code and the power of building fast and iterating.
            </p>

            <div className={`${styles.apply} reveal reveal-delay-3`}>
              <p className={styles.applyLabel}>I do one Good Vibes workshop a week.</p>
              <a href="mailto:elliott@goodvibesgarage.ai?subject=Good Vibes Workshop" className={styles.applyBtn}>
                Sign up if you're interested →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
