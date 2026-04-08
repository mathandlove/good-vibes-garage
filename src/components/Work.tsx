import styles from './Work.module.css'

const projects = [
  {
    name: 'Wonder Stories',
    description: 'Ten years at the Boys & Girls Club watching kids hate reading. I wanted to fix that. 26,000 users later, I\'m still building — currently letting students talk to storybook characters.',
    tag: 'Product',
    href: 'https://www.wonderstories.app',
    featured: true,
  },
  {
    name: 'Robodexo',
    description: 'I had a week off, a 3-month-old, and my 40th birthday. I built a full Pokémon trainer experience — custom physical cards, QR quests, live tournaments.',
    tag: 'Experiment',
    href: 'https://www.robodexo.com',
    featured: false,
  },
  {
    name: 'Level UP',
    description: 'An app that helps kids reflect on their writing — built before Claude Code existed. Took me 3 months. I could build it in 3 days now.',
    tag: 'Teaching',
    href: 'https://www.buildempathy.com/levelup',
    featured: false,
  },
  {
    name: 'Toddlers Can Read',
    description: 'First time I built a testable prototype for a client in a single day. We shipped it to parents to find out what they actually wanted when it comes to teaching reading.',
    tag: 'Prototype',
    href: 'https://www.buildempathy.com/empoweringparents',
    featured: false,
  },
  {
    name: 'Play Extremes',
    description: 'Had a game idea in the morning. Built it that night. No reason other than: why not?',
    tag: 'Game',
    href: 'https://www.playextremes.com',
    featured: false,
  },
]

export default function Work() {
  return (
    <section className={`${styles.section} section`} id="work">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <h2 className={styles.heading}>Things I've Built</h2>
          <p className={styles.subheading}>
            Each one started as an idea I couldn't stop thinking about.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={[
                styles.card,
                p.featured ? styles.cardFeatured : '',
                `reveal reveal-delay-${Math.min(i + 1, 5)}`,
              ].join(' ')}
            >
              <div className={styles.cardInner}>
                <h3 className={styles.cardTitle}>{p.name}</h3>
                <p className={styles.cardDesc}>{p.description}</p>
              </div>
              <div className={styles.cardFoot}>
                <span className={styles.viewLabel}>View project</span>
                <span className={styles.arrow}>↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
