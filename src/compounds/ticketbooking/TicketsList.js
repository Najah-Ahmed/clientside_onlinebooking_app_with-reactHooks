import React from 'react';
import { Link } from 'react-router-dom';

const TicketsList = ({ booking }) => {
  return (
    <div>
      <li>
        <Link to={`/tickets/${booking.id}`}>
          ticket=>
          {booking.arriced_place}, {booking.destination_place}
        </Link>
      </li>
    </div>
  );
};

export default TicketsList;
