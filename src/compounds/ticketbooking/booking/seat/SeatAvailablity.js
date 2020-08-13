import React from 'react';
import Seat from './Seat';

const SeatAvailablity = () => {
  return (
    <div className='row'>
      Unoccupied : <Seat seatColor='seat-grey' />
      Occupied : <Seat seatColor='seat-black' />
    </div>
  );
};

export default SeatAvailablity;
