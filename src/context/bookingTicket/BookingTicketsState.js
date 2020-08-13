import React, { useReducer } from 'react';
import axios from 'axios';
import bookingTicketsContext from './bookingTicketsContext';
import bookingTicketsReducer from './bookingTicketsReducer';
import {
  GET_TICKETS,
  GET_SINGLE_TICKET,
  ADD_TICKETS,
  DELETE_TICKETS,
  SEARCH_TICKETS,
  UPDATE_TICKETS,
  BOOKING_TICKET,
  TICKET_ERROR,
  CANCEL_TICKET,
  BOOKING_TICKET_ERROR,
  SEARCH_TICKET_ERROR,
} from '../types';
const Authtoken = localStorage.getItem('token');
const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${Authtoken}`,
  },
};
const initialState = {
  booking: {},
  tickets: [],
  ticket: {},
  loading: true,
  error: null,
  alert: {},
  seat: null,
};
export const BookingTicketsState = ({ children }) => {
  const [state, dispatch] = useReducer(bookingTicketsReducer, initialState);
  //get tickets
  const getTickets = async () => {
    try {
      const res = await axios.get('/tickets');
      dispatch({
        type: GET_TICKETS,
        payload: res.data.tickets,
      });
    } catch (err) {
      dispatch({
        type: TICKET_ERROR,
        payload: err.response.status,
      });
    }
  };
  const createTickets = async (formDate) => {
    try {
      const res = await axios.post('/tickets', formDate, config);
      dispatch({
        type: ADD_TICKETS,
        payload: res.data.message,
      });
    } catch (err) {
      dispatch({
        type: TICKET_ERROR,
        payload: err.response.status,
      });
    }
  };
  //single ticket
  const getSingleTicket = async (url) => {
    try {
      const res = await axios.get(`${url}`, config);
      dispatch({
        type: GET_SINGLE_TICKET,
        payload: res.data.result,
      });
    } catch (err) {
      dispatch({
        type: BOOKING_TICKET_ERROR,
        payload: err.response.status,
      });
    }
  };
  const updateTicket = async (ticket) => {
    try {
      const res = await axios.put(`/ticket/${ticket.id}`, config);
      dispatch({
        type: UPDATE_TICKETS,
        payload: res.data.message,
      });
    } catch (err) {
      dispatch({
        type: BOOKING_TICKET_ERROR,
        payload: err.response.status,
      });
    }
  };
  const deleteTicket = async (id) => {
    try {
      const res = await axios.delete(`/ticket/${id}`, config);
      dispatch({
        type: DELETE_TICKETS,
        payload: res.data.message,
      });
    } catch (err) {
      dispatch({
        type: BOOKING_TICKET_ERROR,
        payload: err.response.data,
      });
    }
  };

  const searchTicket = async (data) => {
    try {
      const res = await axios.get(
        `/bookings/?arrived=${data.currentPlace}&destination=${data.destination}&date=${data.date}`
      );
      dispatch({
        type: SEARCH_TICKETS,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: SEARCH_TICKET_ERROR,
        payload: err.response,
      });
    }
  };
  const bookingTicket = async (ticket) => {
    try {
      const res = await axios.post(`/bookings`, ticket, config);
      dispatch({
        type: BOOKING_TICKET,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: BOOKING_TICKET_ERROR,
        payload: err.response.status,
      });
    }
  };
  const cancelTicket = async (id) => {
    try {
      const res = await axios.put(`/bookings${id}`, config);
      dispatch({
        type: CANCEL_TICKET,
        payload: res.data.message,
      });
    } catch (err) {
      dispatch({
        type: BOOKING_TICKET_ERROR,
        payload: err.response.status,
      });
    }
  };
  return (
    <bookingTicketsContext.Provider
      value={{
        tickets: state.tickets,
        seats: state.seats,
        ticket: state.ticket,
        booking: state.booking,
        loading: state.loading,
        error: state.error,
        getTickets,
        searchTicket,
        bookingTicket,
        cancelTicket,
        getSingleTicket,
        createTickets,
        updateTicket,
        deleteTicket,
      }}>
      {children}
    </bookingTicketsContext.Provider>
  );
};
