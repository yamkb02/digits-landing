"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
} from "@/lib/hooks/useScrollAnimation";

export default function TargetAudienceSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const personas = [
    {
      title: "Trading Companies",
      description:
        "Import/export businesses needing seamless inventory and supplier management",
      icon: "🌍",
      tags: ["Global Supply Chain", "Multi-Currency", "Compliance"],
    },
    {
      title: "Manufacturing",
      description:
        "Production facilities requiring integrated planning and quality control",
      icon: "🏭",
      tags: ["Production Planning", "Quality Control", "Material Management"],
    },
    {
      title: "Inventory-Heavy Businesses",
      description:
        "Companies with complex stock management and warehouse operations",
      icon: "📦",
      tags: ["Warehouse Management", "Stock Control", "Logistics"],
    },
    {
      title: "Tech-Forward Companies",
      description: "Modern businesses ready to embrace digital transformation",
      icon: "💻",
      tags: ["Digital First", "API Integration", "Cloud Native"],
    },
  ];

  return (
    <section id="about" className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who It&apos;s For
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Digits is built for modern businesses that demand efficiency,
            growth, and competitive advantage.
          </p>
        </AnimatedSection>

        {/* Personas Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
        >
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              variants={fadeInUp}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <div className="text-center">
                <motion.div
                  className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl"
                  whileHover={{
                    scale: 1.15,
                    rotate: 10,
                    transition: { duration: 0.3 },
                  }}
                >
                  {persona.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {persona.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {persona.description}
                </p>
                <motion.div
                  className="flex flex-wrap justify-center gap-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2,
                      },
                    },
                  }}
                >
                  {persona.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          transition: { duration: 0.3 },
                        },
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <AnimatedSection
          animation={scaleIn}
          delay={0.3}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Does your business fit one of these profiles?
          </p>
          <motion.button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover Your Perfect Fit
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  );
}
