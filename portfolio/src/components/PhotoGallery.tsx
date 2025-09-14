import { useRef, useEffect, useState, useMemo } from 'react'
import { motion, useSpring } from 'framer-motion'

// Předpřipravené URL s optimalizovanou velikostí
const photos = [
  {
    src: '/images/gallery/01.jpg',
    alt: 'Příroda'
  },
  {
    src: '/images/gallery/02.jpg',
    alt: 'Vodopád'
  },
  {
    src: '/images/gallery/05.jpg',
    alt: 'Les'
  }
]

export function PhotoGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)
  const [autoScrollDirection, setAutoScrollDirection] = useState<'left' | 'right' | null>(null)
  const scrollX = useSpring(0, {
    stiffness: 500,
    damping: 50,
    restDelta: 0.5
  })

  // Předběžné načtení obrázků
  useEffect(() => {
    photos.forEach(photo => {
      const img = new Image()
      img.src = photo.src
    })
  }, [])

  // Throttlovaná verze updateWidths
  useEffect(() => {
    if (!containerRef.current) return

    let timeoutId: ReturnType<typeof setTimeout>

    const updateWidths = () => {
      if (!containerRef.current) return
      setContainerWidth(containerRef.current.clientWidth)
      setContentWidth(containerRef.current.scrollWidth)
    }

    const throttledUpdateWidths = () => {
      if (timeoutId) return
      timeoutId = setTimeout(() => {
        updateWidths()
        timeoutId = null as any
      }, 100)
    }

    updateWidths()
    window.addEventListener('resize', throttledUpdateWidths)
    return () => {
      window.removeEventListener('resize', throttledUpdateWidths)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  // Memoizovaný maxScroll
  const maxScroll = useMemo(() => {
    return Math.max(-(contentWidth - containerWidth), -200)
  }, [contentWidth, containerWidth])

  useEffect(() => {
    if (!autoScrollDirection) return

    const speed = 100
    let lastTime = performance.now()
    
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime
      const currentScroll = scrollX.get()
      let newScroll = currentScroll

      // Pohyb závislý na čase pro konzistentní rychlost
      const frameSpeed = (speed * deltaTime) / 16.666

      if (autoScrollDirection === 'right') {
        newScroll = Math.min(currentScroll + frameSpeed, 0)
      } else if (autoScrollDirection === 'left') {
        newScroll = Math.max(currentScroll - frameSpeed, maxScroll)
      }

      if (newScroll !== currentScroll) {
        scrollX.set(newScroll)
      }
      
      lastTime = currentTime
      animationFrame = requestAnimationFrame(animate)
    }
    
    let animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [autoScrollDirection, maxScroll])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const isInLeftHalf = mouseX < rect.width / 2
    const currentScroll = scrollX.get()

    if (isInLeftHalf) {
      if (currentScroll < 0) {
        setAutoScrollDirection('right')
      } else {
        setAutoScrollDirection(null)
      }
    } else {
      if (currentScroll > maxScroll) {
        setAutoScrollDirection('left')
      } else {
        setAutoScrollDirection(null)
      }
    }
  }

  const handleMouseLeave = () => {
    setAutoScrollDirection(null)
  }

  // const handleTouchMove = (e: React.TouchEvent) => {
  //   if (!containerRef.current || e.touches.length !== 1) return
    
  //   const container = containerRef.current
  //   const rect = container.getBoundingClientRect()
  //   const touchX = e.touches[0].clientX - rect.left
  //   const isInLeftHalf = touchX < rect.width / 2
  //   const currentScroll = scrollX.get()
  //   const maxScroll = -(contentWidth - containerWidth)

  //   if (isInLeftHalf) {
  //     if (currentScroll < 0) {
  //       setAutoScrollDirection('right')
  //     } else {
  //       setAutoScrollDirection(null)
  //     }
  //   } else {
  //     if (currentScroll > maxScroll) {
  //       setAutoScrollDirection('left')
  //     } else {
  //       setAutoScrollDirection(null)
  //     }
  //   }
  // }

  // const handleTouchEnd = () => {
  //   setAutoScrollDirection(null)
  // }

  return (
    <motion.div 
      className="w-full max-w-5xl mx-auto relative overflow-hidden flex content-center items-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={containerRef}
        style={{ x: scrollX }}
        className="flex gap-8 select-none -mx-[200px] px-[200px] py-10"
      >
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 relative items-center content-center"
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="max-h-[300px] sm:max-h-[500px] object-cover "
              draggable="false"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
} 