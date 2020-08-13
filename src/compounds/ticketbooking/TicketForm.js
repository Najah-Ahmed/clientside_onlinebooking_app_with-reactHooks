import React, { useState, useContext, useEffect } from 'react';
import authContext from '../../context/auth/authContext';
import bookingTicketsContext from '../../context/bookingTicket/bookingTicketsContext';

const TicketForm = () => {
  const userContext = useContext(authContext);
  const ticketContext = useContext(bookingTicketsContext);
  const { loadUser, isAdmin } = userContext;
  const { createTickets } = ticketContext;
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const [ticket, setTicket] = useState({
    arrivedPlace: '',
    destination: '',
    busId: '',
    busSeats: '',
    pricePerSeat: '',
    timeJournery: '',
    timeOfArrived: '',
    wakhtiga: '',
  });
  const {
    arrivedPlace,
    destination,
    busId,
    busSeats,
    pricePerSeat,
    timeJournery,
    timeOfArrived,
    wakhtiga,
  } = ticket;
  const onChange = (e) =>
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    e.preventDefault();
    if (arrivedPlace === '' || destination === '' || busId === '') {
      // setAlert('Please Enter All Fields ', 'danger');
      console.log('empty field not allow');
    } else if (isAdmin !== true) {
      // setAlert('Password Do Not Match ', 'danger');
      console.log('NOT have Admin Privages');
    } else {
      createTickets({
        arrivedPlace,
        destination,
        busId,
        busSeats,
        pricePerSeat,
        timeJournery,
        timeOfArrived,
        wakhtiga,
      });
      // console.log(
      //   arrivedPlace,
      //   timeJournery,
      //   busId,
      //   pricePerSeat,
      //   destination,
      //   busSeats,
      //   timeOfArrived,
      //   wakhtiga
      // );
    }
  };
  return (
    <section className='text-gray-500 bg-gray-900 body-font relative'>
      <div className='container px-5 py-16 mx-auto'>
        <form onSubmit={onSubmit}>
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
                  name='arrivedPlace'
                  type='text'
                  value={arrivedPlace}
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='destination'
                  type='text'
                  name='destination'
                  value={destination}
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='Bus Id'
                  type='text'
                  name='busId'
                  value={busId}
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='Bus Number Seats'
                  type='text'
                  name='busSeats'
                  value={busSeats}
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='price per seat'
                  type='text'
                  name='pricePerSeat'
                  value={pricePerSeat}
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='Time of Journey'
                  type='text'
                  name='timeJournery'
                  value={timeJournery}
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='Time of Arrived'
                  type='text'
                  name='timeOfArrived'
                  value={timeOfArrived}
                  onChange={onChange}
                />
              </div>
              <div className='p-2 w-1/2'>
                <input
                  className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                  placeholder='wakhtiga'
                  type='text'
                  name='wakhtiga'
                  value={wakhtiga}
                  onChange={onChange}
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
        </form>
      </div>
    </section>
  );
};

export default TicketForm;
