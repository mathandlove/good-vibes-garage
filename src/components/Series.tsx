import styles from './Series.module.css'

export default function Series() {
  return (
    <section className={`${styles.series} section`} id="series">
      <div className="container">
        <div className={styles.intro}>
          <h2 className={`${styles.heading} reveal`}>
            The Show
          </h2>
          <p className={`${styles.tagline} reveal reveal-delay-1`}>
            Real people. Real ideas. Built live.
          </p>
          <p className={`${styles.body} reveal reveal-delay-2`}>
            Each episode, I sit down with someone doing meaningful work &mdash;
            a nonprofit director, a teacher, a community organizer &mdash; someone
            with an idea and no way to build it. We build it together in one session,
            start to finish, using AI.
          </p>
        </div>

        <div className={styles.episodes}>
          <div className={`${styles.episodeCard} ${styles.featured} reveal reveal-delay-2`}>
            <div className={styles.episodeMeta}>
              <span className={styles.episodeNumber}>01</span>
              <div className={styles.recordingBadge}>
                <span className={styles.recordingDot} />
                <span className={styles.recordingLabel}>In Production</span>
              </div>
            </div>
            <h3 className={styles.episodeTitle}>A nonprofit director with a big idea and no budget</h3>
            <p className={styles.episodeDesc}>
              She needed a tool for her community. No developer, no funding. We
              built a working prototype in a single sitting.
            </p>
          </div>

          <div className={styles.upcomingRow}>
            <div className={`${styles.episodeCard} ${styles.upcoming} reveal reveal-delay-3`}>
              <span className={styles.episodeNumber}>02</span>
              <p className={styles.upcomingText}>A teacher rethinking how students show what they know</p>
            </div>
            <div className={`${styles.episodeCard} ${styles.upcoming} reveal reveal-delay-4`}>
              <span className={styles.episodeNumber}>03</span>
              <p className={styles.upcomingText}>Have an idea? This slot could be yours.</p>
            </div>
          </div>
        </div>

        <div className={`${styles.actions} reveal reveal-delay-4`}>
          <a href="mailto:elliott@goodvibesgarage.ai?subject=Good Vibes Updates" className={styles.notifyBtn}>
            Get Notified When It Drops <span>&rarr;</span>
          </a>
          <a href="mailto:elliott@goodvibesgarage.ai?subject=Be on the show" className={styles.guestLink}>
            Want to be a guest? Tell me about your idea.
          </a>
        </div>
      </div>
    </section>
  )
}
