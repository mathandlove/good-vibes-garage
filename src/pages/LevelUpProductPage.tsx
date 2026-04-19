import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHero,
  ArticleImage,
  ArticleStatRow,
  ArticleStat,
  ArticleSectionHeading,
  ArticleTimeline,
  ArticleTimelineItem,
  ArticleCallout,
  ArticleInlineCta,
  ArticleClosing,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'
import levelUpLogo from '../assets/Images/level-up/logo.webp'
import levelUpHome from '../assets/Images/level-up/home.webp'
import levelUpEditScreen from '../assets/Images/level-up/edit-screen.webp'
import levelUpChallenge from '../assets/Images/level-up/challenge.webp'
import levelUpPositive from '../assets/Images/level-up/positive-feedback.webp'
import levelUpRubric from '../assets/Images/level-up/screenshot-rubric.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/level-up'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-level-up.jpg'

export default function LevelUpProductPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>Level Up: Free AI Writing Coach for Students | Elliott Hedman</title>
        <meta name="description" content="Level Up is a free Google Docs add-on that gives students personalized writing feedback — one challenge at a time, without writing for them." />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Level Up: Free AI Writing Coach for Students" />
        <meta property="og:description" content="Free Google Docs add-on. Personalized writing feedback that helps students think — without doing the writing for them." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Level Up: Free AI Writing Coach for Students" />
        <meta name="twitter:description" content="Free Google Docs add-on. Personalized writing feedback that helps students think." />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <Nav />

      <main className={styles.main}>
        <article className={styles.article}>

          <ArticleHero
            type="Free Tool"
            date="2024"
            author="Elliott Hedman"
            title="Level Up"
            subtitle="Free, personalized, just-in-time writing feedback. Put feedback directly in students' hands — creating self-driven reflection and critical thinking."
            img={levelUpLogo}
            imgAlt="Level Up — AI writing coach Google Docs add-on"
            layout="below"
          />

          {/* ── Stats ── */}
          <div className={styles.container}>
            <ArticleStatRow>
              <ArticleStat value="100%" label="free" note="for teachers and students" />
              <ArticleStat value="0" label="student writing stored" note="feedback saves to Google Drive only" />
              <ArticleStat value="7" label="design principles" note="built from student behavior research" />
            </ArticleStatRow>
          </div>

          {/* ── Primary CTA ── */}
          <div className={styles.container}>
            <ArticleInlineCta
              label="Add Level Up to Google Docs — Free"
              href="https://workspace.google.com/marketplace/app/level_up/1075091769384?flow_type=2"
              external
              note="Works with any Google Docs assignment. No account required for students."
            />
          </div>

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          {/* ── How it works ── */}
          <ArticleSectionHeading>How Level Up Transforms Student Feedback</ArticleSectionHeading>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                Students need feedback that engages them in their own learning and helps them grow their own voice and critical thinking.
              </p>
            </div>
            <ArticleTimeline>
              <ArticleTimelineItem
                step="01"
                heading="Student Driven"
                variant="split"
                splitImage={<img src={levelUpHome} alt="Level Up challenge selection screen — student picks which writing skill to work on: Thesis, Organization, Evidence, Grammar" />}
              >
                <p className={styles.p}>Students choose what they want to improve, making feedback personal and relevant. The feedback isn't assigned — it's requested. This one decision changes the entire dynamic: a student who chose to work on clarity is more receptive to feedback about clarity than a student who was told to fix it.</p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="02" heading="Audience First">
                <p className={styles.p}>Feedback starts with how the writing makes the reader feel, reinforcing that writing is first about communication. Not "this sentence is passive" — but "a reader might lose the thread here." The goal is for students to develop an internal model of their audience, not just a checklist of grammar rules.</p>
              </ArticleTimelineItem>
              <ArticleTimelineItem
                step="03"
                heading="Bite Sized"
                variant="split"
                splitImage={<img src={levelUpChallenge} alt="Level Up feedback panel showing one specific coaching question for the student to respond to" />}
              >
                <p className={styles.p}>Feedback is given one challenge at a time, helping students stay focused and avoid overload. Not fifteen things to fix — one thing to try right now.</p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="04" heading="Scaffolded Support">
                <p className={styles.p}>Each edit includes clear, step-by-step guidance on how to improve. When a student doesn't know how to act on feedback, Level Up walks them through it — not by rewriting, but by asking questions that guide the student to their own revision.</p>
              </ArticleTimelineItem>
              <ArticleTimelineItem
                step="05"
                heading="Immediate Feedback"
                variant="split"
                splitImage={<img src={levelUpPositive} alt="Level Up positive feedback screen confirming student's revision improved the writing" />}
              >
                <p className={styles.p}>Students see real-time evaluations of their changes. The moment a student makes a change, they get a response. The gap between effort and recognition is as short as we can make it.</p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="06" heading="Progression and Engagement">
                <p className={styles.p}>Levels and progress tracking help students see their improvement over time. Learning without a sense of movement is demotivating. The app makes progress legible.</p>
              </ArticleTimelineItem>
              <ArticleTimelineItem
                step="07"
                heading="Customizable"
                variant="split"
                splitImage={<img src={levelUpRubric} alt="Level Up teacher rubric builder — custom writing criteria for any assignment" />}
              >
                <p className={styles.p}>Teachers and students can modify rubrics to fit individual writing goals. Level Up adapts to the assignment, not the other way around. You can create and share your own unique rubrics.</p>
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          <ArticleImage
            src={levelUpEditScreen}
            alt="Level Up sidebar open in Google Docs — AI coaching a student essay with questions, not rewrites"
            layout="wide"
            caption="Level Up lives inside Google Docs. The AI asks questions and identifies gaps — it never puts words on the page."
          />

          {/* ── Why teachers love it ── */}
          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          <ArticleSectionHeading>Why Teachers Love Level Up</ArticleSectionHeading>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                <strong>Stop wasting hours on ineffective feedback.</strong> Students receive targeted feedback immediately on their papers, guided by the teacher.
              </p>
              <p className={`${styles.p} reveal`}>
                <strong>Encourage independent learning and critical thinking.</strong> Students actively engage in their own growth and can see their progress.
              </p>
              <p className={`${styles.p} reveal`}>
                <strong>Teach students positive ways to use generative AI.</strong> Level Up helps students see that AI isn't just for shortcuts — it can support real learning and improvement.
              </p>
            </div>
          </div>

          {/* ── Privacy callout ── */}
          <div className={styles.container}>
            <ArticleCallout label="Student Privacy" variant="insight">
              <p>We do not store students' writing. All feedback is securely saved to their personal Google Drive. Level Up never sees or retains the content of student essays.</p>
            </ArticleCallout>
          </div>

          {/* ── Final CTA ── */}
          <div className={styles.container}>
            <ArticleInlineCta
              label="Add Level Up to Google Docs — Free"
              href="https://workspace.google.com/marketplace/app/level_up/1075091769384?flow_type=2"
              external
              note="Free for teachers and students. No account required."
            />
          </div>

          <ArticleClosing>
            AI that makes students think harder is a different tool than AI that thinks for them. Both exist. Only one builds writers.
          </ArticleClosing>

        </article>
      </main>

      <Footer />
    </>
  )
}
