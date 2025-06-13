"use client";

import AnimatedSection from "@/components/AnimatedSection";
import {
  fadeInUp,
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


      </div>
    </section>
  );
}
