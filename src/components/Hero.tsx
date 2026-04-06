import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={`${styles.eyebrow} reveal`}>Dr. Elliott Hedman</p>

          <h1 className={`${styles.headline} reveal reveal-delay-1`}>
            AI is changing<br />
            <em className={styles.accentWord}>how we build.</em>
          </h1>

          <p className={`${styles.subhead} reveal reveal-delay-2`}>
            Good Vibe Garage is where I'm leaning into that shift: making things with AI,
            sharing what I'm learning, and exploring how creation is changing as the tools change.
          </p>

          <div className={`${styles.ctas} reveal reveal-delay-3`}>
            <a href="#sxsw" className={styles.btnPrimary}>
              Watch the SXSW Talk
              <span className={styles.btnArrow}>→</span>
            </a>
            <div className={styles.emailCapture}>
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
                  Notify me when the podcast drops
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className={`${styles.visual} reveal reveal-delay-2`}>
          <div className={styles.bigType}>
            <span>Good</span>
            <span className={styles.vibes}>Vibes</span>
            <span>Garage</span>
          </div>
          <div className={styles.tagBadge}>
            <span className={styles.tagDot} />
            Podcast dropping soon
          </div>
        </div>
      </div>
    </section>
  )
}
