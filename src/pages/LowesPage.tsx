import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHero,
  ArticleImage,
  ArticleImageGrid,
  ArticleProjectMeta,
  ArticleStatRow,
  ArticleStat,
  ArticleSectionHeading,
  ArticleTimeline,
  ArticleTimelineItem,
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

          {/* ── Hero image ── */}
          <ArticleHero
            img={lowesHero}
            imgAlt="Researcher demonstrating the vacuum suction station prototype at Lowe's"
            layout="below"
            title="How a Tennis Ball Increased Lowe's Vacuum Sales by 9%"
            subtitle="The problem wasn't the vacuums. It was that customers didn't feel confident enough to buy one."
            type="Case Study"
            date="2020"
            author="Elliott Hedman"
            readTime="5 min read"
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
                Lowe's hired mPath to reinvent the experience of buying a wet-dry vacuum. mPath conducted diagnostic research and emototyping to understand the current experience and develop a new approach that increased purchases, customer retention, and value.
              </p>
              <p className={`${styles.p} reveal`}>
                The overarching theme in our design work was that shoppers were not feeling confident that they were making the right choice in their purchases.
              </p>
              <p className={`${styles.p} reveal`}>
                We built a fake vacuum store and had shoppers visit in the morning, making changes in the afternoon.
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
              <ArticleTimelineItem step="01" heading="Simplify Messaging">
                <p className={styles.p}>
                  Boxes and signs had many unorganized messages and information. Shoppers were so overwhelmed they couldn't read any of it, let alone stop to touch.
                </p>
                <p className={styles.p}>
                  The number-one question we identified from new shoppers was "Which one should I use at home?" We placed a label above boxes and displays: "Best vacuum for home use." We also placed a large, red, pop-up arrow next to the vacuum, saying "Try me out," achieving our primary goal of getting shoppers to touch the products.
                </p>
                <ArticleImage src={lowesShop} alt="Customer examining vacuum hose attachment at the Lowe's suction testing station" layout="prose" />
              </ArticleTimelineItem>
              <ArticleTimelineItem step="02" heading="Add Interaction">
                <p className={styles.p}>
                  We addressed what people originally asked for: professional design, simple messaging, accessible products, and differentiable choices. After implementing all of these features, the space was still only rated 5/10.
                </p>
                <p className={styles.p}>
                  We noticed that most shoppers subconsciously put their hands on every vacuum to feel the suction, but all the suctions felt the same. We installed a tube with tennis balls to help customers visualize the suction; they rated the experience as the best they ever had at Lowe's.
                </p>
                <p className={styles.p}>
                  Over the weekend, we experimented with suction physics to see how we could better visualize horsepower.
                </p>
                <ArticleImage src={lowesSuction} alt="Stress sensor graph showing engagement spike when customers interact with the suction station" layout="prose" caption="Skin conductance readings spike when customers physically interact with the suction demo — engagement through direct experience." />
              </ArticleTimelineItem>
              <ArticleTimelineItem step="03" heading="Simplify Choices">
                <p className={styles.p}>
                  Interviewed shoppers were expecting one wet/dry vacuum. Instead, they had to evaluate and choose between 14 different options. They could not differentiate between these options.
                </p>
                <p className={styles.p}>
                  We found that shoppers differentiated vacuums based on their storage size: small, medium, and large. They expected all vacuums to have strong suctions and similar accessories. For wet-dry vacuums, they tend to be indifferent to the brand.
                </p>
                <p className={styles.p}>
                  If you visit the Lowe's store today, you can see the tennis ball suction station ready for play.
                </p>
                <ArticleImageGrid columns={3}>
                  <ArticleImage src={lowesVac1} alt="Wet-dry vacuum in the Lowe's display" layout="grid" />
                  <ArticleImage src={lowesVac2} alt="Wet-dry vacuum comparison in prototype store" layout="grid" />
                  <ArticleImage src={lowesVac3} alt="Customer browsing redesigned vacuum section" layout="grid" />
                </ArticleImageGrid>
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          {/* ── Closing ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                Lowe's implemented over 150 of mPath's design suggestions and conducted an in-store, randomized control test. According to the results, mPath helped Lowe's increase their sales by over 9% and increase customer satisfaction and promotion.
              </p>
            </div>
          </div>

          <ArticleCta
            sharePrompt="If this landed, forward it to someone designing retail or purchase experiences."
          />

        </article>
      </main>

      <Footer />
    </>
  )
}
