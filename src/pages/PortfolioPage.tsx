import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'

export default function PortfolioPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>Portfolio — Good Vibes Garage | Elliott Hedman</title>
        <meta name="description" content="Design and research portfolio of Dr. Elliott Hedman — educational games, learning tools, and play-based experiences built across a decade of practice." />
        <link rel="canonical" href="https://goodvibesgarage.ai/portfolio" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Portfolio — Good Vibes Garage" />
        <meta property="og:description" content="Design and research portfolio of Dr. Elliott Hedman — educational games, learning tools, and play-based experiences." />
        <meta property="og:url" content="https://goodvibesgarage.ai/portfolio" />
        <meta property="og:image" content="https://goodvibesgarage.ai/og-ai-abstinence.jpg" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio — Good Vibes Garage" />
        <meta name="twitter:description" content="Design and research portfolio of Dr. Elliott Hedman — educational games, learning tools, and play-based experiences." />
        <meta name="twitter:image" content="https://goodvibesgarage.ai/og-ai-abstinence.jpg" />
      </Helmet>
      <Nav />
      <main>
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}
