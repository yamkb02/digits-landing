import Logo from './Logo'

export default function Footer() {
  const productLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Modules', href: '#modules' },
  ];

  const resourceLinks = [
    { name: 'Documentation', href: '#docs' },
    { name: 'API Reference', href: '#api' },
    { name: 'Help Center', href: '#help' },
    { name: 'Community', href: '#community' },
  ];

  const companyLinks = [
    { name: 'About', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Success Stories', href: '#testimonials' },
  ];

  return (
    <footer className='w-full bg-white text-gray-900 py-16 px-4'>
      <div className='max-w-7xl mx-auto'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'>
          {/* Company Info */}
          <div className='col-span-1'>
            <div className='mb-4'>
              <Logo className='h-8 w-auto' />
            </div>
            <p className='text-gray-600 mb-6'>
              Modern ERP system for businesses that want smarter operations,
              deeper insights, and scalable growth.
            </p>
            <p className='text-gray-500 text-sm'>
              Built for the future of business management.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className='font-semibold text-gray-900 mb-4'>Product</h4>
            <ul className='space-y-3'>
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className='text-gray-600 hover:text-gray-900 transition-colors'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resource Links */}
          <div>
            <h4 className='font-semibold text-gray-900 mb-4'>Resources</h4>
            <ul className='space-y-3'>
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className='text-gray-600 hover:text-gray-900 transition-colors'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className='font-semibold text-gray-900 mb-4'>Company</h4>
            <ul className='space-y-3'>
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className='text-gray-600 hover:text-gray-900 transition-colors'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='border-t border-gray-200 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-500 text-sm mb-4 md:mb-0'>
              Copyright © 2024 Digits. All rights reserved
            </p>
            <div className='flex space-x-6'>
              <a
                href='#terms'
                className='text-gray-500 hover:text-gray-900 text-sm transition-colors'
              >
                Terms of Service
              </a>
              <a
                href='#privacy'
                className='text-gray-500 hover:text-gray-900 text-sm transition-colors'
              >
                Privacy Policy
              </a>
              <a
                href='#security'
                className='text-gray-500 hover:text-gray-900 text-sm transition-colors'
              >
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}