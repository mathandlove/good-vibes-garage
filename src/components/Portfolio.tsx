import { Link } from 'react-router-dom'
import styles from './Portfolio.module.css'

type PortfolioItem = {
  title: string
  description: string
  client: string
  sector: string
  outcome: string
  href?: string
  internal?: boolean
  featured?: boolean
  ogImage?: string
}

const allExamples: PortfolioItem[] = [
  {
    title: 'Scaffolding Storytelling with the LEGO Group',
    description:
      'Started from weak research suggesting kids wanted to read while building.\nPrototypes kept failing.\nAfter ~40 book experiments, it became clear they didn\'t want help during — they wanted help storytelling after.',
    client: 'The LEGO Group',
    sector: 'Toys, Play, Education, Publishing',
    outcome: 'Launched LEGO Play Stories — a new product line built on what we found',
    href: '/writing/lego-reading',
    internal: true,
    featured: true,
    ogImage: '/og-lego-reading.jpg',
  },
  {
    title: 'Level Up',
    description:
      'Tried to build an AI tool that helped students think critically while writing.\nRan into a wall: the motivation to think hard had to come from teachers, not the AI.',
    client: 'mPath',
    sector: 'Education, AI, Writing',
    outcome: 'Standing-room-only SXSWEDU talk; second iteration in testing',
    href: '/writing/level-up',
    internal: true,
    ogImage: '/src/assets/Images/level-up/logo.webp',
  },
  {
    title: 'Onboarding Teacher Experience with Classcraft',
    description:
      'Classcraft believed student privacy concerns were blocking teacher adoption.\nPrototyping showed the real issue was simplicity — teachers needed confidence, not more controls.\nThat insight became a playbook now used across HMH.',
    client: 'Classcraft',
    sector: 'Edtech, Teacher Onboarding',
    outcome: 'Launched redesigned onboarding at Classcraft.com',
    href: '/writing/teacher-adoption',
    internal: true,
    ogImage: '/og-teacher-adoption.jpg',
  },
  {
    title: 'Empowering Parents as Teachers',
    description:
      'Worked with Spencer Russell to understand what was preventing parents from teaching their kids to read.\nPrototypes pointed to a gap: parents didn\'t need more information, they needed the right 5-minute intervention at their fingertips.',
    client: 'Toddlers Can Read',
    sector: 'App Design, Education, Parents',
    outcome: 'Ready-to-ship prototype; identified Dreamers vs. Planners framework',
    href: '/writing/empowering-parents',
    internal: true,
    ogImage: '/og-empowering-parents.jpg',
  },
  {
    title: 'How a Tennis Ball Increased Lowe\'s Vacuum Sales by 9%',
    description:
      'Lowe\'s had 14 vacuums and customers who couldn\'t choose. A fake store, stress sensors, and one unexpected insight about suction led to 150+ design changes and a 9% sales increase.',
    client: 'Lowe\'s',
    sector: 'Retail UX, Consumer Research',
    outcome: '9% sales increase, 150+ design changes validated via RCT',
    href: '/writing/lowes-vacuum',
    internal: true,
    ogImage: '/og-lowes-vacuum.jpg',
  },
  {
    title: 'Five Years Building Wonder.io With the Kids Who Needed It Most',
    description:
      'Over five years, 70+ versions, and hundreds of hours with Boys & Girls Club students. What eye tracking and emotion sensors taught us about reluctant readers.',
    client: 'Boys & Girls Club / Wonder Stories',
    sector: 'Education, Reading, EdTech',
    outcome: 'Students improved 3 grade levels; app adopted internationally',
    href: '/writing/designing-wonder-io',
    internal: true,
    ogImage: '/og-designing-wonder-io.jpg',
  },
]

function EntryInner({ item }: { item: PortfolioItem }) {
  return (
    <>
      {item.ogImage && (
        <div className={styles.entryThumb}>
          <img src={item.ogImage} alt="" aria-hidden="true" className={styles.entryThumbImg} />
        </div>
      )}
      <div className={styles.entryMain}>
        {item.featured && (
          <span className={styles.entryEyebrow}>Selected Work</span>
        )}
        <div className={styles.entryClientRow}>
          <span className={styles.entryClient}>{item.client}</span>
          <span className={styles.dot}>·</span>
          <span className={styles.entrySector}>{item.sector}</span>
        </div>
        <h4 className={styles.entryTitle}>{item.title}</h4>
        <p className={styles.entryDesc}>{item.description}</p>
        <span className={styles.entryOutcome}>{item.outcome}</span>
      </div>
      <span className={styles.entryArrow}>→</span>
    </>
  )
}

export default function Portfolio() {
  return (
    <section className={`${styles.section} section`} id="portfolio">
      <div className="container">

        {/* Hero */}
        <div className={`${styles.hero} reveal`}>
          <span className={styles.heroTag}>Ongoing work</span>
          <h2 className={styles.title}>I spend a lot of time building things with AI.</h2>
          <p className={styles.intro}>
            This is a selection of projects where something actually got made.
            A lot of these started from ideas that weren't very clear at the beginning.
          </p>
        </div>

        {/* How I work */}
        <div className={`${styles.howIWork} reveal`}>
          <p className={styles.howIWorkLabel}>How I work</p>
          <p className={styles.howIWorkText}>
            Most of the time, things start pretty vague.
            I try to build something quickly so there's something concrete to react to.
            Then it's about figuring out what actually holds up.
          </p>
          <a
            href="/Portfolio - Design Lead.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cvLink}
          >
            View full CV (PDF) →
          </a>
        </div>

        <div className={styles.archive}>
          {allExamples.map((item, i) => {
            const className = [
              styles.entry,
              item.featured ? styles.entryFeatured : '',
              !item.href ? styles.entryNoLink : '',
              `reveal reveal-delay-${Math.min(i + 1, 5)}`,
            ].filter(Boolean).join(' ')
            if (!item.href) {
              return (
                <div key={item.title} className={className}>
                  <EntryInner item={item} />
                </div>
              )
            }
            return item.internal ? (
              <Link key={item.title} to={item.href} className={className}>
                <EntryInner item={item} />
              </Link>
            ) : (
              <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                <EntryInner item={item} />
              </a>
            )
          })}
        </div>


      </div>
    </section>
  )
}
