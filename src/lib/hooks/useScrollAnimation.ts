import { useEffect, useRef } from "react";
import { useAnimation, useInView, Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function useScrollAnimation(threshold: number = 0.1) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    amount: threshold, // Changed from 'threshold' to 'amount'
    // Remove the 'once' option to allow re-triggering
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      // Reset to hidden when out of view
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return { ref, controls };
}
