import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BookingTicketsState } from './context/bookingTicket/BookingTicketsState';
import { AuthState } from './context/auth/AuthState';
// import { AlertState } from './context/alert/AlertState';
import Tickets from './compounds/ticketbooking/Tickets';
import TicketBookingForm from './compounds/ticketbooking/TicketBookingForm';
import Register from './compounds/auth/Register';
import Login from './compounds/auth/Login';
import User from './compounds/auth/User';
import PrivateRoute from './compounds/routing/PrivateRoute';
import setAuthToken from './utils/setAuthToken';
import Navbar from './compounds/layouts/Navbar';
import Footing from './compounds/layouts/Footing';
import Contact from './compounds/layouts/Contact';
import About from './compounds/layouts/About';
import TicketForm from './compounds/ticketbooking/TicketForm';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  return (
    <div className=' h-screen font-sans bg-cover bg-gray-900  '>
      <AuthState>
        <BookingTicketsState>
          {/* <AlertState> */}
          <Router>
            <Navbar />
            <Switch>
              <Route exact path='/' component={TicketBookingForm} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/tickets' component={Tickets} />
              <PrivateRoute exact path='/user' component={User} />
              <PrivateRoute exact path='/addTicket' component={TicketForm} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
            <Footing />
          </Router>
          {/* </AlertState> */}
        </BookingTicketsState>
      </AuthState>
    </div>
  );
}

export default App;
