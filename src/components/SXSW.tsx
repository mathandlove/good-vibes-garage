import sxswPhoto from '../assets/Images/sxsw2026.png'
import styles from './SXSW.module.css'

export default function SXSW() {
  return (
    // To switch variations, add styles.varEditorial or styles.varStudio to className below
    <section className={`${styles.sxsw} section`} id="talk">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={`${styles.badge} reveal`}>
              <span className={styles.badgeText}>SXSW EDU 2026</span>
            </div>

            <h2 className={`${styles.heading} reveal reveal-delay-1`}>
              I secretly taught students to use AI — and they all became better learners.
            </h2>

            <p className={`${styles.body} reveal reveal-delay-2`}>
              For a year I volunteered in classrooms — not teaching AI to write
              essays, but to help students figure things out. This is what I
              learned.
            </p>

            <div className={`${styles.ctaWrap} reveal reveal-delay-3`}>
              <a href="#" className={styles.ctaLink}>
                Read the article &rarr;
              </a>
            </div>
          </div>

          <div className={`${styles.right} reveal reveal-delay-2`}>
            <div className={styles.photoWrap}>
              <img
                src={sxswPhoto}
                alt="Elliott Hedman speaking at SXSW EDU 2026"
                className={styles.photo}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
