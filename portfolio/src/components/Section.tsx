import { motion } from 'framer-motion'

export const Section = ({ children }: { children: React.ReactNode }) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="py-20 px-10"
  >
    {children}
  </motion.section>
)