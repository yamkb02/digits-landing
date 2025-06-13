'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp } from '@/lib/hooks/useScrollAnimation'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: any
  threshold?: number
  delay?: number
}

export default function AnimatedSection({ 
  children, 
  className = '',
  animation = fadeInUp,
  threshold = 0.1,
  delay = 0
}: AnimatedSectionProps) {
  const { ref, controls } = useScrollAnimation(threshold)

  const animationWithDelay = {
    ...animation,
    visible: {
      ...animation.visible,
      transition: {
        ...animation.visible.transition,
        delay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationWithDelay}
      className={className}
    >
      {children}
    </motion.div>
  )
} 