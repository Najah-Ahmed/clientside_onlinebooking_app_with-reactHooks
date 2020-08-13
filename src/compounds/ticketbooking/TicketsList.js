import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import authContext from '../../context/auth/authContext';

const TicketsList = ({ booking }) => {
  const AuthContext = useContext(authContext);
  const { isAdmin } = AuthContext;
  useEffect(() => {
    // loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='antialiased bg-gray-900 text-white font-sans p-8'>
      <div className='flex  items-center justify-center '>
        <div className='max-w-lg md:max-w-6xl px-2'>
          {' '}
          <div className='bg-white shadow-xl rounded-lg overflow-hidden md:flex'>
            <div
              className='bg-cover bg-bottom h-56 md:h-auto md:w-56'
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1581025026681-4ed822ae7a15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80)',
              }}></div>
            <div>
              <div className='p-4 md:p-5'>
                <p className='font-bold text-xl md:text-2xl'>
                  Bari and Galbeed Tour
                </p>
                <h3 className='text-gray-700 md:text-lg'>
                  From:{booking.arriced_place} {'    '}
                  || {'    '} To:{booking.destination_place}
                </h3>
              </div>
              <div className='p-4 md:p-5 bg-gray-100'>
                <div className='sm:flex sm:justify-between sm:items-center'>
                  <div>
                    <div className='text-lg text-gray-700'>
                      <span className='text-gray-900 font-bold'>
                        {booking.bus_no_seat}
                      </span>{' '}
                      per person*
                    </div>
                    <div className='flex items-center'></div>
                  </div>
                  <div className='mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6'>
                    {isAdmin === true ? (
                      <Link
                        to={`/ticket/edit/${booking.id}`}
                        className=' mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-blue-900 hover:bg-blue-600 font-bold text-white md:text-lg rounded-lg shadow-md'>
                        Edit
                      </Link>
                    ) : (
                      <Link
                        to={`/ticket/${booking.id}`}
                        className='mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-indigo-700 hover:bg-indigo-600 font-bold text-white md:text-lg rounded-lg shadow-md'>
                        Book now
                      </Link>
                    )}
                  </div>
                </div>
                <div className='mt-3 text-gray-600 text-sm md:text-base'>
                  <div className='px-6 py-4'>
                    <span className='inline-block bg-orange-700 rounded-full hover:bg-orange-500 px-3 py-1 text-sm font-semibold text-white mr-2'>
                      Price:*{booking.price_per_seat} Slsh.
                      <small>per Seat</small>
                    </span>

                    <span className='inline-block bg-indigo-700 rounded-full hover:bg-indigo-500 px-3 py-1 text-sm font-semibold text-white mr-2'>
                      Wakhtiga la Baxayoo:*{booking.time_of_arrived}
                      <small></small>
                    </span>

                    <span className='inline-block bg-green-700 rounded-full hover:bg-green-500 px-3 py-1 text-sm font-semibold text-white mr-2'>
                      Wakhtiga Socdala:*{booking.time_of_journery}
                      <small></small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketsList;
