import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={`${styles.headline} reveal`}>
            I'm Elliott. I vibe code and<br />
            <em className={styles.accentWord}>help other people do it too.</em>
          </h1>

          <p className={`${styles.subhead} reveal reveal-delay-1`}>
            I'm working on making vibe coding accessible. Using AI to build
            things requires a mind shift, not computer science expertise. I'm
            creating a series where I sit down with non-technical people and we
            start building together.
          </p>

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
