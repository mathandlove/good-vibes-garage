import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Writing from '../components/Writing'
import Footer from '../components/Footer'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'

export default function WritingPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>Writing — Good Vibes Garage | Elliott Hedman</title>
        <meta name="description" content="Essays on learning, play, and educational technology by Dr. Elliott Hedman. Research-backed writing on how kids learn, what engages them, and how to design for it." />
        <link rel="canonical" href="https://goodvibesgarage.ai/writing" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Writing — Good Vibes Garage" />
        <meta property="og:description" content="Essays on learning, play, and educational technology by Dr. Elliott Hedman." />
        <meta property="og:url" content="https://goodvibesgarage.ai/writing" />
        <meta property="og:image" content="https://goodvibesgarage.ai/og-ai-abstinence.jpg" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Writing — Good Vibes Garage" />
        <meta name="twitter:description" content="Essays on learning, play, and educational technology by Dr. Elliott Hedman." />
        <meta name="twitter:image" content="https://goodvibesgarage.ai/og-ai-abstinence.jpg" />
      </Helmet>
      <Nav />
      <main>
        <Writing />
      </main>
      <Footer />
    </>
  )
}
