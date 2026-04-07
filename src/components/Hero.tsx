import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={`${styles.headline} reveal`}>
            I teach people<br />
            <em className={styles.accentWord}>how to vibe code.</em>
          </h1>

          <p className={`${styles.subhead} reveal reveal-delay-1`}>
            I'm Elliott. I spend my days designing for AI and my free time
            helping people use AI to do social good.
          </p>

          <div className={`${styles.ctas} reveal reveal-delay-2`}>
            <a href="#talk" className={styles.btnPrimary}>
              Watch the talk
              <span className={styles.btnArrow}>→</span>
            </a>
            <a href="#series" className={styles.btnSecondary}>
              See the build series
              <span className={styles.btnArrow}>→</span>
            </a>
          </div>
        </div>

        <div className={`${styles.visual} reveal reveal-delay-2`}>
          <div className={styles.bigType}>
            <span>Good</span>
            <span className={styles.vibes}>Vibes</span>
            <span>Garage</span>
          </div>
        </div>
      </div>
    </section>
  )
}
