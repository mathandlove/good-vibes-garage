import styles from './WhatIsGVG.module.css'

export default function WhatIsGVG() {
  return (
    <section className={`${styles.section} section`} id="podcast">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={`${styles.heading} reveal`}>
              What is<br />
              <em>Good Vibes Garage?</em>
            </h2>
          </div>

          <div className={styles.right}>
            <p className={`${styles.body} reveal reveal-delay-1`}>
              Vibe coding changes the question from "can you write code?" to "can you build something worth building?" Good Vibes Garage exists to explore what happens when creative, curious people get access to the most powerful building tools in history — and to make sure more of them know how to use them.
            </p>
            <p className={`${styles.body} reveal reveal-delay-2`}>
              It's research, experiments, teaching, and an upcoming podcast — all in service of one idea: the more people who get to build, the better the things we build together.
            </p>
          </div>
        </div>

        <div className={`${styles.podcastCallout} reveal reveal-delay-2`}>
          <div className={styles.calloutInner}>
            <div className={styles.calloutLeft}>
              <div className={styles.podcastIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div>
                <p className={styles.calloutTitle}>Good Vibes Garage Podcast</p>
                <p className={styles.calloutSub}>Coming to YouTube — soon.</p>
              </div>
            </div>
            <form
              className={styles.miniForm}
              action="#"
              method="post"
              onSubmit={e => e.preventDefault()}
            >
              <input
                type="email"
                name="email"
                placeholder="Get notified first"
                required
                className={styles.miniInput}
              />
              <button type="submit" className={styles.miniBtn}>Notify me</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
