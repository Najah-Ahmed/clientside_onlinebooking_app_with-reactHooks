import React, { useContext, useEffect } from 'react';
import bookingTicketsContext from '../../../context/bookingTicket/bookingTicketsContext';
import SeatAvailablity from './seat/SeatAvailablity';
import SeatMatrix from './seat/SeatMatrix';

const Booking = (props) => {
  const bTContext = useContext(bookingTicketsContext);
  const { loading, error, getSingleTicket, ticket } = bTContext;
  const url = props.location.pathname;
  useEffect(() => {
    if (loading === true && error === null) {
      props.history.push('/');
    }
    if (ticket !== '') {
      getSingleTicket(url);
    }

    // eslint-disable-next-line
  }, [loading, error, ticket]);
  const seat = ticket.bus_no_seat;

  // for (let i = 1; i <= seat; i += 2) {
  //   console.log(i);
  // }

  return (
    <div>
      <SeatMatrix seatno={seat} />
      <SeatAvailablity />{' '}
    </div>
  );
};

export default Booking;
// `/tickets/${booking.id}`
