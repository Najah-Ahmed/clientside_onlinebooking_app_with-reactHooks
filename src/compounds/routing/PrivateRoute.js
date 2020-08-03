import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import authContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authPrivate = useContext(authContext);
  const { isAuthenticated, loading } = authPrivate;
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          !isAuthenticated && !loading ? (
            <Redirect to='/login' />
          ) : (
            <Component {...props} />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
