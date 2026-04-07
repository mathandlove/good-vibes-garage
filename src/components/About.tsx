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
              Elliott Hedman
            </h2>
            <p className={`${styles.bio} reveal reveal-delay-2`}>
              I'm an AI designer at Robots & Pencils. Before that I did research at the MIT
              Media Lab, designed at IDEO and Google, and ran a consultancy helping teams
              prototype faster. These days I spend most of my free time vibe coding with
              anyone who has an idea and wants help making it real.
            </p>
            <a
              href="#contact"
              className={`${styles.link} reveal reveal-delay-3`}
            >
              Say hi →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
