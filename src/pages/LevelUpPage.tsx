import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHero,
  ArticleImage,
  ArticleCard,
  ArticleProjectMeta,
  ArticleSectionHeading,
  ArticleStatRow,
  ArticleStat,
  ArticleCallout,
  ArticleInlineCta,
  ArticleClosing,
  ArticleCta,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'
import levelUpLogo from '../assets/Images/level-up/logo.webp'
import levelUpEditScreen from '../assets/Images/level-up/edit-screen.webp'
import levelUpChallenge from '../assets/Images/level-up/challenge.webp'
import levelUpPositive from '../assets/Images/level-up/positive-feedback.webp'
import levelUpFullDoc from '../assets/Images/level-up/full-document.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/level-up'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-level-up.jpg'

export default function LevelUpPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>How Do Students Really Want to Use AI? | Elliott Hedman</title>
        <meta name="description" content="We built a multi-agent AI tutor to address students' prolific use of AI for homework. The research changed everything we thought we knew about the problem." />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How Do Students Really Want to Use AI?" />
        <meta property="og:description" content="We built a multi-agent AI tutor for schools. The research changed everything we thought we knew about the problem." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2024-01-01" />
        <meta property="article:author" content="Elliott Hedman" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How Do Students Really Want to Use AI?" />
        <meta name="twitter:description" content="We built a multi-agent AI tutor for schools. The research changed everything." />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "How Do Students Really Want to Use AI?",
          "description": "We built a multi-agent AI tutor to address students' prolific use of AI for homework. The research changed everything we thought we knew about the problem.",
          "author": {
            "@type": "Person",
            "name": "Elliott Hedman",
            "url": "https://goodvibesgarage.ai"
          },
          "datePublished": "2024-01-01",
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

          <ArticleHero
            img={levelUpLogo}
            imgAlt="Level Up — AI writing coach for students"
            layout="below"
            title="How Do Students Really Want to Use AI?"
            subtitle="We set out to build a plagiarism solution. What we found was a completely different problem."
            type="Case Study"
            date="2024"
            author="Elliott Hedman"
            readTime="5 min read"
          />

          <ArticleProjectMeta items={[
            { label: 'Partner',  value: 'Ditch That Textbook' },
            { label: 'Sector',  value: 'Education, AI, Writing' },
            { label: 'My Role', value: 'Design & Research Lead' },
            { label: 'Method',  value: 'Student prototype testing, teacher interviews' },
          ]} />

          {/* ── Intro ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                We partnered with Ditch That Textbook to create a custom AI tool for schools, designed to address students' prolific use of AI for homework. Our starting idea was simple: a "Grammarly that doesn't just give you the answer, but helps you learn."
              </p>
              <p className={`${styles.p} reveal`}>
                After interviewing teachers, we built a multi-agent prototype called Level Up and tested it with students. The research was eye-opening.
              </p>
            </div>
            <ArticleInlineCta
              note="Want the full design breakdown?"
              label="View the AI + UX design walkthrough (PDF)"
              href="/levelUpWalkthrough.pdf"
              external
            />
          </div>

          {/* ── Video ── */}
          <div className={styles.container}>
            <div className={`${styles.videoWrap} reveal`}>
              <iframe
                src="https://www.youtube.com/embed/tZkgEHviMHY"
                title="Level Up — AI writing coach SXSWEDU talk"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* ── Stats ── */}
          <div className={styles.container}>
            <ArticleStatRow>
              <ArticleStat value="2" label="major pivots" note="from plagiarism detection to Socratic method" />
              <ArticleStat value="100%" label="free" note="for teachers and students" />
              <ArticleStat value="0" label="student writing stored" note="feedback saves to Google Drive only" />
            </ArticleStatRow>
          </div>

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          {/* ── What we found ── */}
          <ArticleSectionHeading>What the Research Revealed</ArticleSectionHeading>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                Traditional plagiarism detectors like TurnItIn weren't working — students were paraphrasing entire papers to avoid detection. While students enjoyed the gamified editing experience, they were still editing essays they hadn't written themselves.
              </p>
              <p className={`${styles.p} reveal`}>
                We realized the real opportunity was in helping students think critically and find their own voice.
              </p>
            </div>
            <ArticleInlineCta
              note="More on what we learned"
              label="Why AI Abstinence Policies Are Backfiring"
              href="/writing/ai-abstinence"
            />
          </div>

          <ArticleImage
            src={levelUpFullDoc}
            alt="Level Up open in Google Docs showing a full student essay with coaching sidebar"
            layout="wide"
            caption="Level Up lives inside Google Docs — coaching happens in context, not in a separate tool."
          />

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          {/* ── Three pivots ── */}
          <ArticleSectionHeading>Three Things That Changed</ArticleSectionHeading>

          <div className={styles.cardsContainer}>
            <ArticleCard
              img={levelUpEditScreen}
              imgAlt="Level Up coaching sidebar showing a Socratic question prompting the student to think deeper about their argument"
              caption="Socratic method in action"
              heading="Feedback"
              number="01"
            >
              <p className={styles.p}><strong>Before mPath: Guardrails to Prevent Plagiarism</strong></p>
              <p className={styles.p}>Level Up began as a plagiarism detection tool. But we quickly uncovered a deeper issue: students were using AI to paraphrase, which bypassed detection, while missing key learning moments.</p>
              <p className={styles.p}><strong>After mPath: Encouraging Critical Thinking</strong></p>
              <p className={styles.p}>We reframed writing as a way to cultivate critical thinking. Using a prototype Socratic Method app, we introduced AI-driven questions that pushed students to think more deeply, reflect, and defend their ideas. The focus shifted from generating answers to engaging with ideas.</p>
            </ArticleCard>

            <ArticleCard
              img={levelUpChallenge}
              imgAlt="Level Up challenge selection panel where students choose which writing skill to work on"
              caption="Students choose the challenge"
              heading="Student Led"
              number="02"
              reverse
            >
              <p className={styles.p}><strong>Before mPath: AI for Teacher Efficiency</strong></p>
              <p className={styles.p}>Most AI tools today focus on making grading more efficient. But in reality, teachers are efficiently grading work that students didn't actually write.</p>
              <p className={styles.p}><strong>After mPath: Student-Focused AI Tutors</strong></p>
              <p className={styles.p}>Students engage more deeply when they receive feedback in the moment, directly tied to the task at hand. Live AI tutors support real-time learning and help students understand that effort and reflection are part of the process.</p>
            </ArticleCard>

            <ArticleCard
              img={levelUpPositive}
              imgAlt="Level Up positive feedback screen with encouraging emoji-rich message after a student revision"
              caption="Feedback that students actually read"
              heading="Emojis are Your Friend"
              number="03"
            >
              <p className={styles.p}><strong>Before mPath: That Sounds Like a Tutor</strong></p>
              <p className={styles.p}>Our initial agents were designed to mimic professional tutors. The result? Polite but bland feedback that students barely read, let alone responded to.</p>
              <p className={styles.p}><strong>After mPath: Emojify the Feedback</strong></p>
              <p className={styles.p}>Through multiple prototypes, we discovered a surprising truth—asking the AI to add "a ton of emojis" made feedback more engaging and easier to understand. Suddenly, students were reading it. AI didn't need to sound like a tutor. It needed to sound like something entirely new.</p>
            </ArticleCard>
          </div>


          {/* ── Callout ── */}
          <div className={styles.container}>
            <ArticleCallout label="The Core Insight" variant="insight">
              <p>Our second iteration takes a new approach: using AI to support student thinking through the Socratic Method. Early prototype testing shows that students are not only thinking more deeply, but also enjoying the writing process more than with typical assignments.</p>
            </ArticleCallout>
          </div>

          {/* ── CTA to product ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                Level Up is free for teachers and students. It lives inside Google Docs, stores no student writing, and works with any rubric a teacher wants to bring.
              </p>
            </div>
            <ArticleInlineCta
              label="Learn more about Level Up"
              href="/level-up"
              note="Free for teachers and students."
            />
          </div>

          <ArticleClosing>
            We went looking for a plagiarism problem. We found a thinking problem. Those require completely different tools.
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
