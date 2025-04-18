import { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProjectLayout } from './components/ProjectLayout'

// Pages
const Home = () => (
  <div className="min-h-screen">
    <Hero />
  </div>
)

const Projects = () => (
  <div>
    <ProjectLayout
      title="E-commerce Platforma"
      description="Moderní e-commerce řešení postavené na React a Next.js. Projekt zahrnuje pokročilou správu produktů, košík s real-time aktualizacemi a integraci s různými platebními bránami."
      metadata={{
        type: "Webová aplikace",
        date: "2024",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"]
      }}
      images={[
        { 
          src: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80",
          alt: "Dashboard e-commerce platformy"
        },
        {
          src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2091&q=80",
          alt: "Mobilní zobrazení"
        }
      ]}
    />
    
    <ProjectLayout
      title="AI Portfolio Generator"
      description="Inovativní nástroj využívající umělou inteligenci pro automatické generování profesionálních portfolií. Uživatelé mohou jednoduše nahrát své práce a systém vytvoří personalizované portfolio s optimalizovaným rozložením."
      metadata={{
        type: "SaaS",
        date: "2023",
        technologies: ["Vue.js", "Python", "FastAPI", "TensorFlow", "AWS"]
      }}
      images={[
        {
          src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
          alt: "AI generování portfolia"
        },
        {
          src: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
          alt: "Ukázka vygenerovaného portfolia"
        }
      ]}
    />
  </div>
)

const About = () => (
  <div className="min-h-screen p-10">
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl font-bold mb-10"
    >
      About
    </motion.h1>
  </div>
)

const Contact = () => (
  <div className="min-h-screen p-10">
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl font-bold mb-10"
    >
      Contact
    </motion.h1>
  </div>
)

function App() {
  const lenisRef = useRef<Lenis | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    })

    lenisRef.current = lenis

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <Router>
      <div className="bg-black text-white">
        {/* Wrapper pro menu tlačítko */}
        <div className="fixed z-50 w-16 h-16 bottom-10 left-[50%] -translate-x-[50%]">
          <motion.button
            className="w-full h-full rounded-full bg-white text-black flex items-center justify-center font-medium text-sm uppercase tracking-wider hover:shadow-lg transition-shadow"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </motion.button>
        </div>

        {/* Navigační panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "tween", damping: 30, duration: 0.3 }}
              className="fixed bottom-0 left-0 right-0 h-[50vh] bg-white text-black z-40 p-12 rounded-t-[2rem] shadow-2xl"
            >
              <Navbar onClose={() => setIsMenuOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hlavní obsah */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App
