import styles from './Work.module.css'

const projects = [
  {
    name: 'SXSW EDU',
    description: 'A talk about what happens when you let students build with AI instead of just learn about it. Packed room, lots of teachers rethinking things.',
    tag: 'Talk',
    href: '#talk',
    internal: true,
  },
  {
    name: 'Wonder Stories',
    description: 'A reading app where the story changes based on what the reader is curious about. Built with AI, designed for kids.',
    tag: 'Product',
    href: 'https://www.wonderstories.app',
    internal: false,
  },
  {
    name: 'Robodexo',
    description: 'A storytelling experiment where the AI is a character in the narrative, not just a tool behind it. Weird and fun.',
    tag: 'Experiment',
    href: 'https://www.robodexo.com',
    internal: false,
  },
  {
    name: 'Level UP',
    description: 'A curriculum I built to help people go from "I have an idea" to actually making it. Used in classrooms and workshops.',
    tag: 'Teaching',
    href: '#about',
    internal: true,
  },
  {
    name: 'Play Extremes',
    description: 'A design research tool from my time at MIT. Helps teams figure out why an experience isn\'t working by looking at its edges.',
    tag: 'Research',
    href: 'https://www.playextremes.com',
    internal: false,
  },
]

export default function Work() {
  return (
    <section className={`${styles.section} section`} id="work">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <h2 className={styles.heading}>Recent Work</h2>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
