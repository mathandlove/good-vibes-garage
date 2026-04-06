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
                alt="Dr. Elliott Hedman"
                className={styles.photo}
              />
            </div>
            <div className={styles.credentials}>
              <span className={styles.cred}>MIT Media Lab</span>
              <span className={styles.credDivider}>·</span>
              <span className={styles.cred}>IDEO</span>
              <span className={styles.credDivider}>·</span>
              <span className={styles.cred}>Google</span>
            </div>
          </div>

          <div className={styles.content}>
            <p className={`${styles.eyebrow} reveal`}>About</p>
            <h2 className={`${styles.heading} reveal reveal-delay-1`}>
              Dr. Elliott Hedman
            </h2>
            <p className={`${styles.bio} reveal reveal-delay-2`}>
              I've spent my career figuring out how more people get to build things — first at the MIT Media Lab, then at IDEO and Google, then running my own consultancy. AI just made that question a lot more interesting.
            </p>
            <p className={`${styles.bio} reveal reveal-delay-3`}>
              For the last few years, I've been deep in vibe coding — not as a novelty, but as a serious shift in what's possible for designers, educators, researchers, and anyone else who has something worth making. I teach it, I research it, and I build with it every day.
            </p>
            <a
              href="#contact"
              className={`${styles.link} reveal reveal-delay-4`}
            >
              Work with Elliott →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
