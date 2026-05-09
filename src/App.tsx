import { Nav } from './components/Nav/Nav'
import { Hero } from './components/Hero/Hero'
import { ProofBar } from './components/ProofBar/ProofBar'
import { Features } from './components/Features/Features'
import { ShowcaseConversation } from './components/Showcase/ShowcaseConversation'
import { ShowcaseCalendar } from './components/Showcase/ShowcaseCalendar'
import { Testimonials } from './components/Testimonials/Testimonials'
import { Pricing } from './components/Pricing/Pricing'
import { FAQ } from './components/FAQ/FAQ'
import { CTABanner } from './components/CTABanner/CTABanner'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <ProofBar />
        <Features />
        <ShowcaseConversation />
        <ShowcaseCalendar />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}

export default App
