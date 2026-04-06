import styles from './Work.module.css'

const projects = [
  {
    name: 'SXSW EDU',
    description: 'A conference talk that reframed vibe coding as a structural shift in access — not a developer shortcut. Standing room only.',
    tag: 'Talk',
    href: '#sxsw',
    internal: true,
    artifact: '"The tools aren\'t the bottleneck anymore."',
  },
  {
    name: 'Wonder Stories',
    description: 'An AI-powered reading app where the story adapts to the reader\'s curiosity. Built to test whether wonder is teachable.',
    tag: 'Product',
    href: 'https://www.wonderstories.app',
    internal: false,
    artifact: 'Live app · adaptive narrative · AI-generated story paths',
  },
  {
    name: 'Robodexo',
    description: 'An AI narrative experiment: what happens when the machine is also a character? A live test of playful human-AI co-authorship.',
    tag: 'Experiment',
    href: 'https://www.robodexo.com',
    internal: false,
    artifact: null,
  },
  {
    name: 'Level UP',
    description: 'A curriculum framework for turning curious people into confident builders. Tested across classrooms, workshops, and orgs.',
    tag: 'Teaching',
    href: '#teaching',
    internal: true,
    artifact: null,
  },
  {
    name: 'Play Extremes',
    description: 'A research practice and design tool for mapping the edges of engagement — used to diagnose what\'s broken in experiences.',
    tag: 'Research',
    href: 'https://www.playextremes.com',
    internal: false,
    artifact: null,
  },
]

export default function Work() {
  return (
    <section className={`${styles.section} section`} id="work">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <h2 className={styles.heading}>Featured Work</h2>
          <p className={styles.sub}>Talks, products, experiments, and research — a track record of building at the edges.</p>
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
                <span className={styles.arrow}>↗</span>
              </div>
              <h3 className={styles.cardTitle}>{p.name}</h3>
              <p className={styles.cardDesc}>{p.description}</p>
              {p.artifact && (
                <p className={styles.cardArtifact}>{p.artifact}</p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
