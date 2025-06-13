import Image from 'next/image';
import Navbar from '@/components/navbar';
import DashboardPreview from '@/components/dashboard-preview';

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        id='home'
        className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-8 pb-20 gap-8 sm:gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] pt-16 sm:pt-20'
      >
        <main className='flex flex-col gap-6 sm:gap-[32px] row-start-2 items-center sm:items-start w-full max-w-4xl'>
          <div className='text-center sm:text-left'>
            <h1 className='text-4xl sm:text-6xl font-bold text-black mb-4'>
              Digits
            </h1>
            <p className='text-lg sm:text-xl text-gray-600 mb-8'>
              Beautiful analytics dashboard for your business
            </p>
          </div>

          {/* Dashboard Preview Animation */}
          <DashboardPreview />

          <div className='flex gap-3 sm:gap-4 items-center flex-col sm:flex-row w-full sm:w-auto mt-8'>
            <a
              className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-black text-white gap-2 hover:bg-gray-800 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto'
              href='#features'
            >
              Get Started
            </a>
            <a
              className='rounded-full border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-gray-50 hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto'
              href='#features'
            >
              Learn More
            </a>
          </div>
        </main>
      </div>

      {/* Add placeholder sections for the navbar links */}
      <section
        id='features'
        className='min-h-screen bg-gray-50 flex items-center justify-center px-4'
      >
        <div className='text-center'>
          <h2 className='text-2xl sm:text-4xl font-bold text-black mb-4'>
            Features Section
          </h2>
          <p className='text-gray-600'>
            Scroll up to see the dashboard animation again!
          </p>
        </div>
      </section>

      <section
        id='pricing'
        className='min-h-screen bg-white flex items-center justify-center px-4'
      >
        <h2 className='text-2xl sm:text-4xl font-bold text-black text-center'>
          Pricing Section
        </h2>
      </section>

      <section
        id='about'
        className='min-h-screen bg-gray-50 flex items-center justify-center px-4'
      >
        <h2 className='text-2xl sm:text-4xl font-bold text-black text-center'>
          About Section
        </h2>
      </section>

      <section
        id='contact'
        className='min-h-screen bg-white flex items-center justify-center px-4'
      >
        <h2 className='text-2xl sm:text-4xl font-bold text-black text-center'>
          Contact Section
        </h2>
      </section>
    </>
  );
}
