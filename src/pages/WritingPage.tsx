import Nav from '../components/Nav'
import Writing from '../components/Writing'
import Footer from '../components/Footer'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'

export default function WritingPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Nav />
      <main>
        <Writing />
      </main>
      <Footer />
    </>
  )
}
