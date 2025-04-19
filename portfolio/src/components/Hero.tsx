import { motion } from 'framer-motion'
import { useState } from 'react'
import { GridShape } from './GridShape'

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width * 2 - 1
    const y = (e.clientY - rect.top) / rect.height * 2 - 1
    setMousePosition({ x, y })
  }

  // Reset pozice při opuštění sekce
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <section 
      className="h-screen flex flex-col md:flex-row bg-black text-white relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Text - na mobilu nahoře */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center px-6 md:px-10 order-1 md:order-none relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl"
        >
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            Anežka Jordánová
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400"
          >
            I create digital experiences that are unique and memorable.
          </motion.p>
        </motion.div>
      </div>
      
      {/* Mřížka na pozadí */}
      <div className="absolute inset-0">
        <GridShape  />
      </div>
      
      {/* Kontejner pro obrázek - na mobilu dole */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full bg-transparent flex items-center justify-center order-2 md:order-none relative z-10">
        <div className="w-4/5 h-4/5 bg-gray-800/30 rounded-lg backdrop-blur-sm"></div>
      </div>
    </section>
  )
}
