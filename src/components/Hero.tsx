import heroImg from '../assets/Images/collaboration.png'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <img
        src={heroImg}
        alt="Elliott Hedman collaborating with others around a laptop"
        className={styles.bgImage}
      />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={`${styles.headline} reveal`}>
          I'm a vibe coding teacher.
        </h1>

        <p className={`${styles.bodyCopy} reveal reveal-delay-1`}>
          I help non-coders build real things for social good.
        </p>

      </div>
    </section>
  )
}
