import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHeader,
  ArticleHero,
  ArticleImage,
  ArticleImageGrid,
  ArticleProjectMeta,
  ArticleSectionHeading,
  ArticleStatRow,
  ArticleStat,
  ArticleCallout,
  ArticleTimeline,
  ArticleTimelineItem,
  ArticleClosing,
  ArticleCta,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'
import legoHero from '../assets/Images/lego-technic/lego1.webp'
import legoChild from '../assets/Images/lego-technic/lego2.webp'
import legoSensor from '../assets/Images/lego-technic/lego3.webp'
import legoSlide1 from '../assets/Images/lego-technic/legoslide1.webp'
import legoSlide2 from '../assets/Images/lego-technic/legoslide2.webp'
import legoSlide3 from '../assets/Images/lego-technic/legoslide3.webp'
import legoSlide5 from '../assets/Images/lego-technic/legoslide5.webp'
import legoSlide7 from '../assets/Images/lego-technic/legoslide7.webp'
import legoSlide8 from '../assets/Images/lego-technic/legoslide8.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/lego-technic'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-lego-technic.jpg'

export default function LegoTechnicPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>LEGO Technic: When Better Instructions Made Everything Worse | Elliott Hedman</title>
        <meta name="description" content="LEGO Technic redesigned their digital building instructions. The animations were cleaner, the steps were clearer — and kids were more stressed than ever. What stress sensors revealed." />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="LEGO Technic: When Better Instructions Made Everything Worse" />
        <meta property="og:description" content="LEGO Technic redesigned their digital building instructions. The animations were cleaner — and kids were more stressed than ever. What stress sensors revealed." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2022-01-01" />
        <meta property="article:author" content="Elliott Hedman" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LEGO Technic: When Better Instructions Made Everything Worse" />
        <meta name="twitter:description" content="Cleaner animations, more stress. What sensors revealed about how kids actually experience building instructions." />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "LEGO Technic: When Better Instructions Made Everything Worse",
          "description": "LEGO Technic redesigned their digital building instructions. The animations were cleaner, the steps were clearer — and kids were more stressed than ever.",
          "author": {
            "@type": "Person",
            "name": "Elliott Hedman",
            "url": "https://goodvibesgarage.ai"
          },
          "datePublished": "2022-01-01",
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
            date="2022"
            author="Elliott Hedman"
            readTime="5 min read"
            title="LEGO Technic: When Better Instructions Made Everything Worse"
            subtitle="The animations were cleaner. The steps were clearer. The kids were more stressed than ever."
          />

          {/* ── Hero image ── */}
          <ArticleHero
            img={legoHero}
            imgAlt="Child using LEGO Technic digital building instructions on a tablet"
            layout="below"
          />

          {/* ── Project metadata ── */}
          <ArticleProjectMeta items={[
            { label: 'Client',    value: 'The LEGO Group' },
            { label: 'Sector',    value: 'Toys, Play, Digital UX' },
            { label: 'My Role',   value: 'Research Lead' },
            { label: 'Method',    value: '10 children, MOXO stress sensors' },
          ]} />

          {/* ── Intro ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                LEGO Technic sets are complicated. Hundreds of pieces, intricate gear systems, digital instructions designed to guide you through every step. The LEGO team had put real craft into making those instructions intuitive — smooth 3D rotations, animated piece placements, everything you'd expect from a world-class product team.
              </p>
              <p className={`${styles.p} reveal`}>
                We strapped stress sensors onto 10 kids and watched them build.
              </p>
              <p className={`${styles.p} reveal`}>
                The sensors told a different story than the team expected.
              </p>
            </div>
          </div>

          {/* ── Stats ── */}
          <div className={styles.container}>
            <ArticleStatRow>
              <ArticleStat value="10" label="children observed" note="MOXO stress sensors + observation" />
              <ArticleStat value="3" label="core design insights" note="each contradicted the original assumptions" />
              <ArticleStat value="0" label="animations in final design" note="removed entirely based on sensor data" />
            </ArticleStatRow>
          </div>

          {/* ── Child + sensor photos ── */}
          <ArticleImageGrid columns={2}>
            <ArticleImage src={legoChild} alt="Child building LEGO Technic set with stress sensor wristband" layout="grid" />
            <ArticleImage src={legoSensor} alt="MOXO stress sensor worn during LEGO building session" layout="grid" />
          </ArticleImageGrid>

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          {/* ── Findings ── */}
          <ArticleSectionHeading>What the Sensors Revealed</ArticleSectionHeading>

          <div className={styles.container}>
            <ArticleTimeline>
              <ArticleTimelineItem step="01" heading="Animations Were Making Kids More Stressed, Not Less">
                <p className={styles.p}>
                  The 3D rotation animations — the ones the team was proudest of — were spiking stress every time they played. Kids couldn't follow the rapid movement, missed which piece went where, and started arbitrarily rotating the model when confused. The animation designed to clarify was the thing creating the confusion. The fix was counterintuitive: remove the animations entirely. Static, clear, frozen views outperformed every animated variation we tested.
                </p>
                <ArticleImageGrid columns={3}>
                  <ArticleImage src={legoSlide1} alt="Before: animated 3D rotation instruction step" layout="grid" />
                  <ArticleImage src={legoSlide2} alt="After: static clear instruction step" layout="grid" />
                  <ArticleImage src={legoSlide3} alt="Comparison of animation vs static instruction design" layout="grid" />
                </ArticleImageGrid>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="02" heading="Errors Needed to Be Catchable, Not Just Correctable">
                <p className={styles.p}>
                  Every complex build has mistakes. The original instructions were designed to be so clear that mistakes wouldn't happen. But they did — and when a child discovered an error three steps later, they were "lost and defeated." The fix wasn't better instructions: it was checkpoints. At key moments in the build, we added prompts asking children to verify whether a gear was turning correctly. Early detection transformed a catastrophic discovery into a manageable one.
                </p>
                <ArticleImage src={legoSlide5} alt="Checkpoint moment in LEGO building instructions verifying gear placement" layout="prose" caption="Checkpoint prompt: 'Is your gear turning?' — catching errors before they compound." />
              </ArticleTimelineItem>
              <ArticleTimelineItem step="03" heading="Parents Were the Missing Piece">
                <p className={styles.p}>
                  The original instructions were designed to be used alone. The assumption was that a child should be able to follow them independently. But the sensor data showed something the design had optimized away: when a parent was involved, kids showed measurably less stress and more capability. We redesigned the instructions to explicitly invite parental participation — not as a fallback for when things go wrong, but as a core feature of the experience.
                </p>
                <ArticleImage src={legoSlide7} alt="Stress sensor graph comparing building with parent vs. alone — lower stress with parent present" layout="prose" caption="Skin conductance data: building with a parent vs. building alone. The difference is visible in every session." />
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          {/* ── Stress data graph ── */}
          <ArticleImage src={legoSlide8} alt="Stress sensor graph annotated with child quotes — 'Help Dad, I can't finish this', 'I can't do this. Can we play a game instead?'" layout="wide" caption="Stress data annotated with children's verbal responses. Escalating frustration matched escalating skin conductance." />

          {/* ── Callout ── */}
          <div className={styles.container}>
            <ArticleCallout label="The Counterintuitive Finding" variant="insight">
              <p>A successful building experience isn't just about comprehension. It's about helping children reflect, regulate, and feel a sense of achievement. Instructions that are "clear" on paper can still generate stress in practice — and sensors catch that gap in a way user interviews rarely do.</p>
            </ArticleCallout>
          </div>

          {/* ── Closing ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                The LEGO team came in confident in their animations. The sensors disagreed. What came out of this research wasn't just a list of UI fixes — it was a different frame for what "good instructions" means.
              </p>
              <p className={`${styles.p} reveal`}>
                Good instructions don't just transfer information. They manage the emotional arc of learning something hard. They make it possible to fail without falling apart, to catch mistakes early, and to feel the pride of figuring something out.
              </p>
              <p className={`${styles.p} reveal`}>
                You can't design that arc by looking at the instructions. You have to watch someone live inside them.
              </p>
            </div>
          </div>

          <ArticleClosing>
            The best instructions don't just show what to do. They help you feel like you can.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to someone designing onboarding or step-by-step experiences."
          />

        </article>
      </main>

      <Footer />
    </>
  )
}
