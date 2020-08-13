import React, { useState, useEffect, useContext } from 'react';
// import { Link } from 'react-router-dom';

import bookingTicketsContext from '../../context/bookingTicket/bookingTicketsContext';

const TicketForm = (props) => {
  const searchTBContext = useContext(bookingTicketsContext);
  const { searchTicket, loading, error, tickets } = searchTBContext;
  useEffect(() => {
    if (error === 'Empty Data') {
      // setAlert(error, 'danger');
      console.log('error');
    }

    if (loading === false && tickets !== null) {
      props.history.push('/searchticket'); //redircated to search result
    } else {
      props.history.push('/');
    }

    //eslint-disable-next-line
  }, [loading, error, props.history]);

  const [ticket, setTicket] = useState({
    currentPlace: '',
    destination: '',
    date: '',
  });
  const { currentPlace, destination, date } = ticket;
  const onChange = (e) =>
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    e.preventDefault();
    if (currentPlace === '' || destination === '') {
      // setAlert('Please Enter All Fields ', 'danger');
      console.log('empty field not allow');
    } else {
      searchTicket({
        currentPlace,
        destination,
        date,
      });
    }
  };
  return (
    <div className='container  py-24 mx-auto justify-center  w-full lg:max-w-full lg:flex   '>
      <section className='text-gray-500 bg-gray-800 body-font rounded overflow-hidden shadow-lg'>
        <div className='container pr-56 sm:pl-3 m:pl-3 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-12'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
              Search Bus for Your Next Journey
            </h1>
          </div>
          <form onSubmit={onSubmit}>
            <div className='flex lg:w-2/3  -m-1 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 '>
              <input
                className='flex-grow  bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0'
                placeholder='Current Place'
                name='currentPlace'
                type='text'
                value={currentPlace}
                onChange={onChange}
              />
              <input
                className='flex-grow  bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0'
                placeholder='Destination'
                name='destination'
                type='text'
                value={destination}
                onChange={onChange}
              />{' '}
              <input
                className='flex-grow  bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0'
                placeholder='Bari or Manta'
                name='date'
                type='text'
                value={date}
                onChange={onChange}
              />{' '}
              {/* // <button className='bg-gray-900 hover:bg-gray-600 text-white  mb-4 sm:mb-0 font-bold py-2 px-4 rounded-l'>
              //   Bari
              // </button>
              // <button className='bg-gray-900 hover:bg-gray-600 text-white font-bold  mb-4 sm:mb-0 py-2 px-4 rounded-r'>
              //   Manta
              // </button> */}
              {/* <select
                id='date'
                name='date'
                className='flex-grow  bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-5 py-2 mr-4 mb-4 sm:mb-0'>
                <option>Date</option>
                <option value='manta' onChange={onChange}>
                  Manta
                </option>
                <option value='bari' onChange={onChange}>
                  Bari
                </option>
              </select> */}
              <button className='text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600  text-lg rounded-full'>
                Search
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default TicketForm;
