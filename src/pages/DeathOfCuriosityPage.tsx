import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHeader,
  ArticleImage,
  ArticleSectionHeading,
  ArticleClosing,
  ArticleCta,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'

import heroImage from '../assets/Images/deathofcuriosity/1_eYDG_VqoWn1XJR6qGB4aww.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/death-of-curiosity'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-death-of-curiosity.jpg'

export default function DeathOfCuriosityPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>The Death of Curiosity | Elliott Hedman</title>
        <meta name="description" content="Your company says it values innovation — but the culture quietly kills the curiosity that makes it possible. Three ways organizations strangle the thing they claim to want." />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="The Death of Curiosity" />
        <meta property="og:description" content="Your company says it values innovation — but the culture quietly kills the curiosity that makes it possible." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2019-03-26" />
        <meta property="article:author" content="Elliott Hedman" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Death of Curiosity" />
        <meta name="twitter:description" content="Your company says it values innovation — but the culture quietly kills the curiosity that makes it possible." />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "The Death of Curiosity",
          "description": "Your company says it values innovation — but the culture quietly kills the curiosity that makes it possible. Three ways organizations strangle the thing they claim to want.",
          "author": {
            "@type": "Person",
            "name": "Elliott Hedman",
            "url": "https://goodvibesgarage.ai"
          },
          "datePublished": "2019-03-26",
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
            date="March 26, 2019"
            author="Elliott Hedman"
            readTime="6 min read"
            title="The Death of Curiosity"
            subtitle="How your company is killing innovation."
          />

          {/* ── Video ── */}
          <div className={styles.container}>
            <div className={`${styles.videoWrap} reveal`}>
              <iframe
                src="https://www.youtube.com/embed/WQRyYfsbJQY"
                title="The Death of Curiosity and Innovation — SXSW talk by Elliott Hedman"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* ── Intro ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                For every day I've spent researching, I've had to spend 30 days trying to act on what I found.
              </p>
              <p className={`${styles.p} reveal`}>
                This was the underlying issue of my sold-out talk at SXSW this year, "The Death of Curiosity and Innovation."
              </p>
              <p className={`${styles.p} reveal`}>
                If you are a design researcher, you've likely had similar experiences. Most of the individuals who hire me (design researchers themselves), confide that their job is frustrating and ineffective. Over the years, I see my clients predictably quit or be fired as the innovation strategy didn't work for the larger company. My client's drive for innovation is underappreciated and viewed as a thorn. Often times, they will ask if I'm hiring; they want to work in a place that enables and appreciates curiosity. I tell them it's not just their company, it's a cultural problem.
              </p>
            </div>
          </div>

          <ArticleImage
            src={heroImage}
            alt="Curiosity and innovation in the workplace"
            layout="full"
          />

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          <ArticleSectionHeading>The Top 3 Ways Work Culture Kills Curiosity</ArticleSectionHeading>

          {/* ── Section 1 ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <h2 className={`${styles.h2} reveal`}>1. Reject Vulnerability</h2>
              <p className={`${styles.p} reveal`}>
                I was on my high school basketball team. More specifically, on the C Team, sitting on the bench all game; my coach wouldn't play me. I never asked, "So, what do I need to do to play?" I was too scared. The coach might have told me I suck or that I should quit. But rather than face these scary truths, I made up a reality in my head: the coach was blind to how good I was; the fault was on him. I did not want to be vulnerable.
              </p>
              <p className={`${styles.p} reveal`}>
                Companies are equally afraid to embrace their flaws. One big box company was losing billions from a poor customer experience. A Forbes article called them out and detailed how prioritizing upsales was ruining them. I shared this article with my client and their response was the converse of curiosity. I was told the author did not have the whole picture and was biased. Right in front of my client was an article explaining how they could escape their downfall, but rather than lean in, they pushed away, hard. After my own rigorous research, finding similar points, the vice president told me not to share my findings with anyone; he did not want these ideas to spread. Our research did not save the company billions. In fact, they were not able to change at all.
              </p>
              <p className={`${styles.p} reveal`}>
                If a company cannot be vulnerable, it cannot reflect, and it cannot pivot.
              </p>
            </div>
          </div>

          {/* ── Section 2 ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <h2 className={`${styles.h2} reveal`}>2. Own the Answer, not the Question</h2>
              <p className={`${styles.p} reveal`}>
                In an effort to adapt, JC Penny's new CEO Ron Johnson came in with a blazing strong point of view: get rid of coupons. The executive vice president Steve Lawrence was skeptical of the idea and suggested they should conduct tests to verify that idea. Questioning protocol, Lawrence was fired and no tests were done. No one was allowed to ask "Is getting rid of coupons a good idea?" When Johnson's anti-coupon vision was executed, JC Penny's sales went down 19% that quarter. Johnson owned the answer: "Get rid of coupons," but failed to own the question "What do customers really want at JC Penny?" If he owned the question he would have prototyped and asked customers. I can't blame him though. Organizations are built in a way where you need to fight hard for your ideas. There's little room for doubt and self-reflection.
              </p>
              <p className={`${styles.p} reveal`}>
                I saw the same challenges in academia. When I joined the MIT Media Lab, I was excited about the prospect of real science: discovering new ways of thinking. I met a lot of top social science professors across many universities. These professors did not spend much, if any, time trying to conduct new research or understand a new perspective. Instead, they spent their energy arguing for their own point of view. Based off of one or two studies conducted years ago, they would write article after article and give talks trying to convince practitioners that their idea was the correct idea.
              </p>
              <p className={`${styles.p} reveal`}>
                And I can't blame the professors either. Grant money is not tied to curiosity but rather having clout in the field. When you apply for a grant you have to already know exactly what you are going to prove and how you are going to prove it. "Give me funding to help show the world my answer is correct." In the social sciences, this has led to a replication crisis. 60% of published social science research cannot be replicated. Experts are calling for more rigorous success criteria, but that won't address the underlying problem. Researchers are heavily motivated to prove to the world their fixed perspective rather than seek and share the truth, even when that truth contradicts their own agenda.
              </p>
              <p className={`${styles.p} reveal`}>
                This "Own the Answer" attitude trickles down to elementary school. When we learn the scientific method, it starts with declaring your hypothesis. You have to know the answer before you even begin the experiment. In reality, especially as a student, the true hypothesis is, "I have no idea." Bonus points should be given to kids who add, "I don't know, but I want to find out." Instead, we treat science as a series of facts. You can either show where the mitochondria is or you can't. And the better you are at faking like you already know everything, the better your grade. This bothers me.
              </p>
            </div>
          </div>

          {/* ── Section 3 ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <h2 className={`${styles.h2} reveal`}>3. Be a Fire Department</h2>
              <p className={`${styles.p} reveal`}>
                I conducted a six-month project to learn how to make digital education tools that were engaging and effective, especially for children in low-income households. We tried hundreds of ideas, but the strongest recommendation was simple: Try-It-Again. Students will stay motivated if you give them the option to try problems until they have mastered it. The stakeholders agreed with the findings, but then said they wouldn't be able to implement Try-It-Again. They were so busy building new lessons that there was no time for pivoting. There was no programmer to add a back button. In fact, bringing up Try-It-Again just made employees more frustrated. There were too many fires to put out already.
              </p>
              <p className={`${styles.p} reveal`}>
                If your company is stretched for time or resources, you will not be able to innovate. The company will become furious with you as you outline new directions to go. So instead, research work typically gets put in a file cabinet to be referenced at "some other time", also known as never. Or alternatively, the research is taken and little bits are added to a Frankenstein design where the half-assed, rushed attempt was worse than the original. Either way, innovation without runway is doomed from the beginning.
              </p>
            </div>
          </div>

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          {/* ── Closing prose ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                You are not alone. Most innovators struggle with their company's curiosity.
              </p>
              <p className={`${styles.p} reveal`}>
                And through all these processes, the head of innovation will be viewed as troublesome, unhelpful, and not getting it. She is trying to get her clients to be vulnerable, to think differently, and create space. And though her company says it's invested in innovation, what they mean is innovation that takes no time, requires no tough conversations, and reinforces that they are doing everything right already. While the companies I work for think they need a scientist, what they typically need is a skilled therapist, to help them begin to embrace change and curiosity.
              </p>
              <p className={`${styles.p} reveal`}>
                I wish I knew curiosity was dead when I formed mPath. My business model was simple: understanding and improving customer experience is a major financial win, there are billions of dollars to be made for better customer experience. But as I started consulting, I noticed a pattern: even though there is money to be made, most of my clients don't actually value that empathic curiosity. Curiosity requires vulnerability. Instead, I'm either hired by clients who are at war with their company culture. Or I'm hired to prove something that my clients already know is true so that they can convince higher-ups that they are correct.
              </p>
              <p className={`${styles.p} reveal`}>
                I don't have a solution to this, though my best bets are on changing primary school education models. I wrote this article because I have met many of you out there who also care about curiosity. You feel isolated, unappreciated, and alone. And I hope this is the beginning of a conversation. It's not just you. It's not just your company. It's our culture that avoids vulnerability at the cost of curiosity. And I believe that if we can solve this curiosity problem, we are steps away to a new enlightenment.
              </p>
            </div>
          </div>

          <ArticleClosing>
            It's not just your company. It's our culture that avoids vulnerability at the cost of curiosity.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to someone who cares about building a better workplace."
          />

        </article>
      </main>

      <Footer />
    </>
  )
}
