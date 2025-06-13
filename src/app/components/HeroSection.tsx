"use client";

import { motion } from "framer-motion";
import DashboardPreview from "../../components/dashboard-preview";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxWrapper from "@/components/ParallaxWrapper";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "@/lib/hooks/useScrollAnimation";

export default function HeroSection() {
  return (
    <div
      id="home"
      className="w-full bg-gradient-to-br from-orange-50 via-white to-orange-50 pt-32 pb-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-orange/10 to-orange/5"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <AnimatedSection animation={fadeInUp} delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Run Your Business, <br />
            <span className="text-orange">Not Your System.</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection animation={fadeInUp} delay={0.4}>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Digits is the modern ERP system built for businesses that want
            smarter operations, deeper insights, and scalable growth.
          </p>
        </AnimatedSection>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial="hidden"
          whileInView="visible" // Changed from animate to whileInView
          viewport={{ once: false }} // Allow re-animation
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.6,
              },
            },
          }}
        >
          <motion.button
            variants={fadeInLeft}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Free
          </motion.button>
          <motion.button
            variants={fadeInRight}
            className="border-2 border-primary text-orange hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Demo
          </motion.button>
        </motion.div>

        {/* Dashboard Preview with Parallax */}
        <AnimatedSection animation={scaleIn} delay={0.8}>
          <ParallaxWrapper offset={30}>
            <DashboardPreview />
          </ParallaxWrapper>
        </AnimatedSection>
      </div>
    </div>
  );
}
