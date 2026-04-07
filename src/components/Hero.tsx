import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={`${styles.headline} reveal`}>
            I vibe code and<br />
            <em className={styles.accentWord}>help other people do it too.</em>
          </h1>

          <p className={`${styles.subhead} reveal reveal-delay-1`}>
            Using AI to build things requires a mind shift, not computer science
            expertise. I'm making a series where I sit down with non-technical
            people and we build something real together.
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
