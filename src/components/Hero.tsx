import elliottImg from '../assets/elliott-hedman.jpg'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={`${styles.headline} reveal`}>
            I spend my time thinking about how to build new ideas with&nbsp;AI.
          </h1>

          <p className={`${styles.subheadLarge} reveal reveal-delay-1`}>
            This is my garage.
          </p>

          <p className={`${styles.subhead} reveal reveal-delay-2`}>
            I sit down with people who have ideas and we build them
            together, live, using AI. No coding background needed&nbsp;&mdash;
            just something you want to make.
          </p>

          <div className={`${styles.ctas} reveal reveal-delay-3`}>
            <a href="#series" className={styles.btnPrimary}>
              See What's Coming <span className={styles.btnArrow}>&rarr;</span>
            </a>
          </div>
        </div>

        <div className={`${styles.imageCol} reveal reveal-delay-2`}>
          <img
            src={elliottImg}
            alt="Elliott Hedman"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  )
}
