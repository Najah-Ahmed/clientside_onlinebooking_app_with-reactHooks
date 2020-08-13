import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <section className='text-gray-500 bg-gray-900 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap w-full mb-20 flex-col items-center text-center'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-white'>
            User Dashboard
          </h1>
          <p className='lg:w-1/2 w-full leading-relaxed text-base'>
            User can View All his/her Activity
          </p>
        </div>
        <div className='flex flex-wrap -m-4 '>
          <div className='p-4 lg:w-1/3 hover:bg-orange-600'>
            <div className='h-full bg-gray-800 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative '>
              <h1 className='title-font sm:text-2xl text-xl font-medium text-white mb-3'>
                Payments
              </h1>
              <p className='leading-relaxed mb-3'>payment checkouts</p>

              <Link
                to='/payment'
                className='text-orange-500 text-semibold inline-flex items-center'>
                View All
                <svg
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <path d='M5 12h14' />
                  <path d='M12 5l7 7-7 7' />
                </svg>
              </Link>
            </div>
          </div>
          <div className='p-4 lg:w-1/3 hover:bg-orange-600'>
            <div className='h-full bg-gray-800 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative '>
              <h1 className='title-font sm:text-2xl text-xl font-medium text-white mb-3'>
                Bookings
              </h1>
              <p className='leading-relaxed mb-3'>make Changes</p>

              <Link
                to='/booking'
                className='text-orange-500 text-semibold inline-flex items-center'>
                View All
                <svg
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <path d='M5 12h14' />
                  <path d='M12 5l7 7-7 7' />
                </svg>
              </Link>
            </div>
          </div>
          <div className='p-4 lg:w-1/3 hover:bg-orange-600'>
            <div className='h-full bg-gray-800 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative '>
              <h1 className='title-font sm:text-2xl text-xl font-medium text-white mb-3'>
                Make Feedback
              </h1>
              <p className='leading-relaxed mb-3'>
                leave us feedback or reports
              </p>
              <Link
                to='/feedback'
                className='text-orange-500 text-semibold inline-flex items-center'>
                View All
                <svg
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <path d='M5 12h14' />
                  <path d='M12 5l7 7-7 7' />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <Link
          to='/'
          className='flex mx-auto mt-16 text-white justify-center bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
          New Booking
        </Link>
      </div>
    </section>
  );
};

export default Dashboard;
