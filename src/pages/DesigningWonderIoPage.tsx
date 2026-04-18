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
  ArticleClosing,
  ArticleCta,
  ArticleSources,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'

import heroImg from '../assets/Images/designing-wonder-io/slide7.webp'
import sensorChartImg from '../assets/Images/designing-wonder-io/capture.webp'
import appUiImg from '../assets/Images/designing-wonder-io/slide13.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/designing-wonder-io'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-designing-wonder-io.jpg'

export default function DesigningWonderIoPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>Five Years Building Wonder.io With the Kids Who Needed It Most | Elliott Hedman</title>
        <meta name="description" content="Over five years, 70+ versions, and hundreds of hours with Boys & Girls Club students, we built Wonder.io. What eye tracking and emotion sensors taught us about reluctant readers." />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Five Years Building Wonder.io With the Kids Who Needed It Most" />
        <meta property="og:description" content="Over five years, 70+ versions, and hundreds of hours with Boys & Girls Club students, we built Wonder.io." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2021-01-01" />
        <meta property="article:author" content="Elliott Hedman" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Five Years Building Wonder.io With the Kids Who Needed It Most" />
        <meta name="twitter:description" content="70+ versions, eye tracking, emotion sensors, and five years with the same kids — what we learned building Wonder.io." />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Five Years Building Wonder.io With the Kids Who Needed It Most",
          "description": "Over five years, 70+ versions, and hundreds of hours with Boys & Girls Club students, we built Wonder.io.",
          "author": {
            "@type": "Person",
            "name": "Elliott Hedman",
            "url": "https://goodvibesgarage.ai"
          },
          "datePublished": "2021-01-01",
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
            date="2021"
            author="Elliott Hedman"
            readTime="6 min read"
            title="Five Years Building Wonder.io With the Kids Who Needed It Most"
            subtitle="What 70 versions, eye tracking, and emotion sensors taught us about reluctant readers."
          />

          {/* ── Project metadata ── */}
          <ArticleProjectMeta items={[
            { label: 'Context',  value: 'Five years of research at Boys & Girls Club' },
            { label: 'Sector',   value: 'Education, Literacy, EdTech' },
            { label: 'My Role',  value: 'Researcher, Designer, Literacy Instructor' },
            { label: 'Outcome',  value: '3 grade-level reading improvement; international adoption' },
          ]} />

          <ArticleHero img={heroImg} imgAlt="Student wearing eye-tracking glasses at a laptop during a Wonder.io research session" layout="below" />

          {/* ── Intro ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                For five years, I taught literacy at the Boys & Girls Club in Denver. Every week, I brought in a new version of something — a different book, a different app, a different approach — and watched what happened.
              </p>
              <p className={`${styles.p} reveal`}>
                The kids I was working with were predominantly struggling readers from underrepresented backgrounds. Many had decided, somewhere along the way, that reading wasn't for them. My job wasn't just to teach reading. It was to figure out how to make them want to try again.
              </p>
              <p className={`${styles.p} reveal`}>
                Over five years and more than 70 versions, Wonder.io was the answer we built together.
              </p>
            </div>
          </div>

          {/* ── Stats ── */}
          <div className={styles.container}>
            <ArticleStatRow>
              <ArticleStat value="70+" label="versions built" note="each tested with real students" />
              <ArticleStat value="5" label="years of research" note="weekly sessions at Boys & Girls Club" />
              <ArticleStat value="3" label="grade levels" note="average reading improvement" />
            </ArticleStatRow>
          </div>

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          {/* ── What the sensors showed ── */}
          <ArticleSectionHeading>What Eye Tracking and Emotion Sensors Revealed</ArticleSectionHeading>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                Early in the research, we started using two measurement tools that changed how we understood what was happening.
              </p>
              <p className={`${styles.p} reveal`}>
                Eye tracking showed us that struggling readers would skip large sections of text — but return to questions two or three times. Questions weren't interruptions to the reading. They were the reason to read.
              </p>
              <p className={`${styles.p} reveal`}>
                Emotion sensors showed us when students were actually engaged versus just present. The data confirmed what the eye tracking suggested: answering questions correctly produced strong emotional spikes. The feedback loop mattered. Getting something right, in real time, was the experience students needed more of.
              </p>
            </div>
          </div>

          <ArticleImage src={sensorChartImg} alt="Skin conductance chart showing engagement dropping during reading and spiking sharply at questions" caption="Emotion sensor data from a student session: engagement flatlined during reading, then spiked the moment questions appeared." />

          {/* ── Design decisions ── */}
          <ArticleSectionHeading>What Got Built Into Wonder.io</ArticleSectionHeading>

          <div className={styles.container}>
            <ArticleTimeline>
              <ArticleTimelineItem step="01" heading="Questions as the Core Structure">
                <p className={styles.p}>Every story in Wonder.io is built around a central question. Students don't read and then answer — they read <em>in order to</em> answer. The inquiry drives the reading forward. This design came directly from watching eye tracking data: questions stopped skimmers cold.</p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="02" heading="Immediate, Honest Feedback">
                <p className={styles.p}>Early versions of educational apps coddled wrong answers. We went the other direction. A wrong answer in Wonder.io sounds wrong — immediate, clear feedback. But instead of discouraging students, this made them lean in. After a wrong answer, kids wanted redemption. They re-read more carefully. Failure, handled right, is a hook.</p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="03" heading="Bite-Sized Reveals">
                <p className={styles.p}>A full page of text caused early readers to shut down before starting. We shifted to revealing one or two sentences at a time. Students were routinely shocked to learn they'd just finished a 100-page book. Breaking something intimidating into small pieces makes it feel possible.</p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="04" heading="70+ Iterations Before Shipping Widely">
                <p className={styles.p}>We didn't decide what the app should look like and then build it. We built something, watched kids use it, threw out what didn't work, and tried again the following week. This happened more than 70 times. The students who tested it weren't a focus group — they were co-designers. The app exists in its current form because of what they showed us.</p>
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          <ArticleImage src={appUiImg} alt="Four Wonder.io app screens showing The Big Question, bite-sized text reveals, and a comprehension question" caption="The full reading arc in four screens: a question to drive intent, text revealed a sentence at a time, story in context, answer when ready." />

          {/* ── Callout ── */}
          <div className={styles.container}>
            <ArticleCallout label="Key Insight" variant="insight">
              <p>Students weren't skipping text because they were lazy. They were skipping text because the text wasn't giving them a reason to read it. The moment we embedded a question they genuinely needed the text to answer, everything changed.</p>
            </ArticleCallout>
          </div>

          {/* ── Outcome ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                Students using Wonder.io showed an average three-grade-level reading improvement. The app is now used in classrooms internationally. Parents and teachers email regularly to describe how it's changed their students' relationship with reading.
              </p>
              <p className={`${styles.p} reveal`}>
                None of that came from a hypothesis we had in year one. It came from five years of watching kids tell us, through their behavior, what they actually needed.
              </p>
            </div>
          </div>

          <ArticleClosing>
            The kids weren't broken. The books were.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to a teacher, parent, or literacy researcher you know."
          />

          <ArticleSources sources={[
            {
              label: 'Motivating Struggling Readers to Mentally Show Up with Wonder Stories (ELO Conference, 2021)',
              href: 'https://www.buildempathy.com/s/HedmanELO2021.pdf',
            },
            {
              label: 'Wonder.io — Free reading app for students',
              href: 'https://wonder.io',
            },
          ]} />

        </article>
      </main>

      <Footer />
    </>
  )
}
