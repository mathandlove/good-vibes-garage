import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHero,
  ArticleCard,
  ArticleSectionHeading,
  ArticlePullQuote,
  ArticleStatRow,
  ArticleStat,
  ArticleCallout,
  ArticleTimeline,
  ArticleTimelineItem,
  ArticleProjectMeta,
  ArticleClosing,
  ArticleCta,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'

import hero from '../assets/Images/question-based-reading/slide7-reading-design-overview.webp'
import ricardoBored from '../assets/Images/question-based-reading/slide8-ricardo-bored-reading.webp'
import ricardoEngaged from '../assets/Images/question-based-reading/slide10-ricardo-engages-wonder-stories.webp'
import designSlide from '../assets/Images/question-based-reading/slide12-question-based-reading-design.webp'
import monkeysStory from '../assets/Images/question-based-reading/slide13-monkeys-and-lies-story.webp'
import textReveals from '../assets/Images/question-based-reading/slide14-text-reveals-one-click-at-a-time.webp'
import results from '../assets/Images/question-based-reading/slide20-results-outcome.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/question-based-reading'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-question-based-reading.jpg'

export default function QuestionBasedReadingPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>Question Based Reading | Elliott Hedman</title>
        <meta name="description" content="Struggling readers don't lack ability — they lack a reason to read. Emotion sensors and eye-tracking across 300+ kids revealed exactly what makes a reluctant reader lean in." />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Question Based Reading" />
        <meta property="og:description" content="Struggling readers don't lack ability — they lack a reason to read. Emotion sensors and eye-tracking across 300+ kids revealed exactly what makes a reluctant reader lean in." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2020-04-30" />
        <meta property="article:author" content="Elliott Hedman" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Question Based Reading" />
        <meta name="twitter:description" content="Struggling readers don't lack ability — they lack a reason to read. What 300+ kids and emotion sensors taught us about engagement." />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Question Based Reading",
          "description": "Struggling readers don't lack ability — they lack a reason to read. Emotion sensors and eye-tracking across 300+ kids revealed exactly what makes a reluctant reader lean in.",
          "author": {
            "@type": "Person",
            "name": "Elliott Hedman",
            "url": "https://goodvibesgarage.ai"
          },
          "datePublished": "2020-04-30",
          "publisher": {
            "@type": "Organization",
            "name": "Good Vibes Garage",
            "url": "https://goodvibesgarage.ai"
          },
          "url": CANONICAL_URL,
          "image": OG_IMAGE
        })}</script>
      </Helmet>

      <Nav />

      <main className={styles.main}>
        <article className={styles.article}>

          {/* ── Hero image ── */}
          <ArticleHero
            img={hero}
            imgAlt="Research overview slide showing the question-based reading design framework"
            layout="below"
            title="Question Based Reading"
            subtitle="What does it take to make a struggling reader lean in?"
            type="Research"
            date="2020"
            author="Elliott Hedman"
            readTime="5 min read"
          />

          {/* ── Project metadata ── */}
          <ArticleProjectMeta items={[
            { label: 'Context',  value: 'MIT Media Lab PhD Research' },
            { label: 'Sector',  value: 'Education, Reading, EdTech' },
            { label: 'My Role', value: 'Researcher & Designer' },
            { label: 'Scope',   value: '300+ children across Boys & Girls Clubs and Title 1 schools' },
          ]} />

          {/* ── Intro prose ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                During my PhD at the MIT Media Lab, I watched hundreds of struggling readers do something that surprised me: they weren't failing to read because they couldn't — they were choosing not to. The words weren't giving them a reason.
              </p>
              <p className={`${styles.p} reveal`}>
                I spent years in Boys & Girls Clubs and Title 1 schools, strapping emotion sensors and eye-tracking glasses onto kids, watching what actually happened when a struggling reader sat down with a book. What I found changed how I think about reading entirely.
              </p>
            </div>
          </div>

          {/* ── Stats ── */}
          <div className={styles.container}>
            <ArticleStatRow>
              <ArticleStat value="300+" label="children observed" note="Boys & Girls Clubs and Title 1 schools" />
              <ArticleStat value="5" label="design features" note="derived from sensor + eye-tracking data" />
              <ArticleStat value="1" label="core insight" note="questions are a black hole for children's attention" />
            </ArticleStatRow>
          </div>

          {/* ── Ornamental divider ── */}
          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          {/* ── Ricardo ── */}
          <div className={styles.cardsContainer}>

            <ArticleCard
              img={ricardoBored}
              imgAlt="Ricardo becomes visibly disengaged reading a traditional chapter book"
              heading="Ricardo and Dr. Dolittle"
              quote="Struggling readers don't lack ability. They lack a reason."
            >
              <p className={styles.p}>
                Ricardo was a bright kid. But when I put a copy of <em>Dr. Dolittle</em> in front of him, his skin conductance flatlined. His eyes scanned the page without stopping. He was physically present and cognitively absent.
              </p>
              <p className={styles.p}>
                This wasn't a reading problem. It was an engagement problem — and the book was failing him, not the other way around.
              </p>
            </ArticleCard>

            <ArticleCard
              img={ricardoEngaged}
              imgAlt="Ricardo leaning forward, visibly engaged with the Wonder Stories app"
              heading="The Same Kid, Different Book"
              reverse
              quote="His sensors lit up. He leaned forward. He wanted to know the answer."
            >
              <p className={styles.p}>
                When Ricardo encountered a story built around a question he needed to answer — a mystery, a challenge, something at stake — everything changed. The emotion sensors spiked. The eye-tracking showed deep focus on every line.
              </p>
              <p className={styles.p}>
                He wasn't a different reader. He had a different reason to read.
              </p>
            </ArticleCard>

          </div>

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          <ArticleSectionHeading>Five Features of Question Based Reading</ArticleSectionHeading>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                The sensor data pointed to five specific design features that consistently drove engagement in struggling readers. These became the foundation for Wonder Stories.
              </p>
            </div>
          </div>

          <div className={styles.cardsContainer}>

            <ArticleCard
              img={designSlide}
              imgAlt="Slide showing the question-based reading design framework with five features"
              heading="01 — Questions as the Engine"
              number="01"
              quote="Questions were a black hole for children's attention."
            >
              <p className={styles.p}>
                Eye-tracking revealed that struggling readers skimmed most text — but stopped cold at questions. The solution was structural: build entire stories around questions that readers must answer after reading each passage. Reading stops being passive. It becomes a mission.
              </p>
            </ArticleCard>

          </div>

          <div className={styles.cardsContainer}>

            <ArticleCard
              img={monkeysStory}
              imgAlt="In 'Monkeys and Lies,' a child determines if his mother is lying by learning about lie detectors"
              heading="02 — Real Stakes, Real Stories"
              reverse
              number="02"
              quote="Children leaned in when the answer actually mattered to them."
            >
              <p className={styles.p}>
                In <em>Monkeys and Lies</em>, a child is trying to figure out if his mother is lying — so he learns about lie detectors. The reading serves the curiosity. The story gives the question weight, and the question gives the reading purpose.
              </p>
              <p className={styles.p}>
                Emotion sensors showed stronger positive reactions when children felt genuine uncertainty about an outcome. The stakes had to be real.
              </p>
            </ArticleCard>

          </div>

          <div className={styles.cardsContainer}>

            <ArticleCard
              img={textReveals}
              imgAlt="A paragraph of text revealing slowly, one sentence at a time on screen"
              heading="03 — Bite-Sized Reveals"
              number="03"
              quote="Full pages intimidate. One sentence at a time feels like a game."
            >
              <p className={styles.p}>
                Eye-tracking showed that a full page of text caused early readers to shut down before starting. Wonder Stories presents text progressively — one or two sentences revealed per tap — making even a long book feel manageable. The scroll becomes a rhythm.
              </p>
            </ArticleCard>

          </div>

          <div className={styles.container}>
            <ArticleTimeline>
              <ArticleTimelineItem step="04" heading="Failure as a Hook">
                <p className={styles.p}>Rather than softening wrong answers, Wonder Stories signals failure directly — negative audio-visual feedback that stings just enough. Children consistently leaned in harder after a wrong answer, seeking redemption. Failure, handled well, is fuel.</p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="05" heading="Multisensory Engagement">
                <p className={styles.p}>Drawing from research on classical music accessibility, the app incorporated physical interactions (tearing pages), haptic feedback, and audio elements to maintain focus beyond text alone. Reading doesn't have to be a solitary, silent, still activity.</p>
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          {/* ── Callout ── */}
          <div className={styles.container}>
            <ArticleCallout label="Key Insight" variant="insight">
              <p>Reading can be engaging for all readers — we just have to rethink what the book looks like. The Gutenberg format was designed for adults with existing motivation. Struggling readers need something built for them from the ground up.</p>
            </ArticleCallout>
          </div>

          {/* ── Results ── */}
          <div className={styles.cardsContainer}>

            <ArticleCard
              img={results}
              imgAlt="Results slide showing improved engagement outcomes from question-based reading"
              heading="What the Data Showed"
            >
              <p className={styles.p}>
                Across hundreds of children, question-based reading produced measurably higher engagement — sustained focus, positive emotional response, and children voluntarily continuing to read past the required sections.
              </p>
              <p className={styles.p}>
                The kids weren't broken. The books were.
              </p>
            </ArticleCard>

          </div>

          <ArticlePullQuote>
            Reading can be engaging for all readers — we just have to tweak what the book looks like from the days of Gutenberg.
          </ArticlePullQuote>

          <ArticleClosing>
            Struggling readers don't need more phonics drills. They need a reason.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to a teacher or literacy researcher you know."
          />

        </article>
      </main>

      <Footer />
    </>
  )
}
