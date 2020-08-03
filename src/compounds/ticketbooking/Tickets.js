import React, { useContext, useEffect } from 'react';
import bookingTicketsContext from '../../context/bookingTicket/bookingTicketsContext';
import TicketsList from './TicketsList';
const Tickets = () => {
  const bTContext = useContext(bookingTicketsContext);
  const { getTickets, tickets } = bTContext;
  useEffect(() => {
    getTickets();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>Tickets</h1>
      {tickets.map((ticket) => (
        <TicketsList key={ticket.id} booking={ticket} />
      ))}
    </div>
  );
};

export default Tickets;
