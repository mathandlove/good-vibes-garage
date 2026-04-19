import { Link } from 'react-router-dom'
import styles from './Portfolio.module.css'

type PortfolioItem = {
  title: string
  description: string
  client: string
  sector: string
  outcome: string
  href: string
  internal?: boolean
  featured?: boolean
  ogImage?: string
}

const allExamples: PortfolioItem[] = [
  {
    title: 'Scaffolding Storytelling with the LEGO Group',
    description:
      'A year of design research with struggling readers in Denver Public Schools. 11+ prototype cycles. The key pivot: children don\'t want books to help them build — they want help with storytelling.',
    client: 'The LEGO Group',
    sector: 'Toys, Play, Education, Publishing',
    outcome: 'Launched LEGO Play Stories — a new product line built on what we found',
    href: '/writing/lego-reading',
    internal: true,
    featured: true,
    ogImage: '/og-lego-reading.jpg',
  },
  {
    title: 'Building a Multi-Agent AI Tutor',
    description:
      'We set out to stop students from using AI to write their essays. Then we tested the prototype and found out that wasn\'t the problem at all. Built a multi-agent AI tutor that intervenes at the thinking layer, not the output layer — and coded it ourselves.',
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
      'Classcraft had teachers signing up and never logging in. We kept prototyping new onboarding flows until we realized we were solving the wrong problem. It wasn\'t a feature problem. It was a Thursday afternoon problem.',
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
      'Spencer had a great video library for teaching toddlers to read — and parents who opened it once and disappeared. Built and shipped a prototype in a single day. What we found in the homes changed the whole product direction.',
    client: 'Toddlers Can Read',
    sector: 'App Design, Education, Parents',
    outcome: 'Ready-to-ship prototype; identified Dreamers vs. Planners framework',
    href: '/writing/empowering-parents',
    internal: true,
    ogImage: '/src/assets/Images/empowering-parents/header.webp',
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
          <h2 className={styles.title}>Portfolio</h2>
          <p className={styles.intro}>
            I've spent 15 years building learning products with organizations like The LEGO Group, Classcraft,
            and i‑Ready. I prototype, test with real people, and follow the evidence. The goal is always
            the same: how can I bring out people's love for learning.
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
              `reveal reveal-delay-${Math.min(i + 1, 5)}`,
            ].filter(Boolean).join(' ')
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
