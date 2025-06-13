import Image from 'next/image';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        id='home'
        className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-8 pb-20 gap-8 sm:gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] pt-16 sm:pt-20'
      >
        <main className='flex flex-col gap-6 sm:gap-[32px] row-start-2 items-center sm:items-start w-full max-w-4xl'>
          <Image
            className='w-[150px] sm:w-[180px] h-auto dark:invert'
            src='/next.svg'
            alt='Next.js logo'
            width={150}
            height={32}
            priority
          />
          <ol className='list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] px-4 sm:px-0'>
            <li className='mb-2 tracking-[-.01em]'>
              Get started by editing{' '}
              <code className='bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold text-xs sm:text-sm'>
                src/app/page.tsx
              </code>
              .
            </li>
            <li className='tracking-[-.01em]'>
              Save and see your changes instantly.
            </li>
          </ol>

          <div className='flex gap-3 sm:gap-4 items-center flex-col sm:flex-row w-full sm:w-auto'>
            <a
              className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto'
              href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                className='dark:invert'
                src='/vercel.svg'
                alt='Vercel logomark'
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto'
              href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Read our docs
            </a>
          </div>
        </main>
        <footer className='row-start-3 flex gap-4 sm:gap-[24px] flex-wrap items-center justify-center px-4'>
          <a
            className='flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm sm:text-base'
            href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              aria-hidden
              src='/file.svg'
              alt='File icon'
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className='flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm sm:text-base'
            href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              aria-hidden
              src='/window.svg'
              alt='Window icon'
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className='flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm sm:text-base'
            href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              aria-hidden
              src='/globe.svg'
              alt='Globe icon'
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>

      {/* Add placeholder sections for the navbar links */}
      <section
        id='features'
        className='min-h-screen bg-gray-50 flex items-center justify-center px-4'
      >
        <h2 className='text-2xl sm:text-4xl font-bold text-black text-center'>
          Features Section
        </h2>
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
