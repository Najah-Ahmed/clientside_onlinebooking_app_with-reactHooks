import React, { useContext, useEffect } from 'react';
import bookingTicketsContext from '../../context/bookingTicket/bookingTicketsContext';
import TicketsList from './TicketsList';
const SearchTicket = (props) => {
  const bTContext = useContext(bookingTicketsContext);
  const { searchTicket, tickets, loading, error } = bTContext;
  useEffect(() => {
    if (loading === true && error === null) {
      props.history.push('/');
    } else {
      searchTicket();
    }

    // eslint-disable-next-line
  }, [loading, error]);

  return (
    <div className=''>
      <h1 className='text-white  text-4xl'>Available Tickets</h1>
      {tickets.map((ticket) => (
        <TicketsList key={ticket.id} booking={ticket} />
      ))}
      {tickets.id}
    </div>
  );
};

export default SearchTicket;
