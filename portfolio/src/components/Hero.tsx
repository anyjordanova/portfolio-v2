import { motion } from 'framer-motion'

export const Hero = () => (
  <section className="h-screen flex flex-col md:flex-row bg-black text-white">
    {/* Text - na mobilu nahoře */}
    <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center px-6 md:px-10 order-1 md:order-none">
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
    
    {/* Kontejner pro obrázek - na mobilu dole */}
    <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gray-900 flex items-center justify-center order-2 md:order-none">
      <div className="w-4/5 h-4/5 bg-gray-800 rounded-lg"></div>
    </div>
  </section>
)
