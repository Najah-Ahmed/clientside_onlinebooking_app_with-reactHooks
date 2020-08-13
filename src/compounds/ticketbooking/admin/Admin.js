import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <section className='text-gray-500 body-font bg-gray-900'>
      <div className='container px-5 py-8 mx-auto'>
        <div className='flex flex-wrap w-full mb-20 flex-col items-center text-center'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-white'>
            Admin Dashboard
          </h1>
          <p className='lg:w-1/2 w-full leading-relaxed text-base'>
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className='flex flex-wrap -m-4'>
          <div className='xl:w-1/3 md:w-1/2 p-4'>
            <div className='bg-gray-800 p-6 rounded-lg'>
              <img
                className='h-40 rounded w-full object-cover object-center mb-6'
                src={`https://images.unsplash.com/photo-1518206075495-4e901709d372?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80`}
                alt='content'
              />
              <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                ADMIN
              </h3>
              <h2 className='text-lg text-white font-medium title-font mb-4 hover:text-indigo-300'>
                <Link to='/tickets'>Tickets</Link>
              </h2>
              <p className='leading-relaxed text-base'>
                To manage ,Create ,Update and Delete Tickets.
              </p>
            </div>
          </div>
          <div className='xl:w-1/3 md:w-1/2 p-4'>
            <div className='bg-gray-800 p-6 rounded-lg'>
              <img
                className='h-40 rounded w-full object-cover object-center mb-6'
                src={`https://images.unsplash.com/photo-1572675339312-3e8b094a544d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80`}
                alt='content'
              />
              <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                ADMIN
              </h3>
              <h2 className='text-lg text-white font-medium title-font mb-4 hover:text-indigo-300'>
                <Link to='/booking'>Booking</Link>
              </h2>
              <p className='leading-relaxed text-base'>
                To manage ,Create ,Update and Delete Bookings.
              </p>
            </div>
          </div>
          <div className='xl:w-1/3 md:w-1/2 p-4'>
            <div className='bg-gray-800 p-6 rounded-lg'>
              <img
                className='h-40 rounded w-full object-cover object-center mb-6'
                src={`https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80`}
                alt='content'
              />
              <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                ADMIN
              </h3>
              <h2 className='text-lg text-white font-medium title-font mb-4 hover:text-indigo-300'>
                <Link to='/user'>User</Link>
              </h2>
              <p className='leading-relaxed text-base'>
                To manage and Approved Stuff Users.
              </p>
            </div>
          </div>
          <div className='xl:w-1/3 md:w-1/2 p-4'>
            <div className='bg-gray-800 p-6 rounded-lg'>
              <img
                className='h-40 rounded w-full object-cover object-center mb-6'
                src={`https://images.unsplash.com/photo-1584629557772-c18fd73a26be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80`}
                alt='content'
              />
              <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                ADMIN
              </h3>
              <h2 className='text-lg text-white font-medium title-font mb-4 hover:text-indigo-300'>
                <Link to='/feedback'>Feedback</Link>
              </h2>
              <p className='leading-relaxed text-base'>
                To manage and Read a User Feedbacks
              </p>
            </div>
          </div>
          <div className='xl:w-1/3 md:w-1/2 p-4'>
            <div className='bg-gray-800 p-6 rounded-lg'>
              <img
                className='h-40 rounded w-full object-cover object-center mb-6'
                src={`https://images.unsplash.com/photo-1592499880089-78d628353888?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80`}
                alt='content'
              />
              <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                ADMIN
              </h3>
              <h2 className='text-lg text-white font-medium title-font mb-4 hover:text-indigo-300'>
                <Link to='/payment'>Payment</Link>
              </h2>
              <p className='leading-relaxed text-base'>
                To manage Income and Refunds .
              </p>
            </div>
          </div>
          <div className='xl:w-1/3 md:w-1/2 p-4'>
            <div className='bg-gray-800 p-6 rounded-lg'>
              <img
                className='h-40 rounded w-full object-cover object-center mb-6'
                src={`https://images.unsplash.com/photo-1545287072-e39ac363b3c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80`}
                alt='content'
              />
              <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                ADMIN
              </h3>
              <h2 className='text-lg text-white font-medium title-font mb-4 hover:text-indigo-300'>
                <Link to='/pacakage'>Pacakage</Link>
              </h2>
              <p className='leading-relaxed text-base'>To manage Pacakages</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
