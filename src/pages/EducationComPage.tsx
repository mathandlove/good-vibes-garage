import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHeader,
  ArticleHero,
  ArticleImage,
  ArticleImageGrid,
  ArticleProjectMeta,
  ArticleStatRow,
  ArticleStat,
  ArticleSectionHeading,
  ArticleCallout,
  ArticlePullQuote,
  ArticleClosing,
  ArticleCta,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'
import heroImg from '../assets/Images/education-com/classroom.webp'
import proto1Img from '../assets/Images/education-com/prototype1.webp'
import proto2Img from '../assets/Images/education-com/prototype2.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/education-com-gamification'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-education-com-gamification.jpg'

export default function EducationComPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>Gamification + Learning with Education.com | Elliott Hedman</title>
        <meta name="description" content="Travelling across the US testing software in homes, 15 paper prototype games, and one core finding: most educational games aren't worth coming back to. Here's the rubric that changed that." />
        <link rel="canonical" href={CANONICAL_URL} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Gamification + Learning with Education.com" />
        <meta property="og:description" content="Travelling across the US testing software in homes, 15 paper prototype games, and one core finding: most educational games aren't worth coming back to." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2018-01-01" />
        <meta property="article:author" content="Elliott Hedman" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gamification + Learning with Education.com" />
        <meta name="twitter:description" content="What it takes to build an educational game students actually want to keep playing." />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Gamification + Learning with Education.com",
          "description": "Travelling across the US testing software in homes, 15 paper prototype games, and one core finding: most educational games aren't worth coming back to.",
          "author": { "@type": "Person", "name": "Elliott Hedman", "url": "https://goodvibesgarage.ai" },
          "datePublished": "2018-01-01",
          "publisher": { "@type": "Organization", "name": "Good Vibes Garage", "url": "https://goodvibesgarage.ai" },
          "url": CANONICAL_URL,
          "image": OG_IMAGE
        })}</script>
      </Helmet>

      <Nav />

      <main className={styles.main}>
        <article className={styles.article}>

          <ArticleHeader
            type="Case Study"
            date="2018"
            author="Elliott Hedman"
            readTime="4 min read"
            title="Gamification + Learning with Education.com"
            subtitle="Most educational games are designed to be completed, not returned to. We set out to build something students would actually ask to play again."
          />

          <ArticleHero img={heroImg} imgAlt="Student using Education.com software at home" layout="below" />

          <ArticleProjectMeta items={[
            { label: 'Client',  value: 'Education.com' },
            { label: 'Sector',  value: 'EdTech, Gamification, Home Learning' },
            { label: 'My Role', value: 'Research Lead & Prototype Designer' },
            { label: 'Scope',   value: 'Homeschooled students, in-home testing across the US' },
          ]} />

          {/* ── Intro ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                A large portion of Education.com's market is homeschooled students. So we went to them — travelling across the United States, sitting with children in their homes, watching them use the software the way they naturally would.
              </p>
              <p className={`${styles.p} reveal`}>
                What we found first was a navigation problem. When the researcher left the room, younger students became disoriented. Without an adult to redirect them, they wandered away from lessons. They needed structure that didn't depend on supervision.
              </p>
              <p className={`${styles.p} reveal`}>
                What we found next was a motivation problem. The games existed, but students weren't choosing to return to them. Completing a game once was enough. There was nothing pulling them back.
              </p>
            </div>
          </div>

          {/* ── Stats ── */}
          <div className={styles.container}>
            <ArticleStatRow>
              <ArticleStat value="15" label="paper prototype games" note="built in PowerPoint, tested remotely" />
              <ArticleStat value="US-wide" label="in-home testing" note="homeschooled students in their natural environment" />
              <ArticleStat value="1" label="rubric" note="for games students want to return to" />
            </ArticleStatRow>
          </div>

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          <ArticleSectionHeading>How We Found the Answer</ArticleSectionHeading>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                We built 15 paper-based prototype games using PowerPoint — low-fidelity enough to iterate quickly, testable enough to get real reactions. We shipped them to students remotely, watched sessions, took feedback, and refined.
              </p>
              <p className={`${styles.p} reveal`}>
                Some games we scrapped entirely. Some we enhanced. By the end of the iteration cycle, students were consistently picking particular games as their favorites — and asking to play them again. Those preferences weren't random. They pointed to patterns.
              </p>
            </div>
          </div>

          <ArticleImageGrid columns={2}>
            <ArticleImage src={proto1Img} alt="Paper prototype game interface for Education.com" layout="grid" caption="One of 15 paper prototype games built and tested remotely." />
            <ArticleImage src={proto2Img} alt="Refined prototype game interface after student feedback" layout="grid" caption="Refined version based on student feedback iterations." />
          </ArticleImageGrid>

          <ArticlePullQuote>
            "Education.com now has a rubric and clear design direction on how to make games that students would ask to keep coming back to again and again."
          </ArticlePullQuote>

          <ArticleSectionHeading>What Makes a Game Worth Returning To</ArticleSectionHeading>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                The games students chose to return to shared specific characteristics. They weren't just more polished or more rewarding. They were structured differently — around mastery, not completion. Students had reason to replay because improvement was visible, challenges scaled with ability, and the feedback loop was tight enough to feel responsive.
              </p>
              <p className={`${styles.p} reveal`}>
                The games that failed had the opposite structure: play once, get a score, move on. There was no reason to return because there was no path forward. Completion was the ending, not the beginning.
              </p>
              <p className={`${styles.p} reveal`}>
                The output of this project was a rubric — a set of design criteria any game could be evaluated against. Education.com used it as a filter for every new game in development and as a lens for auditing what already existed.
              </p>
            </div>
          </div>

          <div className={styles.container}>
            <ArticleCallout label="The Gamification Rubric" variant="insight">
              <p>
                The rubric from this project is available through Wonder Stories' research portal.{' '}
                <a href="https://www.wonderstories.app/research/engaginggamesrubric" target="_blank" rel="noopener noreferrer">
                  Read the Engaging Games Rubric →
                </a>
              </p>
            </ArticleCallout>
          </div>

          <ArticleClosing>
            The difference between a game students play once and a game they come back to isn't production value. It's structure.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to someone designing educational games or learning experiences."
          />

        </article>
      </main>

      <Footer />
    </>
  )
}
