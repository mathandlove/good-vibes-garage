import elliottImg from '../assets/elliott-hedman.jpg'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={`${styles.section} section`} id="about">
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.photoCol} reveal`}>
            <div className={styles.photoWrap}>
              <img
                src={elliottImg}
                alt="Elliott Hedman"
                className={styles.photo}
              />
            </div>
          </div>

          <div className={styles.content}>
            <h2 className={`${styles.heading} reveal reveal-delay-1`}>
              Hey, I'm Elliott.
            </h2>
            <p className={`${styles.bio} reveal reveal-delay-2`}>
              I've spent my career trying to help people build things faster. I did
              research at the MIT Media Lab, designed at IDEO and Google, and ran a
              consultancy where we'd prototype ideas in a week instead of six months.
            </p>
            <p className={`${styles.bio} reveal reveal-delay-3`}>
              These days I spend most of my time teaching people to vibe code. Not
              engineers &mdash; teachers, nonprofit folks, anyone with an idea they can
              describe but can't build. The tools finally caught up to the dream. Now
              the only thing missing is someone to sit with you for the first 30 minutes
              and show you it's not as hard as you think.
            </p>
            <p className={`${styles.bio} ${styles.kicker} reveal reveal-delay-4`}>
              That's what I do.
            </p>
            <a
              href="#contact"
              className={`${styles.link} reveal reveal-delay-5`}
            >
              Say hi &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
