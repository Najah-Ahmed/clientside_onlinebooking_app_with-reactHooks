import React, { useContext, useEffect } from 'react';
import authContext from '../../context/auth/authContext';

const TicketForm = () => {
  const userContext = useContext(authContext);
  const { loadUser, isAdmin } = userContext;
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
  if (isAdmin === true) {
    console.log('admin');
  } else console.log('No admin');
  return (
    <section className='text-gray-500 bg-gray-900 body-font relative'>
      <div className='container px-5 py-16 mx-auto'>
        <div className='flex flex-col text-center w-full mb-12'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
            Create Ticket
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>Admin </p>
        </div>
        <div className='lg:w-1/2 md:w-2/3 mx-auto'>
          <div className='flex flex-wrap -m-2'>
            <div className='p-2 w-1/2'>
              <input
                className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                placeholder='Arrived Place'
                type='text'
              />
            </div>
            <div className='p-2 w-1/2'>
              <input
                className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                placeholder='destination'
                type='text'
              />
            </div>
            <div className='p-2 w-1/2'>
              <input
                className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                placeholder='Bus_Id'
                type='text'
              />
            </div>
            <div className='p-2 w-1/2'>
              <input
                className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                placeholder='Bus Number Seats'
                type='text'
              />
            </div>
            <div className='p-2 w-1/2'>
              <input
                className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                placeholder='price per seat'
                type='text'
              />
            </div>
            <div className='p-2 w-1/2'>
              <input
                className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                placeholder='Time of Journey'
                type='text'
              />
            </div>
            <div className='p-2 w-1/2'>
              <input
                className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                placeholder='Time of Arrived'
                type='text'
              />
            </div>
            <div className='p-2 w-1/2'>
              <input
                className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                placeholder='wakhtiga'
                type='text'
              />
            </div>
            <div className='p-2 w-full'>
              <input
                className='w-full  rounded  border-gray-700 justify-center
                  focus:border-indigo-500 text-base px-4 py-2 
                flex mx-auto text-white bg-indigo-500 border-0  focus:outline-none hover:bg-indigo-600 rounded text-lg'
                value='Add Ticket'
                type='submit'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketForm;
