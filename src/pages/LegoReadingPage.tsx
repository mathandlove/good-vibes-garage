import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHeader,
  ArticleCard,
  ArticleSectionHeading,
  ArticleClosing,
  ArticleCta,
  ArticleSources,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'

import legoBooks from '../assets/Images/lego-reading/LEGOBooks.webp'
import prototypes from '../assets/Images/lego-reading/legostoryPrototypes.webp'
import book2 from '../assets/Images/lego-reading/book2.webp'
import book5 from '../assets/Images/lego-reading/book5.webp'
import book6 from '../assets/Images/lego-reading/book6.webp'
import comic from '../assets/Images/lego-reading/comic.webp'
import paul from '../assets/Images/lego-reading/paul.webp'
import asher from '../assets/Images/lego-reading/asher.webp'
import product from '../assets/Images/lego-reading/product.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/lego-reading'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-lego-reading.jpg'

export default function LegoReadingPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>Reinventing the Book with the LEGO Group | Elliott Hedman</title>
        <meta name="description" content="Kids were buying LEGO books for the bricks — not the words. A year-long study with Denver Public Schools revealed what actually makes a struggling reader pick up a book." />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Reinventing the Book with the LEGO Group" />
        <meta property="og:description" content="Kids were buying LEGO books for the bricks — not the words. A year-long study with Denver Public Schools revealed what actually makes a struggling reader pick up a book." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2023-01-01" />
        <meta property="article:author" content="Elliott Hedman" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reinventing the Book with the LEGO Group" />
        <meta name="twitter:description" content="Kids were buying LEGO books for the bricks — not the words. A year-long design study revealed what actually makes struggling readers engage." />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Reinventing the Book with the LEGO Group",
          "description": "Kids were buying LEGO books for the bricks — not the words. A year-long study with Denver Public Schools revealed what actually makes a struggling reader pick up a book.",
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
            readTime="6 min read"
            title="Reinventing the Book with the LEGO Group"
            subtitle="How can we enhance playing with LEGO with a book?"
          />

          {/* ── Project metadata ── */}
          <div className={styles.container}>
            <dl className={`${styles.projectMeta} reveal`}>
              <div className={styles.projectMetaItem}>
                <dt className={styles.projectMetaLabel}>Client</dt>
                <dd className={styles.projectMetaValue}>Publishing within The LEGO Group</dd>
              </div>
              <div className={styles.projectMetaItem}>
                <dt className={styles.projectMetaLabel}>Sector</dt>
                <dd className={styles.projectMetaValue}>Toys, Play, Education, Publishing</dd>
              </div>
              <div className={styles.projectMetaItem}>
                <dt className={styles.projectMetaLabel}>My Role</dt>
                <dd className={styles.projectMetaValue}>Design Director and Research Lead</dd>
              </div>
              <div className={styles.projectMetaItem}>
                <dt className={styles.projectMetaLabel}>Scope</dt>
                <dd className={styles.projectMetaValue}>I managed 10 designers over 1 Year</dd>
              </div>
            </dl>
          </div>

          {/* ── Intro prose ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                The LEGO Publishing Group had a question: How can we enhance LEGO play with a book? The LEGO Group makes many books, but children often buy the books simply for the bricks. Our early tests showed that the books were not being read. In this yearlong study, we looked at how play could motivate students to read and then pivoted toward how reading can improve play.
              </p>
              <p className={`${styles.p} reveal`}>
                All 30+ iterations of our reading prototype can be viewed <a href="https://www.buildempathy.com/empowerplay" target="_blank" rel="noopener noreferrer">here</a>.
              </p>
            </div>
          </div>

          {/* ── Video ── */}
          <div className={styles.container}>
            <div className={`${styles.videoWrap} reveal`}>
              <iframe
                src="https://www.youtube.com/embed/ZHrL79BMcpg"
                title="LEGO Reading research presentation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* ── Ornamental divider ── */}
          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          {/* ── Cards ── */}
          <div className={styles.cardsContainer}>

            <ArticleCard
              img={legoBooks}
              imgAlt="A spread of LEGO books on a table"
              heading="The Problem: Books as Brick Delivery Vehicles"
            >
              <p className={styles.p}>
                LEGO's publishing line was commercially successful, but something wasn't working. When we observed kids with the books, they went straight for the brick inserts. The stories, instructions, and narrative content were largely ignored.
              </p>
              <p className={styles.p}>
                The question wasn't just "how do we get kids to read?" It was: <strong>why would reading ever compete with playing?</strong>
              </p>
            </ArticleCard>

            <ArticleCard
              img={prototypes}
              imgAlt="Grid of prototype books tested throughout the study"
              heading="Prototyping in Denver Public Schools"
              reverse
            >
              <p className={styles.p}>
                To build a product that motivated children to read, we began by testing struggling readers. We recruited second- to fourth-grade students who disliked reading to try our new reading prototypes.
              </p>
              <p className={styles.p}>
                We then co-created with these struggling students to experiment with how reading and play could be combined over 11 different iterations. In each iteration, we wrote, built, and printed a book. We gave the book to our reluctant readers, being careful never to tell them they had to read.
              </p>
              <p className={styles.p}>
                We observed how they used the book, including using eye tracking and skin conductance sensors. We then asked the students what they would do in the next iteration to make the reading part of their play more desirable.
              </p>
            </ArticleCard>

            <ArticleSectionHeading>What We Learned From the Prototypes</ArticleSectionHeading>

            <ArticleCard
              img={book2}
              imgAlt="Prototype 1 — Escape the Volcano book directing dinosaur play"
              heading="Prototype #1: Books that Direct Play"
              number="01"
            >
              <p className={styles.p}>
                In "Escape the Volcano," children were instructed to place dinosaurs on the table in a clear way to tell the story. Instead, readers opted to just play with the dinosaurs.
              </p>
              <p className={styles.p}>
                Results: Students never opened the book.
              </p>
              <blockquote className={styles.blockquote}>
                "If students don't have a reason to read, they will choose to only play."
              </blockquote>
            </ArticleCard>

            <ArticleCard
              img={book5}
              imgAlt="Prototype 5 — Play-Doh castle with instructions inside the book"
              heading="Prototype #5: Books Contain Instructions"
              reverse
              number="02"
            >
              <p className={styles.p}>
                We took out the instructions for a Play-Doh Castle so the students would have to read the book to build the castle. Rather than reading, most of the students opted to just make their own creation (e.g. a bakery). However, one student read the entire book because he wanted to make the castle (his goal was to be an architect).
              </p>
              <p className={styles.p}>
                Results: Most students still did not read the book.
              </p>
              <blockquote className={styles.blockquote}>
                "Students will shift their play behavior in an effort to avoid reading."
              </blockquote>
            </ArticleCard>

            <ArticleCard
              img={book6}
              imgAlt="Prototype 7 — 72-page slime-making book where reading unlocks the recipe"
              heading="Prototype #7: Play That Requires Reading"
              number="03"
            >
              <p className={styles.p}>
                We created a 72-page story about how to make slime. All the students wanted to create the slime, so they read the entire book.
              </p>
              <p className={styles.p}>
                Results: Every student read the book.
              </p>
              <blockquote className={styles.blockquote}>
                "If reading is essential to play, the book will be valued and read."
              </blockquote>
            </ArticleCard>

            <ArticleCard heading="">
              <p className={styles.p}>
                Our discovery that the reading had to be a value-add to play meant that students would not want a book while they built a LEGO set — there was no need for it.
              </p>
              <p className={styles.p}>
                We iterated over and over again with creative twists around building — books that you read while building, books that allowed for building customization, and books that challenged readers to creatively build. In each case, students chose to just build instead of reading.
              </p>
            </ArticleCard>

            <ArticleSectionHeading>The Pivot: Asher and the Missing Story</ArticleSectionHeading>

            <ArticleCard
              img={asher}
              imgAlt="Asher, a student observed during the study"
              heading="One Kid Named Asher Changed Everything"
              reverse
            >
              <blockquote className={styles.blockquote}>
                "Building a LEGO set is more fun without reading." But then I made a mistake. I left the test books in a previous house and had to leave our student subject alone with their new LEGO sets for an hour.
              </blockquote>
              <p className={styles.p}>
                When I returned, Asher and his brothers were playing video games. The LEGO sets were shelved as soon as they finished building the models. Asher did not know how to storytell with his new LEGO set.
              </p>
              <blockquote className={styles.blockquote}>
                "Children don't want books to help them with BUILDING. They want help with STORYTELLING."
              </blockquote>
              <p className={styles.p}>
                For two weeks, the LEGO Publishing team came to Colorado and we built and tested new ways to inspire children to storytell with their models. We found that children wanted to know more about the characters: What are their names, their hobbies, their fears and goals?
              </p>
            </ArticleCard>

            <ArticleCard
              img={paul}
              imgAlt="Character illustration of Paul from the LEGO story book"
              heading="Five Design Principles"
            >
              <p className={styles.p}>
                We built a successful reading product. Children who typically build and shelve their LEGO sets continued to play and storytell with their models. Below are the five design principles that guided LEGO Publishing's product design for empowering storytelling play.
              </p>
              <ol className={styles.list}>
                <li><strong>Provide a Meaningful Background to Inspire Play</strong> — Include character profiles and short stories about the toys or characters in the book to give children context for their play.</li>
                <li><strong>Ensure Connections to Toys</strong> — Ensure that the story in the book can be imitated with the child's own toys, as children often prefer to play and iterate on what they have physically.</li>
                <li><strong>Use Open-Ended Prompts for Storytelling</strong> — Include open-ended questions and prompts, like "What kind of environment would the character live in?" throughout the book to stimulate children's imaginations and storytelling.</li>
                <li><strong>Promote Digital Documentation</strong> — Explore how children can use cameras to document, self-reflect, and retell stories by incorporating prompts for them to play with their toys and take pictures.</li>
                <li><strong>Encourage Social Interactions</strong> — Encourage reading and play sessions that involve adults, siblings, or peers, as social interactions during play enrich the experience and promote language development.</li>
              </ol>
            </ArticleCard>

            <ArticleCard
              img={comic}
              imgAlt="Comic-style panels from the final Play Stories book"
              heading="Results & Publication"
              reverse
            >
              <p className={styles.p}>
                The LEGO Group successfully published storytelling books that were well received by audiences.
              </p>
              <p className={styles.p}>
                Play Stories can be purchased <a href="https://www.lego.com" target="_blank" rel="noopener noreferrer">here</a>.
              </p>
              <p className={styles.p}>
                Additionally, the LEGO Foundation and ISTE helped publish an article about how reading enhances storytelling play: <a href="https://www.learningthroughplay.com" target="_blank" rel="noopener noreferrer">Learning Through Play</a>.
              </p>
            </ArticleCard>

            <ArticleCard
              img={product}
              imgAlt="LEGO Play Stories product #5007945"
              heading="Final Vision"
            >
              <p className={styles.p}>
                Young readers love books because reading helps them with storytelling. We see a future where every toy is supplemented with a book that helps tell the character's stories and enhances storytelling play.
              </p>
            </ArticleCard>

          </div>

          {/* ── Closing prose ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <h2 className={`${styles.h2} reveal`}>The Bigger Lesson</h2>
              <p className={`${styles.p} reveal`}>
                The instinct in educational product design is to make learning unavoidable — to hide the medicine in the food. But kids are remarkably good at detecting when they're being tricked into something.
              </p>
              <p className={`${styles.p} reveal`}>
                What actually worked was making reading genuinely useful. Not as a barrier to pass, not as a vehicle for instruction, but as the thing that unlocks a richer play experience.
              </p>
              <p className={`${styles.p} reveal`}>
                We see a future where every toy is supplemented with a book that helps tell the character's stories — and makes the play that follows deeper, stranger, and more alive.
              </p>
            </div>
          </div>

          <ArticleClosing>
            Young readers love books because reading helps them with storytelling. Give them a world worth playing in.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to a teacher, designer, or publisher you know."
          />

          <ArticleSources>
            <li>LEGO Foundation & ISTE. <em>Learning Through Play: How Reading Can Be More Playful.</em> learningthroughplay.com</li>
            <li>LEGO Play Stories. Product #5007945. lego.com</li>
            <li>Hedman, E. Full prototype documentation: buildempathy.com/empowerplay</li>
          </ArticleSources>

        </article>
      </main>

      <Footer />
    </>
  )
}
