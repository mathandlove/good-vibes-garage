import styles from './SXSW.module.css'

export default function SXSW() {
  return (
    <section className={`${styles.sxsw} section`} id="talk">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={`${styles.badge} reveal`}>
              <span className={styles.badgeText}>SXSW EDU 2025</span>
            </div>

            <h2 className={`${styles.heading} reveal reveal-delay-1`}>
              What happens when students<br />
              <em>start building with AI?</em>
            </h2>
            <p className={`${styles.body} reveal reveal-delay-2`}>
              I gave this talk to a room full of teachers. The idea is simple: students don't
              need to understand machine learning. They need to learn how to describe what
              they want to make — and then make it. This is what that looks like.
            </p>
            <div className={`${styles.links} reveal reveal-delay-3`}>
              <span className={styles.comingSoon}>Video dropping this week</span>
            </div>
          </div>

          <div className={`${styles.right} reveal reveal-delay-2`}>
            <div className={styles.videoWrap}>
              {/* Swap src URL when the video is live */}
              <iframe
                src="https://www.youtube.com/embed/PLACEHOLDER"
                title="Elliott Hedman — SXSW EDU 2025"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.iframe}
              />
              <div className={styles.videoOverlay}>
                <span className={styles.playLabel}>Coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
