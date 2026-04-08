import styles from './Work.module.css'

const projects = [
  {
    name: 'SXSW EDU Talk',
    description: 'What happens when you let students build with AI instead of just learn about it. A packed room of teachers rethinking everything.',
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
    description: 'A storytelling experiment where the AI is a character in the narrative, not just a tool behind it.',
    tag: 'Experiment',
    href: 'https://www.robodexo.com',
    internal: false,
  },
  {
    name: 'Level UP',
    description: 'A curriculum to help people go from "I have an idea" to actually making it. Used in classrooms and workshops.',
    tag: 'Teaching',
    href: '#about',
    internal: true,
  },
  {
    name: 'Play Extremes',
    description: 'A design research tool from my time at MIT. Helps teams figure out why an experience isn\'t working.',
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
          <h2 className={styles.heading}>Things I've Built</h2>
          <p className={styles.subheading}>
            I make things with AI. Some are products, some are experiments, some are just me figuring
            out what's possible.
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
                <span className={styles.arrow}>&nearr;</span>
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
