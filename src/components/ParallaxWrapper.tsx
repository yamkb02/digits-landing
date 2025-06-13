'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ParallaxWrapperProps {
  children: ReactNode
  offset?: number
  className?: string
}

export default function ParallaxWrapper({ 
  children, 
  offset = 50,
  className = '' 
}: ParallaxWrapperProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, offset])

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 