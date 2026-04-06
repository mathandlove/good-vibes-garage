import styles from './SXSW.module.css'

export default function SXSW() {
  return (
    <section className={`${styles.sxsw} section`} id="sxsw">
      <div className="container">
        <div className={`${styles.badge} reveal`}>
          <span className={styles.badgeText}>SXSW EDU 2025</span>
        </div>

        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={`${styles.heading} reveal reveal-delay-1`}>
              The talk that started<br />
              <em>the conversation.</em>
            </h2>
            <p className={`${styles.body} reveal reveal-delay-2`}>
              The argument: when the barrier to building drops to zero, the question shifts from "can you code?" to "do you have something worth making?" Dr. Elliott Hedman brought research from MIT, classrooms, and live experiments to SXSW EDU — and made the case that most of the people who should be building aren't, yet.
            </p>
            <p className={`${styles.pullQuote} reveal reveal-delay-3`}>
              "The tools aren't the bottleneck anymore. Belief is."
            </p>
            <div className={`${styles.links} reveal reveal-delay-4`}>
              <a
                href="https://www.youtube.com/watch?v=PLACEHOLDER"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkPrimary}
              >
                Watch on YouTube →
              </a>
              <a href="#" className={styles.linkSecondary}>
                Read the article →
              </a>
            </div>
          </div>

          <div className={`${styles.right} reveal reveal-delay-2`}>
            <div className={styles.videoWrap}>
              {/* Swap src URL when the video is live */}
              <iframe
                src="https://www.youtube.com/embed/PLACEHOLDER"
                title="Dr. Elliott Hedman — SXSW EDU 2025"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.iframe}
              />
              <div className={styles.videoOverlay}>
                <span className={styles.playLabel}>SXSW EDU Talk — coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
