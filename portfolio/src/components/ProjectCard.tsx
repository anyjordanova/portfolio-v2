import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  path: string
  image?: string
  onClick?: () => void
}

export const ProjectCard = ({ path, image, onClick }: ProjectCardProps) => {
  return (
    <Link to={path} onClick={onClick}>
      <motion.div 
        className="w-72 bg-gray-100 rounded-xl overflow-hidden hover:bg-gray-200 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="h-40 bg-gray-200 overflow-hidden">
          {image ? (
            <img 
              src={image} 
              className="w-full h-full object-cover border-0"
            />
          ) : (
            <div className="w-full h-full bg-gray-300" />
          )}
        </div>
      </motion.div>
    </Link>
  )
}