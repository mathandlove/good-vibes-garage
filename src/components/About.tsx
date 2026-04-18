import { Link } from 'react-router-dom'
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
              anything. I couldn't, so I stopped trying. That is how it often
              works: when our skills do not match what we want to make, we stop
              seeing ourselves as builders.
            </p>
            <p className={`${styles.bio} reveal reveal-delay-3`}>
              That belief stayed with me for years. Then AI helped me build a
              working prototype in less than a day, and the gap between what I
              imagined and what I could make suddenly felt much smaller.
            </p>
            <p className={`${styles.bio} reveal reveal-delay-4`}>
              I've spent my career at Google, IDEO, LEGO, and the MIT Media
              Lab, but the throughline has stayed the same: helping people with
              ideas become builders. I do not think that gap is just a
              technical problem. I think it is a mindset problem.
            </p>
            <p className={`${styles.bio} reveal reveal-delay-5`}>
              Looking to work together? <Link to="/portfolio">Here's my portfolio →</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
