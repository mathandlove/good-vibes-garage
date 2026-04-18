import Nav from '../components/Nav'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'

export default function PortfolioPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Nav />
      <main>
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}
