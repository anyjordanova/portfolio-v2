import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'

interface NavbarProps {
  onClose: () => void
}

export const Navbar = ({ onClose }: NavbarProps) => {
  const menuItems = [
    { 
      path: '/', 
      label: 'Home',
      preview: '/images/home-preview.jpg'
    },
    { 
      path: '/projects', 
      label: 'Projects',
      preview: '/images/projects-preview.jpg'
    },
    { 
      path: '/about', 
      label: 'About',
      preview: '/images/about-preview.jpg'
    },
    { 
      path: '/contact', 
      label: 'Contact',
      preview: '/images/contact-preview.jpg'
    },
  ]

  return (
    <div className="h-full overflow-x-auto overflow-y-hidden">
      <div className="flex space-x-16 p-8 min-w-max">
        {menuItems.map((item) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex flex-col items-start space-y-4"
          >
            <Link
              to={item.path}
              onClick={onClose}
              className="group"
            >
              <motion.h2 
                className="text-4xl font-bold text-black hover:text-gray-600 transition-colors"
                whileHover={{ x: 10 }}
              >
                {item.label}
              </motion.h2>
              <motion.p 
                className="text-gray-500 mt-2 group-hover:text-black transition-colors max-w-xs"
                whileHover={{ x: 10 }}
              >
              </motion.p>
            </Link>
            
            <ProjectCard
              path={item.path}
              // image={item.preview}
              onClick={onClose}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}