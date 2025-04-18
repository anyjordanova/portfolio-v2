import { motion } from 'framer-motion'

type ProjectCardProps = {
  title: string
  image: string
}

export const ProjectCard = ({ title, image }: ProjectCardProps) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="overflow-hidden rounded-lg shadow-lg"
  >
    <img src={image} alt={title} className="w-full h-64 object-cover" />
    <div className="p-4 bg-white">
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  </motion.div>
)