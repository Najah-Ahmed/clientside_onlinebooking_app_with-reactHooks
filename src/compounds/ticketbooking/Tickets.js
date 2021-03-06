import React, { useContext, useEffect } from 'react';
import bookingTicketsContext from '../../context/bookingTicket/bookingTicketsContext';
import TicketsList from './TicketsList';
import authContext from '../../context/auth/authContext';
const Tickets = () => {
  const bTContext = useContext(bookingTicketsContext);
  const AuthContext = useContext(authContext);
  const { getTickets, tickets } = bTContext;
  const { loadUser } = AuthContext;
  useEffect(() => {
    getTickets();
    loadUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=''>
      <h1 className='text-white  text-4xl pl-40'>Available Tickets</h1>
      {tickets.map((ticket) => (
        <TicketsList key={ticket.id} booking={ticket} />
      ))}
      {tickets.id}
    </div>
  );
};

export default Tickets;
