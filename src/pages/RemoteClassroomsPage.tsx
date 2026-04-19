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
  ArticleClosing,
  ArticleCta,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'

import youtubeImg from '../assets/Images/remote-classrooms/youtube.webp'
import confusedImg from '../assets/Images/remote-classrooms/confused.webp'
import momImg from '../assets/Images/remote-classrooms/mom.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/remote-classrooms'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-remote-classrooms.jpg'

export default function RemoteClassroomsPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>The 5 Reasons Remote Classrooms Fail | Elliott Hedman</title>
        <meta name="description" content="Four years of researching how kids in Title 1 classes use online learning. The structural reasons why remote education breaks down — and why it's not the teacher's fault." />
        <link rel="canonical" href={CANONICAL_URL} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="The 5 Reasons Remote Classrooms Fail" />
        <meta property="og:description" content="Four years of researching how kids in Title 1 classes use online learning. The structural reasons why remote education breaks down." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2020-03-16" />
        <meta property="article:author" content="Elliott Hedman" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The 5 Reasons Remote Classrooms Fail" />
        <meta name="twitter:description" content="Four years of researching how kids in Title 1 classes use online learning. The structural reasons why remote education breaks down." />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "The 5 Reasons Remote Classrooms Fail",
          "description": "Four years of researching how kids in Title 1 classes use online learning. The structural reasons why remote education breaks down — and why it's not the teacher's fault.",
          "author": {
            "@type": "Person",
            "name": "Elliott Hedman",
            "url": "https://goodvibesgarage.ai"
          },
          "datePublished": "2020-03-16",
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
            img={youtubeImg}
            imgAlt="Child watching YouTube instead of doing schoolwork"
            layout="below"
            title="The 5 Reasons Remote Classrooms Fail"
            subtitle="What four years of research with Title 1 students reveals about online learning."
            type="Essay"
            date="March 16, 2020"
            author="Elliott Hedman"
            readTime="5 min read"
          />

          {/* ── Intro ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                Schools across the U.S. are transitioning their classes to at-home and digital. I understand the need.
              </p>
              <p className={`${styles.p} reveal`}>
                The Boys & Girls Club where I do my research has closed their doors. Kids will be stuck at home for minimally 2 to 4 weeks. And school administrators are doing what they can to avoid the logistics of having to extend the school year into the summer. While I think these families have a lot of important challenges ahead of them — food safety and child care at the top of the list — I wanted to offer help where I could.
              </p>
              <p className={`${styles.p} reveal`}>
                For the last four years, I've been researching how kids in Title 1 classes use online classrooms. For the first time for many teachers, they are being asked to teach in a purely digital, remote form. Below are the challenges you'll face, compared to a normal classroom. These findings are for elementary school and early middle school students.
              </p>
            </div>
          </div>

          {/* ── Stats ── */}
          <div className={styles.container}>
            <ArticleStatRow>
              <ArticleStat value="4" label="years of research" note="Title 1 classrooms and Boys & Girls Club" />
              <ArticleStat value="5" label="structural failure modes" note="each predictable before you start" />
              <ArticleStat value="0" label="times a student asked for help" note="in 4 years of digital lesson observation" />
            </ArticleStatRow>
          </div>

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          <ArticleSectionHeading>5 Reasons Remote Classrooms Fail</ArticleSectionHeading>

          <div className={styles.container}>
            <ArticleTimeline>
              <ArticleTimelineItem step="01" heading="You Are Now Competing with YouTube" continueLine>
                <p className={styles.p}>
                  In a famous Stanford study, children were asked to delay their gratification and not eat a marshmallow for up to 20 minutes. They failed miserably — the marshmallow in front of them was too tempting.
                </p>
                <p className={styles.p}>
                  The modern-day version of the marshmallow is YouTube, TikTok, Minecraft, and Fortnite. When you ask children to read a passage from Old Yeller, you are also asking them not to go on YouTube — which is a click away. In school computer labs, we watched many students "sneakily" watch YouTube with both the researchers and the teacher watching them. If you can get away with it, why not?
                </p>
                <p className={styles.p}>
                  In a home environment, the watchful eye of an authoritative parent sets expectations. With that removed, many students do not have the self-regulation to pick reading over YouTube.
                </p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="02" heading="Where Does Your Child Go When It Gets Hard?" continueLine>
                <p className={styles.p}>
                  For digital learning, there exist two types: practice and learning new skills. For most of my digital clients, I push them hard to focus on practice — teaching something new to a child digitally is a monumental, often impossible task without an adult in the room. Unfortunately, as teachers, you often need to teach new content.
                </p>
                <p className={styles.p}>
                  Digital content comes to a halt when a child is lost. I remember one studious child who was cruising through the area of squares but was then asked to find the area of a triangle — a question he hadn't learned in class. He answered it wrong. Then answered it wrong again. There was no out for him, and he just got frustrated and quit.
                </p>
                <p className={styles.p}>
                  In a typical classroom, when a student doesn't know something, this is when great learning begins. They can ask their peers or ask a teacher. When you are in quarantine, those people aren't there. And even if the teacher is available to take questions online, children still won't ask. When a child is at a computer there is a stigma that they are doing an activity alone. In four years of watching children use digital lessons, I never saw a hand pop up asking a teacher for advice — even when the teacher was five feet away. Now that they are miles away without a face, I don't imagine children will start raising their digital hand.
                </p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="03" heading="We're Robbing Social Learners from the Social" continueLine>
                <p className={styles.p}>
                  Studying digital learning shows the high importance of peers and teachers in the learning process: when they're gone, things break down.
                </p>
                <p className={styles.p}>
                  Peers and teachers provide social feedback. When a child tries hard and succeeds, it's important to have a moment of celebration and acknowledgement. For most kids, this positive feedback from peers and teachers is what keeps them going and striving.
                </p>
                <p className={styles.p}>
                  In an isolated environment, social approval is erased. Getting a 90% on a test doesn't mean that much to a 3rd-grade student. Digital reports can't give them a feeling that they are learning and succeeding. That's really up to you.
                </p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="04" heading="Accessibility" continueLine>
                <p className={styles.p}>
                  We visited many children's homes — watching how they use technology in their natural environment. For a lot of families, there is no computer, tablet, or laptop (though there's often a smartphone). For other families there's no internet access.
                </p>
                <p className={styles.p}>
                  We built Wonder Stories to work on a smartphone as that felt like the most accessible medium — though definitely not universally accessible. But most digital learning programs require a laptop and an internet connection, which will leave many without a way to join in.
                </p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="05" heading="There's No Time to Prototype the Digital Classroom">
                <p className={styles.p}>
                  Thousands of different strategies are going to be tried in the next month. One teacher I talked to said he'll be surprised if more than 20% of the work gets done. There is a way to make online teaching effective — homeschooling parents do it all the time. But effective remote classrooms set up cultures, expectations, and have an easily accessible adult guiding the process.
                </p>
                <p className={styles.p}>
                  Most of my consulting work starts with creating small-scale attempts at positive learning environments. We often fail. The first attempt at Wonder Stories had kids quitting in less than five minutes.
                </p>
                <p className={styles.p}>
                  Unfortunately, as this crisis happened so suddenly, teachers and parents are not given the tools and time to figure out how to make things work. You're being asked to pivot on a dime, and that seldom works.
                </p>
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          <ArticleImage
            src={confusedImg}
            alt="Child frustrated and confused at a computer"
            layout="wide"
          />

          <ArticleImage
            src={momImg}
            alt="Child at home without adequate technology for remote learning"
            layout="wide"
          />

          {/* ── Callout ── */}
          <div className={styles.container}>
            <ArticleCallout label="The Bottom Line" variant="insight">
              <p>When things break down via an online education strategy, it's not the parent's fault, it's not the teacher's fault, and it's not the tech company's fault. Teaching little ones online is a difficult endeavor — one we're still researching and trying to figure out how to do correctly.</p>
            </ArticleCallout>
          </div>

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          {/* ── Closing ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                While it may be next to impossible for your child to learn the same way they do in their classroom, it's not the end of the world. Kids already aren't in school for three months each year. I see this as an early summer vacation.
              </p>
              <p className={`${styles.p} reveal`}>
                When things break down via an online education strategy, just know it's not the parent's fault, it's not the teacher's fault, and it's not the tech company's fault. Teaching little ones online is a difficult endeavor — one we're still researching and trying to figure out how to do correctly.
              </p>
            </div>
          </div>

          <ArticleClosing>
            It's not the parent's fault. It's not the teacher's fault. Teaching little ones online is a difficult endeavor — one we're still trying to figure out.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this helped, share it with a teacher or parent navigating remote learning."
          />

        </article>
      </main>

      <Footer />
    </>
  )
}
