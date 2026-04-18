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
  ArticleTimeline,
  ArticleTimelineItem,
  ArticleClosing,
  ArticleCta,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'
import lowesHero from '../assets/Images/lowes/lowesslide4.webp'
import lowesProto from '../assets/Images/lowes/vacuum-slide2.webp'
import lowesStore from '../assets/Images/lowes/lowesslide4b.webp'
import lowesSuction from '../assets/Images/lowes/slide5.webp'
import lowesShop from '../assets/Images/lowes/image2.webp'
import lowesVac1 from '../assets/Images/lowes/vacuum1.webp'
import lowesVac2 from '../assets/Images/lowes/vacuum2.webp'
import lowesVac3 from '../assets/Images/lowes/vacuum3.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/lowes-vacuum'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-lowes-vacuum.jpg'

export default function LowesPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>How a Tennis Ball Increased Lowe's Vacuum Sales by 9% | Elliott Hedman</title>
        <meta name="description" content="Lowe's had 14 wet-dry vacuums and customers who couldn't choose. A fake store, stress sensors, and one unexpected insight about suction led to 150+ design changes and a 9% sales lift." />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How a Tennis Ball Increased Lowe's Vacuum Sales by 9%" />
        <meta property="og:description" content="Lowe's had 14 wet-dry vacuums and customers who couldn't choose. A fake store, stress sensors, and one unexpected insight about suction." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2020-01-01" />
        <meta property="article:author" content="Elliott Hedman" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How a Tennis Ball Increased Lowe's Vacuum Sales by 9%" />
        <meta name="twitter:description" content="A fake store, stress sensors, and one unexpected insight about suction led to 150+ design changes and a 9% sales lift." />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "How a Tennis Ball Increased Lowe's Vacuum Sales by 9%",
          "description": "Lowe's had 14 wet-dry vacuums and customers who couldn't choose. A fake store, stress sensors, and one unexpected insight led to 150+ design changes and a 9% sales lift.",
          "author": {
            "@type": "Person",
            "name": "Elliott Hedman",
            "url": "https://goodvibesgarage.ai"
          },
          "datePublished": "2020-01-01",
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
            date="2020"
            author="Elliott Hedman"
            readTime="5 min read"
            title="How a Tennis Ball Increased Lowe's Vacuum Sales by 9%"
            subtitle="The problem wasn't the vacuums. It was that customers didn't feel confident enough to buy one."
          />

          {/* ── Hero image ── */}
          <ArticleHero
            img={lowesHero}
            imgAlt="Researcher demonstrating the vacuum suction station prototype at Lowe's"
            layout="below"
          />

          {/* ── Project metadata ── */}
          <ArticleProjectMeta items={[
            { label: 'Client',   value: "Lowe's" },
            { label: 'Sector',   value: 'Retail, In-Store UX' },
            { label: 'My Role',  value: 'Research Lead' },
            { label: 'Method',   value: 'Fake store prototype + MOXO sensor tracking' },
          ]} />

          {/* ── Intro ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                Lowe's came to us with a straightforward problem: wet-dry vacuums weren't selling. The displays looked fine. The products were good. But customers kept walking past.
              </p>
              <p className={`${styles.p} reveal`}>
                We built a fake store in our lab, strapped MOXO sensors onto shoppers, and watched what actually happened when someone tried to buy a vacuum.
              </p>
              <p className={`${styles.p} reveal`}>
                What we found wasn't a product problem or a pricing problem. The overarching theme in everything we observed was the same: customers didn't feel confident. They couldn't tell which vacuum was right for them. They didn't know if they were about to make a mistake. So they didn't decide.
              </p>
            </div>
          </div>

          {/* ── Stats ── */}
          <div className={styles.container}>
            <ArticleStatRow>
              <ArticleStat value="9%" label="sales increase" note="in-store randomized control test" />
              <ArticleStat value="150+" label="design suggestions" note="implemented by Lowe's" />
              <ArticleStat value="14→3" label="choice reduction" note="from 14 models to 3 clear categories" />
            </ArticleStatRow>
          </div>

          {/* ── Prototype photos ── */}
          <ArticleImageGrid columns={2}>
            <ArticleImage src={lowesProto} alt="Earliest prototype of the suction demo station — vacuum and buckets in a backyard" layout="grid" caption="The earliest suction prototype, built outside." />
            <ArticleImage src={lowesStore} alt="Fake Lowe's store prototype set up in the research lab with wood-mounted vacuums" layout="grid" caption="Fake store prototype used for in-lab testing." />
          </ArticleImageGrid>

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          <ArticleSectionHeading>Three Things That Changed</ArticleSectionHeading>

          <div className={styles.container}>
            <ArticleTimeline>
              <ArticleTimelineItem step="01" heading="Simplify the Messaging">
                <p className={styles.p}>
                  The original signage tried to describe every feature of every vacuum. Sensors showed customers scanning it and moving on — the density of information was making the decision feel harder, not easier. We replaced the feature lists with simple directional language: "Best vacuum for home use." One sentence that answered the only question customers were actually asking. We added interactive prompts — "Try me out" — to signal permission to engage. Customers who felt invited to interact were far more likely to buy.
                </p>
                <ArticleImage src={lowesShop} alt="Customer examining vacuum hose attachment at the Lowe's suction testing station" layout="prose" />
              </ArticleTimelineItem>
              <ArticleTimelineItem step="02" heading="Add Something to Touch">
                <p className={styles.p}>
                  The original display was clean. Visually, it scored reasonably well. But sensor data showed engagement flatlining. No one was touching anything. We installed a demo station with a tennis ball and loose debris — customers could pick up the vacuum and test the suction themselves. Satisfaction ratings went from 5/10 to, in the words of the Lowe's team, "the best they ever had." Watching a tennis ball get sucked across a table turns "I think this will work" into "I know this will work." Confidence through direct experience.
                </p>
                <ArticleImage src={lowesSuction} alt="Stress sensor graph showing engagement spike when customers interact with the suction station" layout="prose" caption="Skin conductance readings spike when customers physically interact with the suction demo — engagement through direct experience." />
              </ArticleTimelineItem>
              <ArticleTimelineItem step="03" heading="Reduce the Choices">
                <p className={styles.p}>
                  Fourteen vacuum models created a paradox of choice. Customers couldn't tell the difference between them, which meant choosing wrong felt equally possible on any option. We reorganized the display into three categories based on how customers actually thought about the purchase: small, medium, and large storage. Not by motor specs. Not by brand. By the mental model customers already had. Three clear options made the decision feel manageable.
                </p>
                <ArticleImageGrid columns={3}>
                  <ArticleImage src={lowesVac1} alt="Wet-dry vacuum in the Lowe's display" layout="grid" />
                  <ArticleImage src={lowesVac2} alt="Wet-dry vacuum comparison in prototype store" layout="grid" />
                  <ArticleImage src={lowesVac3} alt="Customer browsing redesigned vacuum section" layout="grid" />
                </ArticleImageGrid>
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          {/* ── Callout ── */}
          <div className={styles.container}>
            <ArticleCallout label="The Core Insight" variant="insight">
              <p>Customers weren't uninformed about vacuums. They were unconfident. The design fix wasn't to add more information — it was to give customers a way to feel certain before they committed. That's a meaningfully different problem to solve.</p>
            </ArticleCallout>
          </div>

          {/* ── Closing ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                Lowe's implemented over 150 of the design suggestions that came out of this research. The result was a 9% sales increase in an in-store randomized control test — alongside improved satisfaction and likelihood to recommend.
              </p>
              <p className={`${styles.p} reveal`}>
                The tennis ball demo is the detail I tell this story with, because it captures something true about all good design: you can't engineer confidence through better copywriting. Sometimes you have to let people touch the thing.
              </p>
            </div>
          </div>

          <ArticleClosing>
            Confidence isn't a feeling you can describe your way to. Sometimes you have to let people touch the thing.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to someone designing retail or purchase experiences."
          />

        </article>
      </main>

      <Footer />
    </>
  )
}
