import { motion } from 'framer-motion'

interface ProjectMetadata {
  type: string
  date: string
  technologies: string[]
}

interface ProjectImage {
  src: string
  alt: string
}

interface ProjectLayoutProps {
  title: string
  description: string
  metadata: ProjectMetadata
  images: ProjectImage[]
}

export const ProjectLayout = ({ title, description, metadata, images }: ProjectLayoutProps) => {
  return (
    <div className="min-h-screen p-8 md:p-16 bg-black text-white">
      {/* Hlavní nadpis */}
      <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>

      {/* Popis */}
      <motion.p 
        className="text-xl text-gray-400 max-w-2xl mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>

      {/* Metadata */}
      <motion.div 
        className="flex flex-wrap gap-12 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div>
          <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Typ projektu</h3>
          <p className="text-lg font-medium">{metadata.type}</p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Datum</h3>
          <p className="text-lg font-medium">{metadata.date}</p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Technologie</h3>
          <p className="text-lg font-medium">{metadata.technologies.join(', ')}</p>
        </div>
      </motion.div>

      {/* Layout fotek */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="aspect-video rounded-xl overflow-hidden bg-gray-900"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
} 