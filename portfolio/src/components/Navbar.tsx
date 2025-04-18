import { useState } from 'react'
import { motion } from 'framer-motion'

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center bg-black text-white z-50">
      <span className="text-xl font-bold">BiA</span>
      <button onClick={() => setOpen(!open)} className="text-sm uppercase">
        Menu
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-full left-0 w-full bg-black text-white p-6"
        >
          <ul className="space-y-4">
            <li><a href="#about">O nás</a></li>
            <li><a href="#projects">Projekty</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </motion.div>
      )}
    </nav>
  )
}