import { motion } from 'framer-motion'
import { GridShape } from './GridShape'

export const Hero = () => {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // const handleMouseMove = (e: React.MouseEvent) => {
  //   const rect = e.currentTarget.getBoundingClientRect()
  //   const x = (e.clientX - rect.left) / rect.width * 2 - 1
  //   const y = (e.clientY - rect.top) / rect.height * 2 - 1
  //   setMousePosition({ x, y })
  // }

  // // Reset pozice při opuštění sekce
  // const handleMouseLeave = () => {
  //   setMousePosition({ x: 0, y: 0 })
  // }

  return (
    <section
      className="min-h-screen flex flex-col md:flex-row bg-black text-white relative overflow-hidden"

    >
      {/* Text - na mobilu nahoře */}
      <div className='flex flex-col 2xl:flex-row xl:flex-row lg:flex-rom md:flex-row w-full justify-around items-center' >
        <div className="w-full md:w-1/2 2xl:min-h-[50vh] xl::min-h-[50vh] lg::min-h-[50vh] min-h-[40vh] flex items-center justify-center p-6 md:p-10 lg:p-16 order-1 md:order-none relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl"
          >
            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 font-display">
              Anezka
            </motion.h1>
            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-4 md:mb-6 font-display">
              Jordanova
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-md sm:text-xl lg:text-xl text-gray-400"
            >
              I create digital experiences that are unique and memorable
            </motion.p>
          </motion.div>
        </div>

        {/* Navigation cards */}

        <div className='order-2 w-full 2xl:max-w-[30vw] xl:max-w-[30vw] lg:max-w-[30vw] md:max-w-[30vw] '>
          <div className="w-full px-10 md:p-10 lg:p-16 order-1 md:order-none relative z-10 justify-center items-center flex">
            <div className="flex flex-col gap-5 w-full max-w-xl">
              {['About', 'Projects', 'Contact'].map((item, index) => (
                <a href={`${item.toLowerCase().replace(' ', '-')}`} key={index} className="w-full">
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-6 cursor-pointer flex flex-row justify-between items-center gap-5
             bg-gradient-to-br from-gray-200/20 via-gray-500/10 to-gray-200/20
             backdrop-blur-sm border border-none rounded-2xl backdrop-opacity-50
             shadow-lg shadow-black/20 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4),inset_0_2px_5px_rgba(255,255,255,0.25)]
             transition-all duration-300"
                  >
                    <h2 className="text-2xl font-display text-gray-300">{item}</h2>

                    {/* Small link icon */}
                    <svg width="16px" height="16px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#6e6a7d">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M15 2v7.5h-1v-5.668l-9.334 9.334-0.707-0.707 9.459-9.459h-5.918v-1h7.5zM11 16h-10v-10h6.574v-1h-7.574v12h12v-7.714h-1v6.714z" fill="#908ca1"></path>
                      </g>
                    </svg>
                  </motion.div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mřížka na pozadí */}
      <div className="absolute inset-0 w-full md:w-1/2">

      </div>
      <GridShape />
    </section>
  )
}
