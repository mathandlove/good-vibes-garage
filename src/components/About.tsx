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
              I've spent my career in two worlds &mdash; building new things
              (Google, IDEO, LEGO, MIT Media Lab) and understanding people. I
              used to run a consultancy helping companies prototype ideas fast.
              That was fun, but I kept noticing something bigger.
            </p>
            <p className={`${styles.bio} reveal reveal-delay-3`}>
              Most people have no idea what vibe coding is. They don't know that
              right now, today, they could describe an idea and watch it become
              real in 30 minutes. Not engineers &mdash; I'm talking about teachers,
              nonprofit directors, community organizers. People with visions and
              no way to build them.
            </p>
            <p className={`${styles.bio} ${styles.kicker} reveal reveal-delay-4`}>
              That gap isn't an engineering problem. It's a mindset problem.
              And I'm fascinated by it.
            </p>
            <p className={`${styles.bio} reveal reveal-delay-5`}>
              So that's what this is. I'm sitting down with people, one at a
              time, and showing them what's possible. I'm still early. But every
              time someone goes from "there's no way I can do this" to building
              the whole thing on their own &mdash; I know I'm in the right place.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
