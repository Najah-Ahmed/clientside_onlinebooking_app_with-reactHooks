import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import authContext from '../../context/auth/authContext';

const AdminRoute = ({ component: Component, ...rest }) => {
  const authPrivate = useContext(authContext);
  const { isAdmin } = authPrivate;
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          !isAdmin ? <Redirect to='/' /> : <Component {...props} />
        }
      />
    </div>
  );
};

export default AdminRoute;
