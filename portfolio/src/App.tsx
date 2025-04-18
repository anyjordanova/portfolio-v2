import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { motion } from 'framer-motion'

function App() {
  const lenisRef = useRef<Lenis>()

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
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
    <main className="bg-black text-white min-h-screen px-10 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Ahoj Any 👋
      </motion.h1>
      <div className="h-[200vh] mt-20">
        <p className="text-lg">
          Scrolluj dolů a připrav se na efekty 🔥
        </p>
      </div>
    </main>
  )
}

export default App
