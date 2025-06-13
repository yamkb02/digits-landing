import Link from 'next/link'
import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contact Us - Digits ERP',
  description: 'Get in touch with our team to learn more about Digits ERP or schedule a demo.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Navigation - Simple back to home */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-orange-600">digits.</span>
            </Link>
            <Link 
              href="/" 
              className="text-gray-600 hover:text-orange-600 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              Send us a message and we&apos;ll get back to you.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 