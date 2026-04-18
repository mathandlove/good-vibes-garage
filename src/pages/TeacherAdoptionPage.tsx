import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHeader,
  ArticleHero,
  ArticleImage,
  ArticleImageComparison,
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
import pillarsHero from '../assets/Images/teacher-adoption/image1.webp'
import classcraftXP from '../assets/Images/teacher-adoption/image3.webp'
import classcraftOnboardAfter from '../assets/Images/teacher-adoption/image4.webp'
import classcraftStudentBefore from '../assets/Images/teacher-adoption/image5.webp'
import classcraftStudentAfter from '../assets/Images/teacher-adoption/image6.webp'
import classcraftSellBefore from '../assets/Images/teacher-adoption/image7.webp'
import classcraftSellAfter from '../assets/Images/teacher-adoption/image8.webp'
import techChasm from '../assets/Images/teacher-adoption/image9.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/teacher-adoption'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-teacher-adoption.jpg'

export default function TeacherAdoptionPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>3 Pillars of Teacher Adoption for Edtech | Elliott Hedman</title>
        <meta name="description" content="Three months of research with Classcraft revealed why teachers sign up for edtech and never use it. The problem isn't motivation — it's that the tools make the wrong things hard." />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="3 Pillars of Teacher Adoption for Edtech" />
        <meta property="og:description" content="Three months of research with Classcraft revealed why teachers sign up for edtech and never use it. The problem isn't motivation — it's that the tools make the wrong things hard." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2023-03-11" />
        <meta property="article:author" content="Elliott Hedman" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="3 Pillars of Teacher Adoption for Edtech" />
        <meta name="twitter:description" content="Why teachers sign up for edtech and never use it — and what three months of research revealed about what actually drives adoption." />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "3 Pillars of Teacher Adoption for Edtech",
          "description": "Three months of research with Classcraft revealed why teachers sign up for edtech and never use it.",
          "author": {
            "@type": "Person",
            "name": "Elliott Hedman",
            "url": "https://goodvibesgarage.ai"
          },
          "datePublished": "2023-03-11",
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
            date="March 11, 2023"
            author="Elliott Hedman"
            readTime="6 min read"
            title="3 Pillars of Teacher Adoption for Edtech"
            subtitle="Teachers aren't resistant to technology. They're resistant to complexity at the worst possible time."
          />

          {/* ── Hero ── */}
          <ArticleHero
            img={pillarsHero}
            imgAlt="Venn diagram showing the 3 Pillars of Teacher Adoption: Easy to Understand, Easy to Use, Easy to Sell"
            layout="below"
          />

          {/* ── Intro ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                One challenge that almost every edtech company faces is teacher adoption. You can sell to an administration, but ultimately, they have to sell to their teachers, and those teachers have to keep using your product.
              </p>
              <p className={`${styles.p} reveal`}>
                What determines if a teacher will adopt your product, and how do you position your solution to be easily integrated into a classroom? Classcraft had this exact question: Why do teachers sign up to learn about our software but then never show it to the front of their classroom, where they can see the power of our platform in action?
              </p>
              <p className={`${styles.p} reveal`}>
                Over three months, the Classcraft leadership team and I observed teachers trying to use Classcraft for the first time, asking for candid feedback. We then watched more teachers implement prototype software in classrooms. We iterated on that prototype over and over again, trying to figure out what would make Classcraft more accessible and adoptable. By the end of our research, we had built an introduction to Classcraft that teachers not only enjoyed but kept using after the study. Below, I describe the three pillars of teacher adoption we instilled in our prototypes.
              </p>
            </div>
          </div>

          <div className={styles.container}>
            <ArticleCallout variant="testimonial" attribution="Shawn Young, CEO of Classcraft">
              <p>Collaborating with mPath really helped us rethink how we approached user research and onboarding. Collaboration was fluid and their professionalism, positive attitude, and unwavering commitment to the process greatly contributed to our success in this project.</p>
            </ArticleCallout>
          </div>

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          {/* ── Three pillars ── */}
          <ArticleSectionHeading>The Three Pillars</ArticleSectionHeading>

          <div className={styles.container}>
            <ArticleTimeline>
              <ArticleTimelineItem step="01" heading="Easy to Understand" continueLine>
                <p className={styles.p}>
                  Here is an introductory page from the original Classcraft onboarding experience. Classcraft has a ton of knowledge about how to conduct effective behavioral management in the classroom, and they wanted teachers to be well equipped to use the software. Unfortunately, in this benevolent endeavor, many teachers became overwhelmed — so overwhelmed that they lost confidence in their own ability to use the software.
                </p>
                <p className={styles.p}>
                  In order to make your product easy to understand, you should:
                </p>
                <ul className={styles.list}>
                  <li><strong>Remove all the fat.</strong> For onboarding, we took out a majority of the features of Classcraft. We introduced them to teachers weeks later, only after they already felt comfortable using the essentials of Classcraft.</li>
                  <li><strong>Have teachers learn by doing.</strong> Today, Classcraft teachers are now quickly pointed to a dashboard, where they can practice giving points to students and see how the software works for themselves. Which leads to…</li>
                  <li><strong>Avoid too many videos and talking at teachers.</strong> While modeling works well, don't expect teachers to watch more than 2–3 minutes of explanatory videos to understand your product. If you don't think that is possible, refer to Pillar 2!</li>
                </ul>
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          <ArticleImageComparison
            beforeLabel="Original Classcraft introductory page"
            afterLabel="Today's Classcraft introductory page"
            before={{ src: classcraftXP, alt: "Original Classcraft introductory page" }}
            after={{ src: classcraftOnboardAfter, alt: "Today's Classcraft introductory page" }}
          />

          <div className={styles.container}>
            <ArticleTimeline>
              <ArticleTimelineItem step="02" heading="Easy to Use" continueLine>
                <p className={styles.p}>
                  The easiest way to teach new software is to make it so it doesn't need to be taught. Teachers are busy and don't have time to learn something new, especially something they are unsure will fit in their classrooms.
                </p>
                <p className={styles.p}>
                  The original interface required teachers to understand teams, levels, classes, HP, AP, XP, GP, plus button, minus button, powers, pledges, and elemental affinity. All of these features are useful but require so much up-front learning that they scare away all but the most tech-savvy teachers.
                </p>
                <p className={styles.p}>
                  We reduced Classcraft's initial onboarding to simply asking teachers to hit a plus button to reward experience points, which lead to student rewards (crystals). Ultimately, the software needs to be easy enough to use that teachers will feel comfortable using it in front of their students and answering the inevitable questions that come from their students.
                </p>
                <p className={styles.p}>
                  In order to make your product easier to use, you should:
                </p>
                <ul className={styles.list}>
                  <li><strong>Clearly define the core product</strong> so teachers know what they are getting into.</li>
                  <li><strong>Hand hold.</strong> Give teachers guardrails so they will not dive in too fast or use a feature incorrectly.</li>
                  <li><strong>Show how to implement in the classroom with students.</strong> Learning how to use software and how to implement software are different, and implementation is often glossed over.</li>
                  <li><strong>Make core uses front and center.</strong> Avoid requiring teachers to click around to figure out how to use your product.</li>
                  <li><strong>Encourage teachers to customize your product from the start.</strong> Most teachers need customized software to fit with their unique class structures and identities.</li>
                </ul>
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          <ArticleImageComparison
            beforeLabel="Original Student Interface"
            afterLabel="Today's Student Interface"
            before={{ src: classcraftStudentBefore, alt: "Original Classcraft student interface" }}
            after={{ src: classcraftStudentAfter, alt: "Today's Classcraft student interface" }}
          />

          <div className={styles.container}>
            <ArticleTimeline>
              <ArticleTimelineItem step="03" heading="Easy to Sell to Students" continueLine>
                <p className={styles.p}>
                  As a designer of tutorials for many edtech and retail products, the first two pillars did not surprise me. I believe the future of tutorials is not needing tutorials at all. But the third pillar caught me by surprise for the edtech space. When teachers evaluate a piece of software and whether it will be worth their time to learn, they are also asking whether their students will buy in. Teachers don't want to have to spend energy and time convincing students to buy in to optional software.
                </p>
                <p className={styles.p}>
                  When new teachers looked at the original student dashboard, they often replied with, "Is that it?" Because they didn't understand everything (Pillars 1 and 2), they were not able to appreciate why this dashboard would be so appealing to students. The CEO of Classcraft, Shawn, explained to me that kids love Classcraft from the get-go because of the in-class rewards ("I get a free homework pass? Sign me up!"). But this feature wasn't fully understood by teachers until they tried it out in the classroom.
                </p>
                <p className={styles.p}>
                  Classcraft now showcases the benefit of in-class powers while onboarding teachers. If you want teachers to feel your product will be easy to sell to students, you should:
                </p>
                <ul className={styles.list}>
                  <li><strong>Create an exciting, action-packed introduction video for students</strong> to help the teacher sell your software.</li>
                  <li><strong>When onboarding teachers, highlight why students will love the product.</strong></li>
                  <li><strong>Avoid requiring students to create accounts and log in on Day One.</strong> Setting up accounts and logins is a big ask for teachers and students. We made the entire game playable from the teacher's screen to begin with. I made my own small startup Wonder.io accessible without teacher or parent sign-in with the same pillar in mind. Having students log in after they've already bought in is easier.</li>
                </ul>
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          <ArticleImageComparison
            beforeLabel="Original Classcraft student dashboard"
            afterLabel="Today's student dashboard preview"
            before={{ src: classcraftSellBefore, alt: "Original Classcraft student dashboard" }}
            after={{ src: classcraftSellAfter, alt: "Today's student dashboard preview" }}
          />

          {/* ── Why adoption matters ── */}
          <ArticleSectionHeading>Why Teacher Adoption Is Critical for Edtech</ArticleSectionHeading>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                While all three of these pillars may seem easy to implement, most education software I've reviewed has missed these design principles. Too often, we design for our tech-savvy early adopters, but designers should be thinking about how they are going to cross the "chasm" of adopters to include all of the teachers in school, some who have been teaching the same way for 10 or more years.
              </p>
            </div>
          </div>

          {/* ── Chasm diagram ── */}
          <ArticleImage src={techChasm} alt="Geoffrey Moore's 'Crossing the Chasm' diagram showing Early Market vs Mainstream Market with the chasm between Early Adopters and Early Majority" layout="wide" caption="Most edtech is designed for Early Adopters. The challenge is crossing the chasm to the teachers who make up the mainstream market." />

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                Making easy-to-use software isn't just about increasing user numbers but also about making education solutions accessible to more students. Some classrooms I work with today don't have the privilege of an experienced teacher; others rely on a permanent sub. If we can make software that anyone can implement with minimal effort, we will decrease the barriers to accessible and high-quality education.
              </p>
              <p className={`${styles.p} reveal`}>
                Of course, there is more to making software easy to use than these three pillars. Having teacher trainers and professionals who can help with classroom implementation and coaching teachers is a wonderful boon as well. But no matter the solution, edtech designers should not trivialize how teachers will learn their software. Otherwise, teachers simply won't use your software, and I don't blame them.
              </p>
            </div>
          </div>

          <ArticleClosing>
            The secret onboarding question: will my teacher be able to sell this to their students?
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to someone building or buying edtech."
          />

          <ArticleSources>
            <li>Research conducted in partnership with Classcraft (2022–2023). Three months of classroom observation, teacher interviews, and iterative prototype testing.</li>
          </ArticleSources>

        </article>
      </main>

      <Footer />
    </>
  )
}
