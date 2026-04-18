import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHeader,
  ArticleHero,
  ArticleSectionHeading,
  ArticleCallout,
  ArticleTimeline,
  ArticleTimelineItem,
  ArticleClosing,
  ArticleCta,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'

import heroImg from '../assets/Images/khanmigo/reading-interface.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/khanmigo'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-khanmigo.jpg'

export default function KhanmigoPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>Like the Help Button, Khanmigo Will Fail to Help My Underrepresented Students | Elliott Hedman</title>
        <meta name="description" content="AI tutoring tools like Khanmigo assume students will ask for help. The kids who need it most never do. Why the most vulnerable learners will be the last ones these systems reach." />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Like the Help Button, Khanmigo Will Fail to Help My Underrepresented Students" />
        <meta property="og:description" content="AI tutoring tools like Khanmigo assume students will ask for help. The kids who need it most never do." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2023-07-08" />
        <meta property="article:author" content="Elliott Hedman" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Like the Help Button, Khanmigo Will Fail to Help My Underrepresented Students" />
        <meta name="twitter:description" content="AI tutoring tools assume students will ask for help. The kids who need it most never do." />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Like the Help Button, Khanmigo Will Fail to Help My Underrepresented Students",
          "description": "AI tutoring tools like Khanmigo assume students will ask for help. The kids who need it most never do.",
          "author": {
            "@type": "Person",
            "name": "Elliott Hedman",
            "url": "https://goodvibesgarage.ai"
          },
          "datePublished": "2023-07-08",
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
            type="Essay"
            date="July 8, 2023"
            author="Elliott Hedman"
            readTime="5 min read"
            title="Like the Help Button, Khanmigo Will Fail to Help My Underrepresented Students"
            subtitle="The students who need it most are the ones who will never ask."
          />

          <ArticleHero img={heroImg} imgAlt="Boys & Girls Club student working through a reading comprehension prototype on a laptop" layout="below" />

          {/* ── Intro ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                There's a help button on nearly every piece of educational software. It's almost never clicked.
              </p>
              <p className={`${styles.p} reveal`}>
                I've spent years teaching literacy at the Boys & Girls Club in Denver — a room where roughly 25% of students are reading at grade level. When I watch my students interact with educational tools, I notice the same thing every time: the students who are most behind are the ones who most avoid asking for help.
              </p>
              <p className={`${styles.p} reveal`}>
                Khanmigo is a genuinely impressive piece of technology. But it has the same fundamental design assumption baked in that every help button does: that a struggling student will voluntarily reach out.
              </p>
              <p className={`${styles.p} reveal`}>
                They won't.
              </p>
            </div>
          </div>

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          {/* ── Why help-seeking fails ── */}
          <ArticleSectionHeading>Why the Students Who Need Help Don't Ask for It</ArticleSectionHeading>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                Help-seeking isn't a simple behavior. It requires three things happening at the same time: a student who wants to learn, who believes they can improve, and who trusts that reaching out is safe. For students who've spent years being told — implicitly or explicitly — that they're behind, that combination is rare.
              </p>
              <p className={`${styles.p} reveal`}>
                Many of my students have learned to treat school like a guessing game. The goal isn't to understand — it's to survive the question without drawing attention. Clicking "ask Khanmigo" is the opposite of that. It's flagging yourself as someone who doesn't know. That takes a kind of confidence most struggling learners haven't built yet.
              </p>
            </div>
          </div>

          <div className={styles.container}>
            <ArticleCallout label="The Core Problem" variant="insight">
              <p>AI tutoring tools like Khanmigo are powerful — for students who are already internally motivated with strong self-efficacy. For the students most in need, the tool waits for a reach that never comes.</p>
            </ArticleCallout>
          </div>

          {/* ── Three prerequisites ── */}
          <ArticleSectionHeading>Three Prerequisites for Help-Seeking</ArticleSectionHeading>

          <div className={styles.container}>
            <ArticleTimeline>
              <ArticleTimelineItem step="01" heading="A Desire to Learn">
                <p className={styles.p}>This sounds obvious, but it's not guaranteed. Students who've failed repeatedly often protect themselves by deciding the goal isn't worth it. You can't ask for help toward something you've already given up on.</p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="02" heading="Confidence to Acknowledge a Gap">
                <p className={styles.p}>Admitting you don't know something requires believing you're capable of eventually knowing it. Students with low self-efficacy often can't make that leap. Not knowing feels permanent, not fixable.</p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="03" heading="Trust That Asking Is Safe">
                <p className={styles.p}>In a classroom where asking questions signals weakness, or where past questions weren't met with care, the rational move is silence. Many of my students have learned that silence is safer.</p>
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          {/* ── What would actually help ── */}
          <ArticleSectionHeading>What Would Actually Help</ArticleSectionHeading>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                The fix isn't to make Khanmigo more persuasive. It's to change what we're asking students to do.
              </p>
              <p className={`${styles.p} reveal`}>
                Two directions I've found more promising:
              </p>
              <p className={`${styles.p} reveal`}>
                <strong>Redesign the assignment itself.</strong> When the task has real stakes — competition, peer visibility, something the student actually wants — motivation doesn't need to be manufactured. You don't need to convince a kid to ask for help when they're genuinely trying to win.
              </p>
              <p className={`${styles.p} reveal`}>
                <strong>Teach the learning process before the content.</strong> Self-efficacy isn't a personality trait — it's a skill. Students who understand how learning works, who have experienced the feeling of getting something right after struggling, are far more likely to seek help. The emotional experience of learning has to come before the willingness to ask.
              </p>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                I believe AI tutoring will be transformative for education. But "transformative for education" and "reaching underrepresented students" are not the same promise — and right now, the gap between them is being obscured by the excitement of the technology.
              </p>
              <p className={`${styles.p} reveal`}>
                The students in my classroom deserve tools designed around how they actually behave, not how we wish they would.
              </p>
            </div>
          </div>

          <ArticleClosing>
            Building for the students who already ask for help is not equity. It's just optimization.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to someone designing or deploying AI in schools."
          />

        </article>
      </main>

      <Footer />
    </>
  )
}
