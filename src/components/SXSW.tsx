import sxswPhoto from '../assets/Images/sxsw2026.png'
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
              they want to make — and then make it.
            </p>
            <blockquote className={`${styles.pullQuote} reveal reveal-delay-3`}>
              "When our skills don't meet what we want to produce, we lose the ability to
              create. AI flips that switch."
            </blockquote>
          </div>

          <div className={`${styles.right} reveal reveal-delay-2`}>
            <div className={styles.photoWrap}>
              <img
                src={sxswPhoto}
                alt="Elliott Hedman speaking at SXSW EDU 2025"
                className={styles.photo}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
