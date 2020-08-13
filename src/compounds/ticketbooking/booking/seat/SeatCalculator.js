import React from 'react';

const SeatCalculator = () => {
  return (
    <div>
      <p>
        Selected {movies.totalSeats} seats and the total price is $
        {movies.totalSeats * movies.moviePrice}
      </p>
    </div>
  );
};

export default SeatCalculator;
