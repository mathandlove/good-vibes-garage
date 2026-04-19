import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHero,
  ArticleImage,
  ArticleSectionHeading,
  ArticlePullQuote,
  ArticleCallout,
  ArticleTimeline,
  ArticleTimelineItem,
  ArticleClosing,
  ArticleCta,
  ArticleSources,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'

import elliottWithStudent from '../assets/Images/personalizedLearningKeepsFailing/elliottwithstudent.webp'
import elliottWithStudent2 from '../assets/Images/personalizedLearningKeepsFailing/elliottwithstudent2.webp'
import videoTestExample from '../assets/Images/personalizedLearningKeepsFailing/videotestExample.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/personalized-learning'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-personalized-learning.jpg'

export default function PersonalizedLearningPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>Why Personalized Learning Keeps Failing | Elliott Hedman</title>
        <meta name="description" content="After hundreds of hours watching kids fail at educational software, the problem isn't the technology — it's that we keep designing learning as if it's supposed to be a solo activity." />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Why Personalized Learning Keeps Failing" />
        <meta property="og:description" content="After hundreds of hours watching kids fail at educational software, the problem isn't the technology — it's that we keep designing learning as if it's supposed to be a solo activity." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2019-04-24" />
        <meta property="article:author" content="Elliott Hedman" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Why Personalized Learning Keeps Failing" />
        <meta name="twitter:description" content="After hundreds of hours watching kids fail at educational software, the problem isn't the technology — it's that we keep designing learning as if it's a solo activity." />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Why Personalized Learning Keeps Failing",
          "description": "After hundreds of hours watching kids fail at educational software, the problem isn't the technology — it's that we keep designing learning as if it's supposed to be a solo activity.",
          "author": {
            "@type": "Person",
            "name": "Elliott Hedman",
            "url": "https://goodvibesgarage.ai"
          },
          "datePublished": "2019-04-24",
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
            type="Essay"
            date="2019"
            author="Elliott Hedman"
            readTime="9 min read"
            title="Why Personalized Learning Keeps Failing"
            subtitle="After hundreds of hours in the digital classroom, the problem isn't the technology."
            img="/og-personalized-learning.jpg"
            imgAlt="Student working alone on a digital learning tool"
            layout="below"
          />

          {/* ── Intro ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                In my inbox sat a New York Times article sent by my girlfriend's mother: <em>Silicon Valley Came to Kansas Schools. That Started a Rebellion.</em> The article tells the story of an 8,000-person town of Wellington all but lighting the school on fire after the Chan and Zuckerberg Foundation's personalized learning software was introduced — software developed alongside $99.1 million dollars of grants. "Isn't that what you do Elliott?" asked Natalie.
              </p>
              <p className={`${styles.p} reveal`}>
                I write this response in part to save relationship face, but also to bring to light why this outcome is not surprising at all from my research. Take a deep breath. It is going to be a bumpy ride.
              </p>
              <p className={`${styles.p} reveal`}>
                As I tell the edtech companies I advise: "First off, you're not alone. I have watched hundreds of hours of elementary school kids use digital software, and I have yet to see one child learn a new math concept." For the last five years, I observed Boys and Girls Club students fail at using educational software — with help from eye tracking and emotion sensors. A child will listen to a song or mini lecture about finding the area of a triangle for the first time. But afterwards, they consistently fail at solving that area. And then they give up and think math is boring.
              </p>
            </div>
          </div>

          <ArticleImage
            src={elliottWithStudent}
            alt="Elliott Hedman working with a student wearing eye-tracking glasses at the Boys and Girls Club"
            layout="wide"
          />

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          {/* ── Section 1 ── */}
          <ArticleSectionHeading>Personalized Education Does Not Mean Individual Education</ArticleSectionHeading>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                When we translate our educational theories to the digital world they falter. Most educational editors are copying what they did as a child: an adult tells you what to do and then you repeat. But these digital designers do not include all of the subtle things a teacher does. Children care a lot about their teacher so they are fixated on her. But when educational videos come up, children's eyes consistently drift away, looking for other, more emotional stimuli. A teacher gives feedback and understands when the child is confused — teaching is more of a dialog than a lecture. Computers are agnostic to where the child is at.
              </p>
              <p className={`${styles.p} reveal`}>
                The Boys and Girls Clubs of Denver have a reading room where children can choose to read after school. Daily, children line up at my research station and ask if I would read to them. One of the most impactful things a volunteer can do at the club is read <em>with</em> a child. Sit with them. Ask them questions. Sound out words together. Learning is social.
              </p>
              <p className={`${styles.p} reveal`}>
                ThinkCERCA capitalizes on this: students come together as a group and discuss articles they read on the computer. The whole second grade class debates whether we should get rid of roads to save animals. You can see the students thinking and reacting to one another, applying what they read.
              </p>
              <p className={`${styles.p} reveal`}>
                In our prototypes, sometimes we let students work together — despite our client's request to avoid it. When children are allowed to work together, their learning is amplified. They come alive. Children laugh at jokes together, support one another in hard problems, and celebrate shared successes. I wish we would design software that was meant to be used as a group.
              </p>
            </div>
          </div>

          <ArticleImage
            src={elliottWithStudent2}
            alt="Elliott and a student laughing together while looking at a laptop — a moment of genuine connection during research"
            layout="wide"
          />

          <ArticlePullQuote>
            "We're allowing the computers to teach and the kids all looked like zombies."
          </ArticlePullQuote>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                One Summit Learning parent described the software this way. I believe this is a byproduct of how we view computers: PCs are designed to be "personal," for the individual. In one school I visited, the most social interaction students received was by logging out of the educational program and sharing YouTube videos with one another. Teachers checked their email for the entirety of the computer lab hour. The New York Times article stated teachers would only check in with students two minutes a week.
              </p>
              <p className={`${styles.p} reveal`}>
                At first I blamed the teachers. But now I understand how these programs are designed. It feels rude to peep over a student's shoulder. No questions say "Ask the teacher or a friend…" In an effort to make things more independent, the programs boot classmates and teachers out of the experience — those same classmates and teachers who are the foundation of strong learning.
              </p>
            </div>
          </div>

          <div className={styles.container}>
            <ArticleCallout label="Suggestion #1" variant="insight">
              <p>Like Facebook knows, humans are naturally social. Innovate new ways to make digital learning a social experience where we are learning together — at our own pace, but together. Recognize that the default tendency of software, students, and teachers will be to silo up, despite no one wanting that. Design against it intentionally.</p>
            </ArticleCallout>
          </div>

          {/* ── Section 2 ── */}
          <ArticleSectionHeading>Treat Science as Ideas, Not Truths</ArticleSectionHeading>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                In the New York Times article, John Payne of the RAND Corporation states "There has not been enough research." But I think research is the wrong word. For the most part, educational theories about how to teach the area of triangles digitally have failed students. I already have plenty of video evidence of disgruntled students not learning, and now Summit Learning has rebelling schools as a clear indicator of failure.
              </p>
              <p className={`${styles.p} reveal`}>
                We need to move past validative research: spending large amounts of resources to prove old methods are not working well. Instead, the Chan and Zuckerberg Foundation should invest in generative research that looks to innovate new ways of teaching digitally. New research should be messy — trying new things, making mistakes, and starting in classrooms with students who might someday use the software. Educational research should feel more like a hackathon than a standardized test.
              </p>
              <p className={`${styles.p} reveal`}>
                I tell my clients that academic research is simply a pool of ideas. Do you want to teach with a growth mindset angle, a constructivist foundation, or a more didactic method? All of those ideas are fine, but they should be considered only as potential ideas — nothing more. Take those years of research at Stanford, build something out of it in two days, and test it for a week at a school. In that one week you will learn more about what is effective in your unique environment than from those ten years of research.
              </p>
              <p className={`${styles.p} reveal`}>
                In a recent project, I was asked to better engage middle school students with taking tests. I gave them four different methods — including Growth Mindset approaches — before a math test at the Boys and Girls Club. All four digital methods crashed and burned. Students quit after about three to five minutes.
              </p>
            </div>
          </div>

          <ArticleImage
            src={videoTestExample}
            alt="A high school student on video explaining her test-taking strategies — the peer motivation prototype that actually worked"
            caption="The winning idea: a high school student explaining how she checked her answers. Students wanted to take the test."
          />

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                I then co-created with the students. They showed me how their peers motivated them more than any computer program. When a high school student with your same skin color talks, that means something. I don't know what academic theory they were tapping into, but that was the winning idea. We created videos of high school students explaining how they double-checked their answers. It worked. Students wanted to take the test.
              </p>
            </div>
          </div>

          <div className={styles.container}>
            <ArticleCallout label="Suggestion #2" variant="insight">
              <p>It is good you are looking at science, but do not treat that science as gospel. Your classroom is not 18-year-old white males in college, where the vast majority of academic research comes from. Instead, prototype and try out a diversity of theories until you find what works for the children and teachers you serve.</p>
            </ArticleCallout>
          </div>

          {/* ── Section 3 ── */}
          <ArticleSectionHeading>Personalized Learning Is Missing Human-Centered Design</ArticleSectionHeading>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                One of the largest challenges personalized learning faces is that there is no clear working model to copy from. I cannot point at a piece of educational software and say "just do that." Because there is no working method to copy, designers of personalized learning tools need to recognize they are taking stabs in the dark.
              </p>
              <p className={`${styles.p} reveal`}>
                To make matters worse, kids are often a voiceless consumer. My clients seldom ask children what they think or what is broken. If you take time to observe and listen to what kids want, they will paint a different world for how digital education should look. The same goes for teachers — they have needs going unmet too. As long as funding and permission comes from school boards and admins, edtech companies are likely to miss their real consumers. When you fail to listen to your customers, your students are going to drop out and teachers are going to post protest signs.
              </p>
              <p className={`${styles.p} reveal`}>
                In the New York Times article, the Summit team came off as distant — claiming parents and students are nostalgic and resistant to change. A more human-centered approach would be to listen and embrace those complaints. If a child does not like your program, there is something there for you to learn.
              </p>
              <p className={`${styles.p} reveal`}>
                I understand why a human-centered design process is hard. When I spoke with the Charter School Growth Fund, I asked how they knew their charter model would work. We had a heart to heart about how hard it is to get permission from all the stakeholders and funders to experiment. As an innovator, you are diving in, hoping all the pieces work on the first try. They seldom do. I advised the fund to take one class and rapidly iterate on the experience — make it work the way they want it to before replicating to other schools. This process would involve daily iterations and heavy co-creation with teachers and students. They agreed, but that is not how funding works. You have to sell a perfectly baked solution from the get-go.
              </p>
            </div>
          </div>

          <div className={styles.container}>
            <ArticleCallout label="Suggestion #3" variant="insight">
              <p>Tackling personalized learning is a monumental design task. Give it the time, space, and resources to nourish. You started by jumping into a school system, but the idea was not fully fleshed out. What would have happened if instead you tried it in one class in Kansas and solicited feedback? When students told you they felt like zombies, you would have had time to respond. Human-centered design is not just a mindset — it is an environment. Create the space where mistakes can be made and addressed without children dropping out of school.</p>
            </ArticleCallout>
          </div>

          {/* ── Section 4 ── */}
          <ArticleSectionHeading>Keep Going</ArticleSectionHeading>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                The New York Times article all but said personalized learning is a failure. I used to think the same. However, after years in the digital classroom, I see potential — potential that keeps me writing. Personalized learning allows students to:
              </p>
            </div>
          </div>

          <div className={styles.container}>
            <ArticleTimeline>
              <ArticleTimelineItem step="01" heading="Work at Their Own Pace">
                <p className={styles.p}>If a student figures out the area of a triangle, they can move on. No waiting, no boredom, no holding back.</p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="02" heading="Move Dynamically Through a Lesson">
                <p className={styles.p}>If they forget what "area" means while learning the area of a triangle, they can move back to finding the area of a square first.</p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="03" heading="Learn by Doing">
                <p className={styles.p}>Children learn by trying things out, making mistakes, and getting feedback. Personalized learning offers a future where they can play and learn at the same time.</p>
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                But for today, these promises still remain at a distance. These features are difficult to implement in a non-ideal system and require deep, intentional user research and design thinking. Hence why they are more opportunities than realities.
              </p>
              <p className={`${styles.p} reveal`}>
                I do not personally know the Summit Learning software. And I do not know how much of the New York Times article was true or slanted. But all of the issues cited are the same as what my other personalized learning clients experience. The digital education problem is not a Chan and Zuckerberg Foundation problem. It is a design problem affecting all of education.
              </p>
              <p className={`${styles.p} reveal`}>
                I believe with strong human-centered design and strong research, Summit Learning has the potential to reinvent how we all learn. Here's hoping they learn from Wellington and do.
              </p>
            </div>
          </div>

          <ArticleClosing>
            The digital education problem is not a technology problem. It is a design problem.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to a teacher, designer, or school administrator you know."
          />

          <ArticleSources>
            <li><a href="https://www.nytimes.com/2019/04/21/technology/silicon-valley-kansas-schools.html" target="_blank" rel="noopener noreferrer">Silicon Valley Came to Kansas Schools. That Started a Rebellion.</a></li>
            <li><a href="https://thinkcerca.com/" target="_blank" rel="noopener noreferrer">ThinkCERCA — Social Reading Platform</a></li>
          </ArticleSources>

        </article>
      </main>

      <Footer />
    </>
  )
}
