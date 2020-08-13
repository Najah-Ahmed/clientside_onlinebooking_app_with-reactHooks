import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BookingTicketsState } from './context/bookingTicket/BookingTicketsState';
import { AuthState } from './context/auth/AuthState';
// import { AlertState } from './context/alert/AlertState';
import Tickets from './compounds/ticketbooking/Tickets';
import TicketBookingForm from './compounds/ticketbooking/TicketBookingForm';
import Register from './compounds/auth/Register';
import Login from './compounds/auth/Login';
import User from './compounds/auth/User';
import Dashboard from './compounds/auth/Dashboard';
import PrivateRoute from './compounds/routing/PrivateRoute';
import AdminRoute from './compounds/routing/AdminRoute';
import setAuthToken from './utils/setAuthToken';
import Navbar from './compounds/layouts/Navbar';
import Footing from './compounds/layouts/Footing';
import Contact from './compounds/layouts/Contact';
import About from './compounds/layouts/About';
import TicketForm from './compounds/ticketbooking/TicketForm';
import SearchTicket from './compounds/ticketbooking/SearchTicket';
import Admin from './compounds/ticketbooking/admin/Admin';
import Booking from './compounds/ticketbooking/booking/Booking';
// import Alert from './compounds/layouts/Alert';
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
            <Fragment>
              <Navbar />
              {/* <Alert /> */}
              <Switch>
                <Route exact path='/' component={TicketBookingForm} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/searchticket' component={SearchTicket} />
                <AdminRoute exact path='/tickets' component={Tickets} />
                <PrivateRoute exact path='/ticket/:id' component={Booking} />
                <AdminRoute exact path='/admin' component={Admin} />
                <PrivateRoute exact path='/user' component={User} />
                <PrivateRoute exact path='/dashboard' component={Dashboard} />
                <PrivateRoute exact path='/addTicket' component={TicketForm} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
              <Footing />
            </Fragment>
          </Router>
          {/* </AlertState> */}
        </BookingTicketsState>
      </AuthState>
    </div>
  );
}

export default App;
