import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

interface NavbarProps {
  onClose: () => void,
}

export const Navbar = ({ onClose }: NavbarProps) => {

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ]


  // Přidání event listeneru pro kliknutí mimo navbar
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.className == 'navbar-content') {
        console.log("closed")
        onClose()    
        
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onClose])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        exit={{ y: '-100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className=" fixed top-0 left-0 right-0 z-50"
      >
        <div className="flex justify-center items-center py-12 2xl:space-x-16 xl:space-x-16 lg:space-x-16 md:space-x-16 sm:space-x-16 space-x-5">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => {
                onClose()
              }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="navbar-content text-LG xxl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl font-medium text-white/90 hover:text-white transition-all"
              >
                {item.label}
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
      </>
  )
}