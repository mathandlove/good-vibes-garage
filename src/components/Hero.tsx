import heroImg from '../assets/hero.png'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={`${styles.headline} reveal`}>
            You have an idea.<br />
            Let's build it.
          </h1>

          <p className={`${styles.subhead} reveal reveal-delay-1`}>
            I sit down with people who aren't programmers and we build their
            thing together, live, using AI. It takes about 30 minutes.
          </p>

          <div className={`${styles.ctas} reveal reveal-delay-2`}>
            <a href="#series" className={styles.btnPrimary}>
              Watch the Series <span className={styles.btnArrow}>&rarr;</span>
            </a>
          </div>
        </div>

        <div className={`${styles.imageCol} reveal reveal-delay-2`}>
          <img
            src={heroImg}
            alt="Building something live with AI"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  )
}
