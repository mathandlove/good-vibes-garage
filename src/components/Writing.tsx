import styles from './Writing.module.css'

const featured = {
  title: 'Why AI Abstinence Policies Are Backfiring',
  description:
    'Blanket school bans on AI are failing — students use it anyway. The more important conversation is about when AI helps thinking and when it replaces it.',
  type: 'Essay',
  date: '2025',
  href: 'https://www.buildempathy.com/human-ai-interactions/aiabstinence',
}

const selected = [
  {
    title: 'Why Kids Work Hard at Fortnite, Not Frog and Toad',
    description:
      'Game mechanics motivate children in ways traditional reading never could. What that gap reveals about how we design learning experiences.',
    type: 'Article',
    date: '2023',
    href: 'https://medium.com/inspired-ideas-prek-12/why-kids-work-hard-at-fortnite-not-frog-and-toad-af070ce242f7',
  },
  {
    title: '5 Ways Books Can Empower Play — LEGO Case Study',
    description:
      'A year of design research with struggling readers in Denver Public Schools. The key finding: books only matter to kids when reading is essential to the play itself.',
    type: 'Case Study',
    date: '2023',
    href: 'https://www.buildempathy.com/legoreading',
  },
  {
    title: 'The Death of Curiosity',
    description:
      'How the structures we build around learning — grading, compliance, performance — quietly kill the thing that makes learning work.',
    type: 'Essay',
    date: '2019',
    href: 'https://medium.com/p/e0fc2aca4408',
  },
  {
    title: 'Why Personalized Learning Keeps Failing',
    description:
      'Adaptive systems promise individualized education but consistently underdeliver. A design research perspective on why the model keeps breaking down.',
    type: 'Essay',
    date: '2019',
    href: 'https://uxdesign.cc/why-personalized-learning-keeps-failing-3dc9b0fe4e0',
  },
  {
    title: 'Redesigning Digital Reading for Struggling Readers',
    description:
      'How Wonder Stories uses inquiry-based learning — embedded questions, bite-sized text, and immediate feedback — to help children build reading confidence.',
    type: 'Article',
    date: '2020',
    href: 'https://www.wonderstories.app/research/redesignremote',
  },
  {
    title: 'The Neuroscience of Struggling Readers',
    description:
      'Why children who struggle with reading often need harder books, not easier ones — and what the neuroscience behind frustration and challenge reveals.',
    type: 'Essay',
    date: '2018',
    href: 'https://medium.com/@elliotthedman/the-neuroscience-of-struggling-readers-why-children-need-harder-books-2dc0a1e3ef2b',
  },
]

const academic = [
  {
    title: 'Wireless Measurement of Sympathetic Arousal During Therapy',
    description: 'Frontiers in Neuroscience. EDA sensors measuring physiological arousal in children during occupational therapy.',
    type: 'Journal Article',
    date: '2020',
    href: 'https://www.frontiersin.org/articles/10.3389/fnint.2020.539875/full',
  },
  {
    title: 'Motivating Struggling Readers',
    description: 'ELO Conference. Why some children disengage from reading — and what design can do about it.',
    type: 'Conference Paper',
    date: '2021',
    href: 'https://www.buildempathy.com/s/HedmanELO2021.pdf',
  },
  {
    title: 'Effective Feedback Depends on Emotional Weight',
    description: 'AERA 2018. The emotional context around feedback determines whether students use it or ignore it.',
    type: 'Conference Paper',
    date: '2018',
    href: 'https://www.buildempathy.com/s/AERA2018_student_feedback_symposium.pdf',
  },
  {
    title: 'Beyond Consent: 6 Ways of Bringing Equity into Neuroscience',
    description: 'What responsible research looks like when measuring physiological responses in historically excluded communities.',
    type: 'Essay',
    date: '2019',
    href: 'https://uxdesign.cc/beyond-consent-6-ways-of-bringing-equity-into-neuroscience-53c54b0a7f5f',
  },
  {
    title: 'Thick Psychophysiology for Empathic Design',
    description: 'Doctoral dissertation. Using physiological measurement as a tool for building genuine empathy in the design process.',
    type: 'Dissertation',
    date: '2014',
    href: 'https://www.buildempathy.com/s/hedmanDissertation.pdf',
  },
  {
    title: 'Digital Math Has a Guessing Crisis',
    description: 'Most digital math tools reward guessing over thinking. Why that matters, and what it would take to fix it.',
    type: 'Essay',
    date: '2019',
    href: 'https://medium.com/swlh/math-has-a-guessing-crisis-1182dcbf68ff',
  },
  {
    title: 'What Parents Want in an Educational App',
    description: 'What testing prototypes with real families revealed. The answer is almost never what edtech companies are building.',
    type: 'Essay',
    date: '2019',
    href: 'https://medium.com/@elliotthedman/what-parents-want-in-an-educational-app-5f0e0c741795',
  },
  {
    title: '7 Ways to Help Kids Feel Like They Are Learning',
    description: 'The gap between learning something and feeling like you learned it — and why it shapes whether kids keep going.',
    type: 'Essay',
    date: '2018',
    href: 'https://medium.com/@elliotthedman/7-ways-to-help-kids-feel-their-learning-80f4abbeefb0',
  },
  {
    title: 'The 6 Steps to Infusing Literature with Engaging Questions',
    description: 'A practical framework for embedding critical thinking into reading, developed through years of work with struggling readers.',
    type: 'Essay',
    date: '2018',
    href: 'https://medium.com/@elliotthedman/the-6-steps-to-infusing-childrens-literature-with-engaging-questions-c403d43085c7',
  },
]

export default function Writing() {
  return (
    <section className={`${styles.section} section`} id="writing">
      <div className="container">

        {/* Hero */}
        <div className={`${styles.hero} reveal`}>
          <h2 className={styles.title}>Writing</h2>
          <p className={styles.intro}>
            Essays, articles, and research on learning, AI, and what happens when you put real tools in front of real people.
          </p>
        </div>

        {/* Featured */}
        <a
          href={featured.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.featured} reveal reveal-delay-1`}
        >
          <div className={styles.featuredMeta}>
            <span className={styles.typeTag}>{featured.type}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.date}>{featured.date}</span>
            <span className={styles.featuredBadge}>Featured</span>
          </div>
          <h3 className={styles.featuredTitle}>{featured.title}</h3>
          <p className={styles.featuredDesc}>{featured.description}</p>
          <span className={styles.cta}>Read article <span className={styles.arrow}>→</span></span>
        </a>

        {/* Selected Writing */}
        <div className={`${styles.groupBlock} reveal`}>
          <h3 className={styles.groupLabel}>Selected Writing</h3>
        </div>
        <div className={styles.archive}>
          {selected.map((item, i) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.entry} reveal reveal-delay-${Math.min(i + 1, 5)}`}
            >
              <div className={styles.entryMain}>
                <h4 className={styles.entryTitle}>{item.title}</h4>
                <p className={styles.entryDesc}>{item.description}</p>
                <span className={styles.entryMeta}>{item.type} · {item.date}</span>
              </div>
              <span className={styles.entryArrow}>→</span>
            </a>
          ))}
        </div>

        {/* Academic Work */}
        <div className={`${styles.groupBlock} ${styles.groupBlockSpaced} reveal`}>
          <h3 className={styles.groupLabel}>Academic Work</h3>
          <p className={styles.groupSub}>Conference papers, journal articles, and dissertation research.</p>
        </div>
        <div className={`${styles.archive} ${styles.archiveDim}`}>
          {academic.map((item, i) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.entry} ${styles.entryDim} reveal reveal-delay-${Math.min(i + 1, 5)}`}
            >
              <div className={styles.entryMain}>
                <h4 className={styles.entryTitle}>{item.title}</h4>
                <p className={styles.entryDesc}>{item.description}</p>
                <span className={styles.entryMeta}>{item.type} · {item.date}</span>
              </div>
              <span className={styles.entryArrow}>→</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
