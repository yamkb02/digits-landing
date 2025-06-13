"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/lib/hooks/useScrollAnimation";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="w-full relative py-20 px-4 overflow-hidden"
    >
      {/* Multi-layer gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 via-transparent to-yellow-400/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-orange-600/30 to-red-600/20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-yellow-400/30 to-orange-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-l from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-t from-orange-300/40 to-yellow-300/30 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <AnimatedSection animation={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Take Control of Your Business Today
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto drop-shadow-md">
            Join a growing number of businesses moving to Digits ERP. Transform
            your operations with intelligent automation.
          </p>
        </AnimatedSection>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.button
            className="bg-white text-orange-600 hover:bg-orange-50 hover:text-orange-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border border-white/20"
            variants={fadeInLeft}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Free Trial
          </motion.button>
          <motion.button
            className="border-2 border-white/80 text-white hover:bg-white/10 hover:border-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
            variants={fadeInRight}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Demo
          </motion.button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
        >
          {[
            {
              icon: "⚡",
              title: "Fast Onboarding",
              subtitle: "Setup in days, not months",
            },
            {
              icon: "🔒",
              title: "Enterprise Security",
              subtitle: "Bank-level encryption",
            },
            {
              icon: "📞",
              title: "24/7 Support",
              subtitle: "Expert help when you need it",
            },
          ].map((badge, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                {badge.icon}
              </motion.div>
              <div className="text-white font-semibold text-lg mb-1">
                {badge.title}
              </div>
              <div className="text-white/80 text-sm">{badge.subtitle}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
