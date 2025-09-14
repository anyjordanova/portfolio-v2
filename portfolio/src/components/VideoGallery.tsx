import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Video {
  id: string
  title: string
  src: string
  thumbnail: string
}

const videos: Video[] = [
  {
    id: '1',
    title: 'Stures Schottis (Traditional Swedish)',
    src: '/videos/stures-schottis.mov',
    thumbnail: '/images/stures-schottis-thumbnail.png'
  },
  {
    id: '2',
    title: "La Valse d'Amélie (Yann Tiersen)",
    src: '/videos/la-valse-d-amelie.mp4',
    thumbnail: '/images/la-valse-d-amelie-thumbnail.png'
  }
]

export function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  return (
    <div className="mt-12">
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mx-2 md:mx-10">
        {videos.map((video) => (
          <div
            key={video.id}
            className="w-full md:w-[400px] cursor-pointer"
            onClick={() => setSelectedVideo(video)}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden group">
              <img
                src={video.thumbnail}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div 
                className="absolute inset-0 bg-white/10 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <svg
                  className="w-16 h-16 text-white drop-shadow-lg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <h3 className="mt-3 text-lg text-center font-medium text-gray-300">
              {video.title}
            </h3>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            
            <motion.div
              layoutId={`video-${selectedVideo.id}`}
              className="w-full max-w-5xl aspect-video relative"
            >
              <video
                src={selectedVideo.src}
                controls
                autoPlay
                className="w-full h-full rounded-lg"
              >
                Váš prohlížeč nepodporuje přehrávání videa.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 