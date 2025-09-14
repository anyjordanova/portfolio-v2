import { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProjectLayout } from './components/ProjectLayout'
import { ThreeShape } from './components/ThreeShape'
import { VideoGallery } from './components/VideoGallery'
import { PhotoGallery } from './components/PhotoGallery'
import { InfiniteShape } from './components/InfiniteShape'

// Pages
const Home = () => (
  <div className="min-h-screen">
    <Hero />
  </div>
)

const Projects = () => (
  <div>
    <ProjectLayout
      title='Clubiq'
      description="Clubiq is a mobile app for sports clubs that makes it easy for coaches to record training sessions and player evaluations. Coaches can track players' progress in the short and long term. In addition to tracking coaches' ratings, players can rate themselves. The app is being developed by a team of 3 people. I work on the frontend of the app."
      metadata={{
        type: "Mobile App",
        date: "Mar 2024 - present",
        technologies: ["React Native", "TypeScript"]
      }}
      images={[
        {
          src: "/images/projects/clubiq/preview.png",
          alt: "Náhled aplikace knihovny"
        },
        {
          src: "/images/projects/clubiq/ratings.png",
          alt: "Detail výpůjček"
        }
      ]}
    />


    <ProjectLayout
      title='Apocalypsed'
      description="The game Apocalypsed was created during a 24-hour programming competition, where the task was to create a game on a topic Apocalypse.
In a team of three, we created a 3D strategy game where the goal is to survive as long as possible in a post-apocalyptic world with limited options for food, money and medical supplies. The player has limited time each round to obtain everything they need, so they must take measured steps to survive."
      metadata={{
        type: "3D Game",
        date: "Sep 2024",
        technologies: ["C#", "Unity"]
      }}
      images={[
        {
          src: "/images/projects/apocalypsed/MainMenu.png",
          alt: "Main menu"
        },
        {
          src: "/images/projects/apocalypsed/GameScreen.png",
          alt: "Game screen"
        }
      ]}
    />

    <ProjectLayout
      title="Film Studios Zlín"
      description="During the collaboration with other students from the 3rd year of the Film School I contributed to the creation of an interactive website with 3D elements for the Film Studios Zlín."
      metadata={{
        type: "Web",
        date: "Feb 2024",
        technologies: ["React", "Next.js", "Three.js", "Tailwind CSS"]
      }}
      images={[
        {
          src: "/images/projects/filmstudios/MainPage.png",
          alt: "Main page"
        },
        {
          src: "/images/projects/filmstudios/Detail.png",
          alt: "Detail of page"
        }
      ]}
    />

    <ProjectLayout
      title="Twigame"
      description="A school project where the goal was to create a 3D game on a fixed theme. I was assigned the theme 'twig'. It is an unpretentious story game with parkour elements."
      metadata={{
        type: "3D Game",
        date: "Oct 2023 - Dec 2023",
        technologies: ["Unity", "C#"]
      }}
      images={[
        {
          src: "/images/projects/twigame/MainMenu.png",
          alt: "Main menu"
        },
        {
          src: "/images/projects/twigame/Game.png",
          alt: "Game screen"
        }
      ]}
    />

    <ProjectLayout
      title="Website for Jorcon. s.r.o."
      description="Innovated website of the company Jorcon s.r.o."
      metadata={{
        type: "Web",
        date: "Jul 2023",
        technologies: ["Wordpress"]
      }}
      images={[
        {
          src: "/images/projects/jorcon/preview.png",
          alt: "Preview of website"
        }
      ]}
    />

    <ProjectLayout
      title="BataCards"
      description="The game BataCards was created during a 24-hour programming competition, where the task was to create a game for Tomas Bata that would make his life and business easier if he lived in today's times.
In a team of three, we created a simple strategy game where the goal is to make important decisions that affect the running of your business. The goal is to maintain several of the company's core pillars as long as possible: employee satisfaction, company finances, employee development, and company infrastructure."
      metadata={{
        type: "Web Game",
        date: "Nov 2022",
        technologies: ["HTML", "CSS", "JavaScript"]
      }}
      images={[
        {
          src: "/images/projects/batacards/preview.png",
          alt: "Preview of game"
        }
      ]}
    />

    <ProjectLayout
      title="Old portfolio"
      description="This personal portfolio is an interactive presentation of my work and projects. The look and feel of the site reflects my skills, which are constantly evolving."
      metadata={{
        type: "Web",
        date: "Jun 2022",
        technologies: ["HTML", "CSS", "JavaScript"]
      }}
      images={[
        {
          src: "/images/projects/portfolio/preview.png",
          alt: "Preview of portfolio"
        }
      ]}
    />
  </div>
)

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: (e.clientX - window.innerWidth / 2) / window.innerWidth,
      y: (e.clientY - window.innerHeight / 2) / window.innerHeight
    })
  }

  //Age calculation
  const birthDate = new Date(2006, 4, 13)
  const ageDifMs = Date.now() - birthDate.getTime()
  const ageDate = new Date(ageDifMs)
  const age = Math.abs(ageDate.getUTCFullYear() - 1970)

  return (
    <div onMouseMove={handleMouseMove} className="relative">
      <div className="min-h-[110vh] bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <ThreeShape mouseX={mousePosition.x} mouseY={mousePosition.y} />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-10 sm:py-20">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl sm:text-5xl md:text-7xl lg:text-8xl text-center font-display tracking-wider"
          >
            Who am I?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg 2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-xl text-gray-300 my-5 mx-2 sm:mx-5 md:mx-10 text-center md:max-w-1/2 md:w-1/2"
          >
            I'm a {age} year old student of IT from Czech Republic, curently studying DevOps on DKIT in Dundalk, Ireland. My biggest passion is cross-platform mobile app development, websites development and UI & UX design.
          </motion.p>
        </div>
      </div>

      <div className="min-h-screen w-full bg-black relative overflow-hidden flex items-center flex-col">       

        {/* Photo of me  */}
        <div className="w-full px-4 sm:px-10 max-w-4xl my-0 pt-10 sm:pt-20 flex justify-center items-center">
        </div>

        {/* Other interests  */}
        <div className="w-full px-4 sm:px-10 max-w-4xl my-0 pt-10 sm:pt-20 gap-5 flex flex-col items-center">
          <div className='flex flex-col gap-5 w-full'>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-7xl text-center text-white font-display tracking-wider"
            >
              Meet my interests
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mt-5 sm:mt-10 text-center"
            >
              I'm a big fan of music. I play the accordion for many years. I love to play classical pieces as well as modern songs and music from movies. Except for that, I compose my own music in FL Studio.
            </motion.p>
            <motion.a
              href="https://www.instagram.com/dzordys/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 font-semibold text-lg sm:text-xl hover:text-blue-600 text-center"
            >
              Check out my Instagram for more videos
            </motion.a>
          </div>

          <VideoGallery />

          <div className='flex flex-col gap-5 w-full mt-5 sm:mt-10'>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300"
            >
              One of my other hobbies is photoshooting. I love to capture moments and create beautiful memories. I often take photos of nature, architecture, and people. I also enjoy editing photos in Zoner Photo Studio X.
            </motion.p>
            <motion.a
              href="https://eu.zonerama.com/dzordys"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 font-semibold text-lg sm:text-xl hover:text-blue-600"
            >
              Check out my gallery here
            </motion.a>
          </div>
        </div>

        <PhotoGallery />
      </div>
    </div>
  )
}

const Contact = () => (
  <div className="min-h-screen bg-black relative overflow-hidden">
    <div className="absolute inset-0">
      <InfiniteShape />
    </div>
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-10 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl flex flex-col items-center gap-12"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl text-center font-display tracking-wider"
        >
          Let's Connect
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-xl sm:text-2xl text-gray-400 text-center">
            Feel free to reach out
          </p>
          <a
            href="mailto:contact@anezka.dev"
            className="text-2xl sm:text-3xl text-blue-300 hover:text-blue-400 transition-colors font-light"
          >
            contact@anezka.dev
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-8 items-center"
        >
          <a
            href="https://github.com/anyjordanova"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/anyjordan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/dzordys"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </div>
  </div>
)

function App() {
  const lenisRef = useRef<Lenis | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  //Functions for set menu to open and close
  const handleMenuOpen = () => {
    setIsMenuOpen(true)
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

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
        {/* Navigační panel */}
        {location.pathname !== '/' && (
          <AnimatePresence>
            {isMenuOpen ? (
              <>
                <Navbar
                  onClose={handleMenuClose}
              />
  
            </>
          ) : null

          }
        </AnimatePresence>
        )}

        {/* Tlačítka pro menu */}
       { location.pathname !== '/' && (
         <div className="fixed z-50 bottom-6 sm:bottom-10 left-[50%] -translate-x-[50%]">
          {!isMenuOpen ? (
            <motion.button
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white text-black flex items-center justify-center font-medium text-xs sm:text-sm uppercase tracking-wider hover:shadow-lg transition-shadow"
              onClick={handleMenuOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Menu
            </motion.button>
          ) : (
            <motion.button
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white text-black flex items-center justify-center font-medium text-xs sm:text-sm uppercase tracking-wider hover:shadow-lg transition-shadow"
              onClick={handleMenuClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Close
            </motion.button>
          )}
        </div>
       )}

        {/* Hlavní obsah */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />}/>
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
