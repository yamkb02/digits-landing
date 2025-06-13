import { useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export const useScrollAnimation = (threshold: number = 0.1) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    amount: threshold,
    once: true // Animation triggers only once
  })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  return { ref, controls, isInView }
}

// Animation variants
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
}

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
}

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
} 