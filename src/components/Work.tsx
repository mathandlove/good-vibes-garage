import styles from './Work.module.css'

const projects = [
  {
    name: 'Wonder Stories',
    description: 'Working at the Boys & Girls Club, I noticed the kids loved Kahoot! and absolutely despised reading. I wanted to create a reading experience that could compete in their Marvel and Fortnite world. 26,000 active users now — and parents of kids with dyslexia keep telling me their children won\'t read anything else.',
    tag: 'Product',
    href: 'https://www.wonderstories.app',
    internal: false,
  },
  {
    name: 'Robodexo',
    description: 'I had a week off work, a 3-month-old, and my 40th birthday coming up. I always throw elaborate murder mysteries. This time I wanted everyone to be a Pokemon trainer — playing cards with QR codes, quests, tournaments, discovery. Built the whole thing in a week. 70 people came.',
    tag: 'Experiment',
    href: 'https://www.robodexo.com',
    internal: false,
  },
  {
    name: 'Level UP',
    description: 'My first attempt to help students use AI to improve their actual writing ability. This was before Claude Code, and it was hard. But it taught me a lot about what this kind of teaching needs.',
    tag: 'Teaching',
    href: 'https://www.buildempathy.com/levelup',
    internal: false,
  },
  {
    name: 'Toddlers Can Read',
    description: 'Partnered with Spencer Russell to build a mock app and test it in a week. We wanted to find out what busy parents actually need to teach their kids to read. The answer: clear structure and extreme fun.',
    tag: 'Teaching',
    href: 'https://www.buildempathy.com/empoweringparents',
    internal: false,
  },
  {
    name: 'Play Extremes',
    description: 'I had a game idea. Built it in a day using only vibe coding. No reason other than: why not?',
    tag: 'Game',
    href: 'https://www.playextremes.com',
    internal: false,
  },
]

export default function Work() {
  return (
    <section className={`${styles.section} section`} id="work">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <h2 className={styles.heading}>Things I've Built</h2>
          <p className={styles.subheading}>
            Here's what I've been building along the way. Each one started as an
            idea I couldn't stop thinking about.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              target={p.internal ? undefined : '_blank'}
              rel={p.internal ? undefined : 'noopener noreferrer'}
              className={`${styles.card} reveal reveal-delay-${Math.min(i + 1, 5)}`}
            >
              <div className={styles.cardTop}>
                <span className={styles.tag}>{p.tag}</span>
                <span className={styles.arrow}>&#x2197;</span>
              </div>
              <h3 className={styles.cardTitle}>{p.name}</h3>
              <p className={styles.cardDesc}>{p.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
