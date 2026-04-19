import interviewImg from '../assets/Images/interview.png'
import styles from './Series.module.css'

export default function Series() {
  return (
    <section className={`${styles.series} section`} id="series">
      <div className={`${styles.imageWrap} reveal`}>
        <img src={interviewImg} alt="Elliott in a build session" className={styles.image} />
        <div className={`${styles.overlay} reveal reveal-delay-1`}>
          <h2 className={styles.heading}>The Show</h2>
          <p className={styles.body}>
            Every week, I sit down with someone doing social good &mdash; a
            teacher, a nonprofit director, someone with an idea they can't
            build yet &mdash; and we build it together using AI. No coding
            background needed. Just a real idea and 60 minutes.
          </p>
          <p className={styles.body}>
            With your permission, the session becomes part of an upcoming series.
          </p>
          <a href="mailto:hedman@buildempathy.com?subject=I have an idea" className={styles.guestLink}>
            Tell me about your idea &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
