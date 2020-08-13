import React, { useContext } from 'react';
import './styles/main.css';
import './styles/seat.css';
import bookingTicketsContext from '../../../../context/bookingTicket/bookingTicketsContext';

const Seat = (props) => {
  const BTContext = useContext(bookingTicketsContext);
  const { seats, tickets } = BTContext;
  const seatNumber = props.seatno;
  const seatStatus = props.seatColor ? props.seatColor : 'seat-grey';

  const seatClickHandler = (event, seatNumber) => {
    event.stopPropagation();
    const seatColor = document.querySelector(`.seat-${seatNumber}`).classList;
    if (tickets.seatNumbers.includes(seatNumber)) {
      const newTicketseats = tickets.seatNumbers.filter((seat) => {
        return seat !== seatNumber;
      });
      seatColor.remove('seat-black');
      seatColor.add('seat-grey');
      seats.changeState({
        ...tickets,
        seatNumbers: newTicketseats,
        totalSeats: tickets.totalSeats - 1,
      });
    } else {
      seatColor.remove('seat-grey');
      seatColor.add('seat-black');
      seats.changeState({
        ...tickets,
        seatNumbers: [...tickets.seatNumbers, seatNumber],
        totalSeats: tickets.totalSeats + 1,
      });
    }
  };

  return (
    <div className='col-2 col-md-2'>
      <div
        className={`seat seat-${seatNumber} ${seatStatus}`}
        onClick={(e) => seatClickHandler(e, props.seatno)}
      />
    </div>
  );
};

export default Seat;
