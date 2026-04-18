import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHeader,
  ArticleHero,
  ArticleImage,
  ArticleProjectMeta,
  ArticleStatRow,
  ArticleStat,
  ArticleSectionHeading,
  ArticleCallout,
  ArticleTimeline,
  ArticleTimelineItem,
  ArticlePullQuote,
  ArticleClosing,
  ArticleCta,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'
import heroImg from '../assets/Images/empowering-parents/header.webp'
import brainstormingImg from '../assets/Images/empowering-parents/brainstorming.webp'
import appFlowImg from '../assets/Images/empowering-parents/appflow.webp'
import testingImg from '../assets/Images/empowering-parents/testing.webp'
import resultsImg from '../assets/Images/empowering-parents/results.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/empowering-parents'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-empowering-parents.jpg'

export default function EmpoweringParentsPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>Empowering Parents as Teachers | Elliott Hedman</title>
        <meta name="description" content="Ask a mother if she wants to help her child read and she'll say yes. Give her a teaching app and it will likely never be used. What we learned building for Dreamer parents." />
        <link rel="canonical" href={CANONICAL_URL} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Empowering Parents as Teachers" />
        <meta property="og:description" content="Ask a mother if she wants to help her child read and she'll say yes. Give her a teaching app and it will likely never be used." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2019-01-01" />
        <meta property="article:author" content="Elliott Hedman" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Empowering Parents as Teachers" />
        <meta name="twitter:description" content="What we learned building a literacy app for Dreamer parents — the majority who want to help but abandon when obstacles arise." />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Empowering Parents as Teachers",
          "description": "Ask a mother if she wants to help her child read and she'll say yes. Give her a teaching app and it will likely never be used.",
          "author": { "@type": "Person", "name": "Elliott Hedman", "url": "https://goodvibesgarage.ai" },
          "datePublished": "2019-01-01",
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
            date="2019"
            author="Elliott Hedman"
            readTime="5 min read"
            title="Empowering Parents as Teachers"
            subtitle="The app worked. The parents didn't use it. Those are two different problems."
          />

          <ArticleHero img={heroImg} imgAlt="Toddlers Can Read app prototype interface" layout="below" />

          <ArticleProjectMeta items={[
            { label: 'Client',  value: 'Toddlers Can Read' },
            { label: 'Sector',  value: 'App Design, Education, Parents, Motivation' },
            { label: 'My Role', value: 'Design and Development Lead' },
            { label: 'Scope',   value: 'Early literacy app for parent-led instruction' },
          ]} />

          {/* ── Intro ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                Spencer had built a video library that could genuinely teach toddlers to read. His problem wasn't the content. It was that parents weren't getting far enough in to use it.
              </p>
              <p className={`${styles.p} reveal`}>
                Two-hour video prerequisites. Activities that told parents what to do but not how it should look. Badges tied to goals parents didn't have. Every friction point was small on its own. Together, they were enough to make someone put the phone down.
              </p>
              <p className={`${styles.p} reveal`}>
                We prototyped a new app in a single day, shipped it to parents with no instructions, and watched what happened.
              </p>
            </div>
          </div>

          <ArticlePullQuote>
            "Ask a mother if she wants to help her child read, and she will most likely say yes. Give a teaching app to a mother, and it will likely never be used."
          </ArticlePullQuote>

          {/* ── Stats ── */}
          <div className={styles.container}>
            <ArticleStatRow>
              <ArticleStat value="1 day" label="to first prototype" note="built, shipped, and tested" />
              <ArticleStat value="2" label="user profiles discovered" note="Planners and Dreamers" />
              <ArticleStat value="6" label="design principles" note="for the majority Dreamer parent" />
            </ArticleStatRow>
          </div>

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          <ArticleSectionHeading>What the Research Found</ArticleSectionHeading>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                At-home testing surfaced something we didn't expect: parents aren't a single type. Two distinct profiles emerged almost immediately.
              </p>
              <p className={`${styles.p} reveal`}>
                <strong>Planners</strong> are highly organized. They research before acting, want comprehensive information, and will work through onboarding flows carefully. They're a minority — but they're the user most apps are unconsciously designed for.
              </p>
              <p className={`${styles.p} reveal`}>
                <strong>Dreamers</strong> are the majority. They genuinely want to help their child. They have the desire. But when the first obstacle appears — a long video, an unclear activity, a decision they weren't expecting — they put it down. Not because they stopped caring. Because the path got too hard.
              </p>
            </div>
          </div>

          {/* ── Design principles ── */}
          <ArticleSectionHeading>Six Principles for Dreamer Parents</ArticleSectionHeading>

          <div className={styles.container}>
            <ArticleTimeline>
              <ArticleImage src={brainstormingImg} alt="Brainstorming session with the Toddlers Can Read team" caption="Collaborative brainstorming session that produced Prototype #1." />

              <ArticleTimelineItem step="01" heading="Drips, Not Firehoses">
                <p className={styles.p}>
                  Dreamers don't fail because they lack motivation. They fail because the opening ask is too large. Bite-sized, sequential steps — one at a time, in context — are far more likely to get completed than comprehensive guides. Don't give parents everything they need to know. Give them what they need right now.
                </p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="02" heading="Soft Starts">
                <p className={styles.p}>
                  Starting with reading instruction puts the bar too high before trust is established. We began with non-academic activities — animal sounds, simple games — to build routine and confidence before any literacy content appeared. Get the habit first. The content follows naturally.
                </p>
              </ArticleTimelineItem>
              <ArticleImage src={appFlowImg} alt="App flow diagram showing the prototype structure" caption="The prototype app flow, built in a day for at-home testing." />

              <ArticleTimelineItem step="03" heading="Eliminate Parent Choice">
                <p className={styles.p}>
                  Multiple options create decision paralysis. Every time a parent has to choose, there's a chance they choose nothing. Predetermined daily activities — "here's what to do today" — removed that friction entirely. The best designs for Dreamers make the next step obvious and singular.
                </p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="04" heading="Hackable Tasks">
                <p className={styles.p}>
                  Parents know their child. If an activity clearly won't work — wrong mood, wrong context, child is tired — the parent should be able to adapt it without feeling like they've broken the program. Guided defaults with built-in flexibility prevent the abandonment that happens when rigid systems meet messy real life.
                </p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="05" heading="Leave AI in the Background">
                <p className={styles.p}>
                  FAQ sections went unused. Parents didn't want to ask questions — they wanted recommendations. Algorithmic suggestions that required no active input from the parent outperformed any interactive help system we tested. The less visible the intelligence, the more trusted it was.
                </p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="06" heading="Mandatory Fun">
                <p className={styles.p}>
                  Parent engagement tracks child engagement. When a child is excited, the parent keeps going. When a child is bored or frustrated, the parent puts it down. The app's success depended on the child experience as much as the parent experience. Fun wasn't optional — it was the mechanism.
                </p>
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          <ArticleImage src={testingImg} alt="At-home testing session with parents and toddlers" caption="At-home testing — prototypes distributed without instructions to surface genuine pain points." />

          <div className={styles.container}>
            <ArticleCallout label="The Core Design Insight" variant="insight">
              <p>Effective parent-empowered literacy tools don't require parents to become teachers. They require removing the expertise, planning, and entertainment burdens entirely — so parents can feel confident doing something they already want to do.</p>
            </ArticleCallout>
          </div>

          <ArticleClosing>
            The desire was always there. The design just had to stop getting in the way.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to someone building tools for parents or caregivers."
          />

        </article>
      </main>

      <Footer />
    </>
  )
}
