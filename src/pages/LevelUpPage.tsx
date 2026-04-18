import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHeader,
  ArticleHero,
  ArticleImage,
  ArticleImageGrid,
  ArticleSectionHeading,
  ArticleStatRow,
  ArticleStat,
  ArticleCallout,
  ArticleTimeline,
  ArticleTimelineItem,
  ArticleInlineCta,
  ArticleClosing,
  ArticleCta,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'
import levelUpLogo from '../assets/Images/level-up/logo.webp'
import levelUpHome from '../assets/Images/level-up/home.webp'
import levelUpEditScreen from '../assets/Images/level-up/edit-screen.webp'
import levelUpChallenge from '../assets/Images/level-up/challenge.webp'
import levelUpPositive from '../assets/Images/level-up/positive-feedback.webp'
import levelUpRubric from '../assets/Images/level-up/screenshot-rubric.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/level-up'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-level-up.jpg'

export default function LevelUpPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>Level Up: Building an AI Writing Coach That Doesn't Do the Writing | Elliott Hedman</title>
        <meta name="description" content="We built Level Up — a free Google Docs add-on that gives students personalized writing feedback without writing for them. The design challenge: make AI the coach, not the ghostwriter." />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Level Up: Building an AI Writing Coach That Doesn't Do the Writing" />
        <meta property="og:description" content="A free Google Docs add-on that gives students personalized writing feedback without writing for them. Making AI the coach, not the ghostwriter." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2023-01-01" />
        <meta property="article:author" content="Elliott Hedman" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Level Up: Building an AI Writing Coach That Doesn't Do the Writing" />
        <meta name="twitter:description" content="Making AI the coach, not the ghostwriter. How we built Level Up." />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Level Up: Building an AI Writing Coach That Doesn't Do the Writing",
          "description": "We built Level Up — a free Google Docs add-on that gives students personalized writing feedback without writing for them.",
          "author": {
            "@type": "Person",
            "name": "Elliott Hedman",
            "url": "https://goodvibesgarage.ai"
          },
          "datePublished": "2023-01-01",
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

          <ArticleHeader
            type="Case Study"
            date="2023"
            author="Elliott Hedman"
            readTime="5 min read"
            title="Level Up: Building an AI Writing Coach That Doesn't Do the Writing"
            subtitle="The hard design problem wasn't building the AI. It was keeping it in the right role."
          />

          {/* ── Hero ── */}
          <ArticleHero
            img={levelUpLogo}
            imgAlt="Level Up — AI writing coach Google Docs add-on logo"
            layout="below"
          />

          {/* ── Intro ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                After researching how students were using AI to write their papers — and how consistently they couldn't explain what they'd "written" — the obvious next question was: what would it look like to use AI to help students write better instead of writing for them?
              </p>
              <p className={`${styles.p} reveal`}>
                Level Up is our answer to that question. It's a free Google Docs add-on that gives students personalized, real-time writing feedback — one challenge at a time, without ever putting words in their mouth.
              </p>
              <p className={`${styles.p} reveal`}>
                The design challenge wasn't the AI. It was the role.
              </p>
            </div>
          </div>

          {/* ── Stats ── */}
          <div className={styles.container}>
            <ArticleStatRow>
              <ArticleStat value="100%" label="free" note="for teachers and students" />
              <ArticleStat value="0" label="student writing stored" note="feedback saves to Google Drive only" />
              <ArticleStat value="7" label="design principles" note="built from student behavior research" />
            </ArticleStatRow>
          </div>

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          {/* ── The design problem ── */}
          <ArticleSectionHeading>The Design Problem: Keep the AI Coaching, Not Writing</ArticleSectionHeading>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                Most AI writing tools are designed to remove friction. They complete sentences, suggest paragraphs, clean up grammar. That's genuinely useful — for professionals who already know what they want to say and just want to say it faster.
              </p>
              <p className={`${styles.p} reveal`}>
                For students, that same removal of friction removes the learning. The struggle with the blank page is where writing skill gets built. An AI that takes that struggle away isn't helping students learn to write. It's just producing text.
              </p>
              <p className={`${styles.p} reveal`}>
                Level Up is designed around the opposite principle: make the AI a training partner, not a ghostwriter. Every feature is oriented toward the student doing more thinking, not less.
              </p>
            </div>
          </div>

          <ArticleImage src={levelUpEditScreen} alt="Level Up sidebar open in Google Docs — AI coaching a student essay with questions, not rewrites" layout="wide" caption="Level Up lives inside Google Docs. The AI asks questions and identifies gaps — it never puts words on the page." />

          {/* ── Seven principles ── */}
          <ArticleSectionHeading>Seven Principles Behind Level Up</ArticleSectionHeading>

          <div className={styles.container}>
            <ArticleTimeline>
              <ArticleTimelineItem step="01" heading="Student Driven">
                <p className={styles.p}>Students choose what they want to improve. The feedback isn't assigned — it's requested. This one decision changes the entire dynamic: a student who chose to work on clarity is more receptive to feedback about clarity than a student who was told to fix it.</p>
                <ArticleImage src={levelUpHome} alt="Level Up challenge selection screen — student picks which writing skill to work on: Thesis, Organization, Evidence, Grammar" layout="prose" caption="Students choose the challenge. Requested feedback lands differently than assigned feedback." />
              </ArticleTimelineItem>
              <ArticleTimelineItem step="02" heading="Audience First">
                <p className={styles.p}>Every piece of feedback is framed around how a reader experiences the writing. Not "this sentence is passive" — but "a reader might lose the thread here." The goal is for students to develop an internal model of their audience, not just a checklist of grammar rules.</p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="03" heading="Bite Sized">
                <p className={styles.p}>One challenge at a time. Not fifteen things to fix — one thing to try right now. This mirrors what we learned from years of watching students disengage from feedback that arrived in overwhelming quantity.</p>
                <ArticleImage src={levelUpChallenge} alt="Level Up feedback panel showing one specific coaching question for the student to respond to" layout="prose" caption="One challenge at a time. The AI asks — the student thinks." />
              </ArticleTimelineItem>
              <ArticleTimelineItem step="04" heading="Scaffolded Support">
                <p className={styles.p}>When a student doesn't know how to act on feedback, Level Up walks them through it step by step. Not by rewriting — by asking questions that guide the student to their own revision.</p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="05" heading="Immediate Feedback">
                <p className={styles.p}>The moment a student makes a change, they get a response. Did that address the issue? The gap between effort and recognition is as short as we can make it.</p>
                <ArticleImage src={levelUpPositive} alt="Level Up positive feedback screen confirming student's revision improved the writing" layout="prose" caption="Immediate acknowledgment when a revision works. The gap between effort and recognition is as short as possible." />
              </ArticleTimelineItem>
              <ArticleTimelineItem step="06" heading="Progression and Engagement">
                <p className={styles.p}>Students can see their improvement over time — levels, advancement indicators, visible growth. Learning without a sense of movement is demotivating. The app makes progress legible.</p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="07" heading="Customizable">
                <p className={styles.p}>Teachers can build their own rubrics and share them with the class. Level Up adapts to the assignment, not the other way around.</p>
                <ArticleImage src={levelUpRubric} alt="Level Up teacher rubric builder — custom writing criteria for any assignment" layout="prose" caption="Teachers build rubrics for their specific assignments. The AI coaches to those criteria." />
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          {/* ── Callout ── */}
          <div className={styles.container}>
            <ArticleCallout label="The Underlying Argument" variant="insight">
              <p>Every AI writing tool that removes struggle is making a bet that writing skill doesn't matter — that the output is what counts. Level Up makes the opposite bet: that the process of writing is where thinking happens, and that's worth protecting.</p>
            </ArticleCallout>
          </div>

          {/* ── CTA to tool ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                Level Up is free for teachers and students. It lives inside Google Docs, stores no student writing, and works with any rubric a teacher wants to bring.
              </p>
            </div>
            <ArticleInlineCta
              label="Try Level Up in Google Docs"
              href="https://workspace.google.com/marketplace"
              external
              note="Free for teachers and students."
            />
          </div>

          <ArticleClosing>
            AI that makes students think harder is a different tool than AI that thinks for them. Both exist. Only one builds writers.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to a teacher or someone thinking about AI in schools."
          />

        </article>
      </main>

      <Footer />
    </>
  )
}
