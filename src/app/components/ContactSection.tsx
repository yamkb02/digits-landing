'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from '@/lib/hooks/useScrollAnimation'

interface FormData {
  name: string
  email: string
  message: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  message: ''
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData(initialFormData)
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Drop us a line anytime',
      detail: 'support@digits-erp.com'
    },
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Mon-Fri from 8am to 5pm',
      detail: '+63 9457564524'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'We\'re here to help',
      detail: 'facebook.com/hatchitsolutions'
    }
  ]

  return (
    <section id="contact" className="w-full bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-l from-orange-400/15 to-pink-400/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? We&apos;d love to hear from you. 
            Let&apos;s start a conversation about your needs.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Methods */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            <AnimatedSection animation={fadeInLeft}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Connect With Our Team
              </h3>
            </AnimatedSection>
            
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl border border-white/50 transition-all duration-300 group"
                variants={fadeInLeft}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    {method.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {method.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      {method.description}
                    </p>
                    <p className="text-blue-600 font-medium">
                      {method.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInRight}
          >
            {submitStatus === 'success' ? (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  ✓
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <motion.button 
                  onClick={() => setSubmitStatus('idle')}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send another message →
                </motion.button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileFocus={{ scale: 1.02 }}
                    >
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                        placeholder="Enter your name"
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileFocus={{ scale: 1.02 }}
                    >
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileFocus={{ scale: 1.01 }}
                  >
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70 resize-none"
                      placeholder="Tell us about your project, questions, or how we can help..."
                    />
                  </motion.div>

                  {submitStatus === 'error' && (
                    <motion.div 
                      className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <span className="text-red-500 text-xl">⚠️</span>
                      <div>
                        <p className="text-red-700 font-medium">Something went wrong</p>
                        <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                      </div>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:-translate-y-1 shadow-lg hover:shadow-xl'
                    } text-white`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <motion.span 
                        className="flex items-center justify-center space-x-2"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        <span>Sending Message...</span>
                      </motion.span>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <span>Send Message</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
        >
          {[
            { icon: '⚡', title: 'Quick Response', subtitle: 'Within 24 hours' },
            { icon: '🔒', title: 'Secure & Private', subtitle: 'Your data is protected' },
            { icon: '🎯', title: 'Personalized Solutions', subtitle: 'Tailored to your needs' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center border border-white/50 hover:bg-white/80 transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                {item.icon}
              </motion.div>
              <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 