'use client';

import { useEffect, useRef, useState } from 'react';

export default function DashboardPreview() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: '-100px 0px', // Add margin for better timing
      }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className='relative w-full max-w-5xl mx-auto px-4 py-12 overflow-hidden'
    >
      <div className='relative' style={{ perspective: '1200px' }}>
        <div
          className={`
            relative w-full rounded-xl shadow-2xl overflow-hidden
            transform transition-all duration-1500 ease-out
            ${
              isVisible
                ? 'rotateX-0 translate-y-0 scale-100 opacity-100'
                : 'rotateX-75 translate-y-16 scale-90 opacity-80'
            }
          `}
          style={{
            transformStyle: 'preserve-3d',
            transformOrigin: 'center bottom',
          }}
        >
          {/* Dashboard mockup */}
          <div className='bg-white rounded-xl p-6 sm:p-8 shadow-xl border border-gray-200'>
            {/* Browser-like header */}
            <div className='flex items-center justify-between mb-6 pb-4 border-b border-gray-200'>
              <div className='flex items-center space-x-3'>
                <div className='flex space-x-2'>
                  <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                  <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                  <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                </div>
                <div className='text-sm text-gray-500 ml-4'>
                  digits-dashboard.com
                </div>
              </div>
              <h3 className='text-xl font-bold text-gray-900'>
                Analytics Dashboard
              </h3>
            </div>

            {/* Mock dashboard content */}
            <div className='space-y-6'>
              {/* Stats Cards */}
              <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4'>
                <div className='bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200'>
                  <div className='text-2xl font-bold text-blue-700'>12,540</div>
                  <div className='text-sm text-blue-600'>Active Users</div>
                  <div className='text-xs text-green-600 mt-1'>↗ +12.5%</div>
                </div>
                <div className='bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200'>
                  <div className='text-2xl font-bold text-green-700'>
                    $89,420
                  </div>
                  <div className='text-sm text-green-600'>Revenue</div>
                  <div className='text-xs text-green-600 mt-1'>↗ +8.2%</div>
                </div>
                <div className='bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200'>
                  <div className='text-2xl font-bold text-purple-700'>
                    94.2%
                  </div>
                  <div className='text-sm text-purple-600'>Conversion</div>
                  <div className='text-xs text-green-600 mt-1'>↗ +2.1%</div>
                </div>
                <div className='bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200'>
                  <div className='text-2xl font-bold text-orange-700'>2.4s</div>
                  <div className='text-sm text-orange-600'>Avg Load Time</div>
                  <div className='text-xs text-red-600 mt-1'>↘ -0.3s</div>
                </div>
              </div>

              {/* Mock chart area */}
              <div className='bg-gradient-to-br from-gray-50 to-gray-100 h-40 rounded-lg flex items-center justify-center border border-gray-200 relative overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10'></div>
                <div className='text-gray-600 text-lg font-medium z-10'>
                  📈 Revenue Analytics Chart
                </div>
                {/* Mock chart lines */}
                <div className='absolute bottom-0 left-0 w-full h-16 opacity-30'>
                  <div className='flex items-end justify-between h-full px-4'>
                    {[40, 60, 30, 80, 50, 90, 70, 85].map((height, i) => (
                      <div
                        key={i}
                        className='bg-blue-500 w-6 rounded-t'
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mock table */}
              <div className='bg-white rounded-lg border border-gray-200'>
                <div className='px-4 py-3 border-b border-gray-200'>
                  <h4 className='font-semibold text-gray-900'>
                    Recent Transactions
                  </h4>
                </div>
                <div className='divide-y divide-gray-200'>
                  <div className='hidden sm:grid grid-cols-4 gap-4 px-4 py-3 text-sm font-medium text-gray-700 bg-gray-50'>
                    <div>Customer</div>
                    <div>Amount</div>
                    <div>Status</div>
                    <div>Date</div>
                  </div>
                  {[
                    {
                      name: 'Sarah Johnson',
                      amount: '$1,234',
                      status: 'Completed',
                      date: 'Dec 10',
                    },
                    {
                      name: 'Mike Chen',
                      amount: '$892',
                      status: 'Pending',
                      date: 'Dec 9',
                    },
                    {
                      name: 'Emily Davis',
                      amount: '$2,100',
                      status: 'Completed',
                      date: 'Dec 8',
                    },
                  ].map((item, i) => (
                    <div key={i}>
                      {/* Desktop table row */}
                      <div className='hidden sm:grid grid-cols-4 gap-4 px-4 py-3 text-sm text-gray-600'>
                        <div className='font-medium'>{item.name}</div>
                        <div className='font-semibold'>{item.amount}</div>
                        <div
                          className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                            item.status === 'Completed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {item.status}
                        </div>
                        <div>{item.date}</div>
                      </div>
                      {/* Mobile card view */}
                      <div className='sm:hidden px-4 py-3 space-y-2'>
                        <div className='flex justify-between items-center'>
                          <span className='font-medium text-gray-900'>{item.name}</span>
                          <span className='font-semibold text-gray-700'>{item.amount}</span>
                        </div>
                        <div className='flex justify-between items-center'>
                          <span
                            className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                              item.status === 'Completed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {item.status}
                          </span>
                          <span className='text-sm text-gray-500'>{item.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
