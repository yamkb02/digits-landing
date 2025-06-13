"use client";

import { motion, Variants } from "framer-motion";
import { useScrollAnimation, fadeInUp } from "@/lib/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: Variants;
  threshold?: number;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = fadeInUp,
  threshold = 0.1,
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, controls } = useScrollAnimation(threshold);

  const animationWithDelay =
    delay > 0
      ? {
          ...animation,
          visible: {
            ...animation.visible,
            transition: {
              ...(typeof animation.visible === "object" &&
              "transition" in animation.visible
                ? animation.visible.transition
                : {}),
              delay,
            },
          },
        }
      : animation;

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
  );
}
