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
              In fifth grade, there was a kid named David who could draw
              anything. I couldn't draw like David, so I stopped trying.
              That's how it often works. When our skills don't match what we
              want to make, we stop seeing ourselves as builders.
            </p>
            <p className={`${styles.bio} reveal reveal-delay-3`}>
              That feeling stayed with me for a long time. It started to shift
              at MIT, and then shifted again the first time I used AI to build a
              working prototype in less than a day &mdash; something that would
              have taken me weeks before. Suddenly, the gap between what I
              imagined and what I could actually make felt smaller. That
              feeling, of being able to bring an idea to life, is what I want
              more people to experience.
            </p>
            <p className={`${styles.bio} reveal reveal-delay-4`}>
              My friend Kristen was a lawyer who wanted a more meaningful
              career. For years, she had an idea for a tic-tac-toe game and
              assumed it was out of reach. We sat down together, and she built
              it. Now she runs her own company, and people hire her to build
              things for them.
            </p>
            <p className={`${styles.bio} reveal reveal-delay-4`}>
              I've spent my career at Google, IDEO, LEGO, MIT Media Lab &mdash;
              building things and helping people prototype ideas fast. But this
              is the thing I've always cared most about: helping people become
              iterative builders. People with visions and no reason to believe
              the tools are available to them. That gap isn't an engineering
              problem. It's a mindset problem.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
