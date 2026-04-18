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
}

const prototypingExamples: PortfolioItem[] = [
  {
    title: 'Building a Multi-Agent AI Tutor',
    description:
      'Built Level Up, a free Google Docs add-on that gives students personalized writing feedback without writing for them. The hard problem was keeping AI in the right role.',
    client: 'mPath',
    sector: 'Education, AI, Writing',
    outcome: 'Free tool used across classrooms worldwide',
    href: '/writing/level-up',
    internal: true,
    featured: true,
  },
  {
    title: 'Scaffolding Storytelling with the LEGO Group',
    description:
      'A year of design research with struggling readers in Denver Public Schools. 11+ prototype cycles. The key pivot: children don\'t want books to help them build — they want help with storytelling.',
    client: 'The LEGO Group',
    sector: 'Toys, Play, Education, Publishing',
    outcome: 'Published LEGO Play Stories product line',
    href: '/writing/lego-reading',
    internal: true,
  },
  {
    title: 'Onboarding Teacher Experience with Classcraft',
    description:
      'Classcraft had teachers signing up and never logging in. Three rounds of prototyping revealed that onboarding wasn\'t a feature problem — it was a classroom adoption problem.',
    client: 'Classcraft',
    sector: 'Edtech, Teacher Onboarding',
    outcome: 'Launched redesigned onboarding at Classcraft.com',
    href: '/writing/teacher-adoption',
    internal: true,
  },
  {
    title: 'Empowering Parents as Teachers',
    description:
      'Spencer had a great video library for teaching toddlers to read — and parents who never used it. Co-designed a prototype in a single day, shipped it to homes, and found out what parents actually needed.',
    client: 'Toddlers Can Read',
    sector: 'App Design, Education, Parents',
    outcome: 'Ready-to-ship prototype; identified Dreamers vs. Planners framework',
    href: '/writing/empowering-parents',
    internal: true,
  },
]

const uxDesignExamples: PortfolioItem[] = [
  {
    title: 'How a Tennis Ball Increased Lowe\'s Vacuum Sales by 9%',
    description:
      'Lowe\'s had 14 vacuums and customers who couldn\'t choose. A fake store, stress sensors, and one unexpected insight about suction led to 150+ design changes and a 9% sales increase.',
    client: 'Lowe\'s',
    sector: 'Retail UX, Consumer Research',
    outcome: '9% sales increase, 150+ design changes validated via RCT',
    href: '/writing/lowes-vacuum',
    internal: true,
  },
  {
    title: 'Five Years Building Wonder.io With the Kids Who Needed It Most',
    description:
      'Over five years, 70+ versions, and hundreds of hours with Boys & Girls Club students. What eye tracking and emotion sensors taught us about reluctant readers.',
    client: 'Boys & Girls Club / Wonder Stories',
    sector: 'Education, Reading, EdTech',
    outcome: '3 grade-level reading improvement; international readership',
    href: '/writing/designing-wonder-io',
    internal: true,
  },
  {
    title: 'From "I Won\'t Read a Paragraph" to "Can We Play Again?"',
    description:
      'Reluctant 3rd and 4th graders at the Boys & Girls Club. After iterating on coin systems, bite-sized reveals, and Wonder Questions, they were asking to go again.',
    client: 'Boys & Girls Club',
    sector: 'Education, Reading, Motivation',
    outcome: 'Students actively read each line and asked to continue',
    href: '/writing/boys-girls-club-reading',
    internal: true,
  },
  {
    title: 'LEGO Technic: When Better Instructions Made Everything Worse',
    description:
      'Cleaner animations, more polished steps — and kids were more stressed than ever. What stress sensors revealed about how children actually experience building instructions.',
    client: 'The LEGO Group',
    sector: 'Toys, Digital UX, Emotion Research',
    outcome: '3 core redesign principles adopted by LEGO digital team',
    href: '/writing/lego-technic',
    internal: true,
  },
  {
    title: 'These Kids Aren\'t Lazy. They\'re Anxious.',
    description:
      'Middle schoolers were randomly clicking through diagnostic tests. Eye tracking and stress sensors revealed it wasn\'t apathy — and the messaging designed to help was making it worse.',
    client: 'Assessment Platform',
    sector: 'Education, Motivation Research',
    outcome: 'Student-led messaging prototypes reduced test anxiety',
    href: '/writing/middle-school-tests',
    internal: true,
  },
  {
    title: 'Adding Rewards to Digital Lessons',
    description:
      'Avatar systems and end-of-lesson prizes weren\'t working. Research revealed students cared more about immediate acknowledgment tied to their academic achievement.',
    client: 'Boys & Girls Club',
    sector: 'Education, Gamification, Motivation',
    outcome: 'Students requested additional lessons; try-it-again feature adopted',
    href: '/writing/adding-rewards',
    internal: true,
  },
  {
    title: 'Understanding the Digital Math Experience',
    description:
      '19 children, eye tracking glasses, and MOXO sensors. Found that classroom pedagogy doesn\'t translate to solo digital learning — and that animations disengage kids after 5 seconds.',
    client: 'Math EdTech Client',
    sector: 'Education, Digital Learning, UX Research',
    outcome: 'Redesigned feedback loops; "Feeling of Learning" framework developed',
    href: '/writing/digital-math',
    internal: true,
  },
  {
    title: 'Gamification + Learning with Education.com',
    description:
      'Travelled across the US testing software in homes. Developed 15 paper prototype games. Result: a rubric and design direction for games students actually want to return to.',
    client: 'Education.com',
    sector: 'EdTech, Gamification, Home Learning',
    outcome: 'Gamification rubric and design principles adopted',
    href: '/writing/education-com-gamification',
    internal: true,
  },
  {
    title: 'Building an Engaging Reading App — Wonder Stories',
    description:
      'Two years building Wonder Stories for reluctant readers. Now serving 2,000+ subscribers across classrooms worldwide.',
    client: 'Wonder Stories',
    sector: 'Education, Reading, Product',
    outcome: '2,000+ subscribers, global classroom adoption',
    href: 'https://www.wonder.io',
  },
  {
    title: 'Curious Wonder',
    description:
      'An interactive reading experience built for reluctant readers at the Boys & Girls Club.',
    client: 'Boys & Girls Club / Wonder Stories',
    sector: 'Education, Reading, Product',
    outcome: 'Live at curious.wonder.io',
    href: 'https://curious.wonder.io',
  },
  {
    title: 'LEGO Reading and Play Study',
    description:
      'Worked with Denver Public Schools and LEGO store families across Colorado. Over 30 book prototypes. Emotion sensors showed family interaction is the key ingredient for storytelling play.',
    client: 'The LEGO Group',
    sector: 'Toys, Play, Family Research',
    outcome: 'LEGO Play Stories product line launched',
    href: '/writing/lego-reading',
    internal: true,
  },
]

export default function Portfolio() {
  return (
    <section className={`${styles.section} section`} id="portfolio">
      <div className="container">

        {/* Hero */}
        <div className={`${styles.hero} reveal`}>
          <h2 className={styles.title}>Portfolio</h2>
          <p className={styles.intro}>
            As a prototyper and founder of mPath, I lead product and research strategies that uncover
            emerging innovations and unmet user needs. I've partnered with organizations like The LEGO Group,
            McGraw Hill, Starbucks, and i‑Ready to design interactive experiences that are both
            data-informed and deeply human.
          </p>
          <p className={styles.intro}>
            My work blends systems thinking with field-driven research, often using methods I developed
            at MIT like eye tracking and biosensors to surface insights that traditional interviews miss.
            I guide teams through rapid design-build-test cycles, integrating AI, behavioral science, and
            pedagogy into every phase of development, often coding the prototypes myself.
          </p>
          <p className={styles.intro}>
            My goal is to foster cultures of empathy and experimentation, where design is a catalyst
            for lasting change.
          </p>
          <a
            href="/s/portfolio-design-lead.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cvLink}
          >
            View full CV (PDF) →
          </a>
        </div>

        {/* Prototyping Examples */}
        <div className={`${styles.groupBlock} reveal`}>
          <h3 className={styles.groupLabel}>Prototyping Examples</h3>
        </div>
        <div className={styles.archive}>
          {prototypingExamples.map((item, i) => {
            const className = [
              styles.entry,
              item.featured ? styles.entryFeatured : '',
              `reveal reveal-delay-${Math.min(i + 1, 5)}`,
            ].filter(Boolean).join(' ')
            const inner = (
              <>
                <div className={styles.entryMain}>
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
            return item.internal ? (
              <Link key={item.title} to={item.href} className={className}>
                {inner}
              </Link>
            ) : (
              <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                {inner}
              </a>
            )
          })}
        </div>

        {/* UX Design Examples */}
        <div className={`${styles.groupBlock} ${styles.groupBlockSpaced} reveal`}>
          <h3 className={styles.groupLabel}>UX Design Examples</h3>
        </div>
        <div className={styles.archive}>
          {uxDesignExamples.map((item, i) => {
            const className = `${styles.entry} reveal reveal-delay-${Math.min(i + 1, 5)}`
            const inner = (
              <>
                <div className={styles.entryMain}>
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
            return item.internal ? (
              <Link key={item.title} to={item.href} className={className}>
                {inner}
              </Link>
            ) : (
              <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                {inner}
              </a>
            )
          })}
        </div>

      </div>
    </section>
  )
}
