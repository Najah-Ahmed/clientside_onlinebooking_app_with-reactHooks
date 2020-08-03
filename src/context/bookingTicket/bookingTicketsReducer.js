import {
  GET_TICKETS,
  ADD_TICKETS,
  DELETE_TICKETS,
  SEARCH_TICKETS,
  UPDATE_TICKETS,
  BOOKING_TICKET,
  BOOKING_TICKET_ERROR,
  CANCEL_TICKET,
  TICKET_ERROR,
  GET_SINGLE_TICKET,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TICKETS:
    case SEARCH_TICKETS:
      return {
        ...state,
        tickets: action.payload,
        loading: false,
      };
    case ADD_TICKETS:
      return {
        ...state,
        tickets: [action.payload, ...state.tickets],
        loading: false,
      };
    case DELETE_TICKETS:
      return {
        ...state,
        tickets: state.tickets.filter((ticket) => ticket.id !== action.payload),
        loading: false,
      };
    case UPDATE_TICKETS:
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === action.payload.id ? action.payload : ticket
        ),
      };
    case GET_SINGLE_TICKET:
    case CANCEL_TICKET:
      return {
        ...state,
        ticket: action.payload,
        loading: false,
      };
    case BOOKING_TICKET:
      return { ...state, booking: action.payload, loading: false };
    case BOOKING_TICKET_ERROR:
    case TICKET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
