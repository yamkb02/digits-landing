"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from "@/lib/hooks/useScrollAnimation";

export default function ComingSoonSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const futureFeatures = [
    {
      title: "Digi AI Assistant",
      description:
        "Your intelligent business companion that understands your operations and provides actionable insights.",
      icon: "🤖",
      features: [
        "Natural language queries",
        "Predictive recommendations",
        "Automated decision support",
        "Voice-activated commands",
      ],
      timeline: "Q2 2024",
      status: "In Development",
    },
    {
      title: "AI Migration Tools",
      description:
        "Seamlessly migrate from legacy systems with AI-powered data mapping and validation.",
      icon: "🔄",
      features: [
        "Automated data mapping",
        "Outdated system connectors",
        "Data validation & cleanup",
        "Zero-downtime migration",
      ],
      timeline: "Q3 2024",
      status: "Planning",
    },
    {
      title: "DigiTree Community",
      description:
        "Connect with other Digits users, share best practices, and access collaborative resources.",
      icon: "🌳",
      features: [
        "User forums & discussions",
        "Template marketplace",
        "Best practice sharing",
        "Expert-led workshops",
      ],
      timeline: "Q4 2024",
      status: "Research",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Development":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "Planning":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Research":
        return "bg-purple-100 text-purple-700 border-purple-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <section
      id="roadmap"
      className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-4 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-blue/5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The future of business management is here. Get ready for
            revolutionary features that will transform how you work.
          </p>
        </AnimatedSection>

        {/* Roadmap Timeline */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
        >
          {futureFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={
                index === 0 ? fadeInLeft : index === 1 ? fadeInUp : fadeInRight
              }
            >
              {/* Connecting Line (hidden on mobile) */}
              {index < futureFeatures.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-20 left-full w-8 h-0.5 bg-gradient-to-r from-orange/30 to-blue/30 z-0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                ></motion.div>
              )}

              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:bg-white hover:shadow-xl transition-all duration-300 relative z-10 group"
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="text-center mb-6">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-orange/10 to-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-4xl transform group-hover:scale-110 transition-transform duration-300 border border-gray-200/50"
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div
                    className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-2 border ${getStatusColor(
                      feature.status
                    )}`}
                  >
                    {feature.status}
                  </div>
                  <div className="text-sm text-orange-600 font-medium mb-4">
                    Expected: {feature.timeline}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed text-center">
                  {feature.description}
                </p>

                <motion.ul
                  className="space-y-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.3,
                      },
                    },
                  }}
                >
                  {feature.features.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="flex items-center"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.4 },
                        },
                      }}
                    >
                      <motion.div
                        className="w-5 h-5 bg-gradient-to-r from-orange to-orange-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                        whileHover={{ scale: 1.3 }}
                      >
                        <span className="text-white text-xs">✓</span>
                      </motion.div>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Early Access CTA */}
        <AnimatedSection
          animation={scaleIn}
          delay={0.4}
          className="text-center"
        >
          <div className="relative rounded-2xl p-8 text-white shadow-2xl overflow-hidden">
            {/* Multi-layer gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 via-transparent to-yellow-400/20"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-orange-600/30 to-red-600/20"></div>

            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-yellow-400/40 to-orange-300/40 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-l from-red-400/30 to-orange-400/30 rounded-full blur-2xl animate-pulse delay-700"></div>
              <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-t from-orange-300/50 to-yellow-300/40 rounded-full blur-xl animate-pulse delay-300"></div>
            </div>

            {/* Subtle noise texture overlay */}
            <div
              className="absolute inset-0 opacity-10 mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            ></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-lg">
                🚀 Get Early Access
              </h3>
              <p className="text-xl text-white/95 mb-6 max-w-2xl mx-auto drop-shadow-md">
                Be among the first to experience these revolutionary features.
                Join our early access program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 hover:bg-orange-50 hover:text-orange-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border border-white/20" onClick={scrollToContact}>
                  Join Early Access
                </button>
                <button className="border-2 border-white/80 text-white hover:bg-white/15 hover:border-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm" onClick={scrollToContact}>
                  Get Notified
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
