import styles from './Teaching.module.css'

const offerings = [
  { label: 'Workshops', desc: 'Hands-on sessions that get teams building with AI tools from day one.' },
  { label: 'Speaking', desc: 'Keynotes and conference talks that reframe what vibe coding means for your organization.' },
  { label: 'Advising', desc: 'Strategic guidance for teams navigating the shift to AI-assisted creation.' },
  { label: 'Curriculum', desc: 'Structured programs designed to build lasting capability, not just awareness.' },
]

export default function Teaching() {
  return (
    <section className={`${styles.section} section`} id="teaching">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <p className={`${styles.eyebrow} reveal`}>Teaching & Training</p>
            <h2 className={`${styles.heading} reveal reveal-delay-1`}>
              Elliott teaches this stuff.
            </h2>
            <p className={`${styles.body} reveal reveal-delay-2`}>
              Vibe coding isn't just for developers. It's for anyone who has something worth building. Elliott works with organizations — from education to enterprise — on how to think, prototype, and ship in the age of AI-assisted creation.
            </p>
            <p className={`${styles.body} reveal reveal-delay-3`}>
              Whether it's a one-day workshop or a full curriculum, the goal is the same: leave with skills you can use tomorrow.
            </p>
            <a
              href="mailto:elliott@goodvibesgarage.ai"
              className={`${styles.cta} reveal reveal-delay-4`}
            >
              Reach out →
            </a>
          </div>

          <div className={styles.right}>
            {offerings.map((o, i) => (
              <div
                key={o.label}
                className={`${styles.offering} reveal reveal-delay-${i + 1}`}
              >
                <h3 className={styles.offeringTitle}>{o.label}</h3>
                <p className={styles.offeringDesc}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
