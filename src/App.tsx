import { useEffect } from 'react'
import Lenis from 'lenis'
import './App.css'
import Navbar from './components/Navbar'
import HeroBioSection from './components/HeroBioSection'
import StatementSection from './components/StatementSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import ThoughtsSection from './components/ThoughtsSection'
import MainFooter from './components/MainFooter'

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll for authentic Framer momentum feel
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const animationFrameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationFrameId)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-surface flex flex-col">
      {/* ── Fixed Centered Navigation ── */}
      <Navbar />

      {/* ── 0% - 17% Combined Hero & Bio 3D Scroll Section ── */}
      <HeroBioSection />

      {/* ── 33% Statement / Manifesto Section ── */}
      <StatementSection />

      {/* ── 50% Services Section ── */}
      <ServicesSection />

      {/* ── 67% Featured Projects & Testimonials ── */}
      <ProjectsSection />

      {/* ── 83% Thoughts / Blog & Let's Talk ── */}
      <ThoughtsSection />

      {/* ── 100% Dark Footer ── */}
      <MainFooter />
    </div>
  )
}

export default App
