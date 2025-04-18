import { motion } from 'framer-motion'

export const Hero = () => (
  <section className="h-screen flex items-center justify-center bg-black text-white">
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-6xl font-bold text-center"
    >
      Build in Amsterdam
    </motion.h1>
  </section>
)
