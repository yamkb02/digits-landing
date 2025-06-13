'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

export default function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Check if we've scrolled to the "about" section (Who It's For)
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      const sectionTop = aboutSection.offsetTop
      if (latest >= sectionTop - 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
  })

  const scrollToTop = () => {
    const homeSection = document.getElementById('home')
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.button
        onClick={scrollToTop}
        className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-orange-600 hover:to-orange-700 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </motion.button>
    </motion.div>
  )
} 