import styles from './Series.module.css'

export default function Series() {
  return (
    <section className={`${styles.series} section`} id="series">
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.left} reveal`}>
            <div className={styles.placeholder}>
              <span className={styles.placeholderIcon}>▶</span>
              <span className={styles.placeholderText}>First episode in the works</span>
            </div>
          </div>

          <div className={styles.right}>
            <div className={`${styles.badge} reveal`}>
              <span className={styles.badgeText}>Video Series</span>
            </div>

            <h2 className={`${styles.heading} reveal reveal-delay-1`}>
              I'm starting<br />
              <em>something.</em>
            </h2>
            <p className={`${styles.body} reveal reveal-delay-2`}>
              I want to sit down with people doing meaningful work — non-profits,
              community organizations, anyone with an idea and no way to build
              it — and we build it together, live, using AI. I'm looking for my
              first guests.
            </p>

            <div className={`${styles.apply} reveal reveal-delay-3`}>
              <a href="mailto:elliott@goodvibesgarage.ai?subject=Good Vibes Updates" className={styles.applyBtn}>
                Join the mailing list →
              </a>
              <a href="mailto:elliott@goodvibesgarage.ai?subject=Be on the show" className={styles.applyLink}>
                Want to be on the show? Sign up here.
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
