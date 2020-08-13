import React, { useReducer } from 'react';
import axios from 'axios';
import authContext from './authContext';
import authReducer from './authReduces';
import setAuthToken from '../../utils/setAuthToken';
import {
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
  CLEAR_ERROR,
  AUTH_ERROR,
} from '../types';

const initialState = {
  user: {},
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  error: null,
  isAdmin: false,
  alert: {},
};

export const AuthState = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  //load user
  const loadUser = async () => {
    //* TODO load token into global headers

    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get('/authuser');
      dispatch({ type: USER_LOADED, payload: res.data.result });
    } catch (err) {
      dispatch({ type: AUTH_ERROR, payload: err.response.status });
    }
  };
  //user profile

  //register
  const register = async (formData) => {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/register', formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.message,
      });
      loadUser();
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.response.data.error });
    }
  };
  const login = async (user) => {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/login', user, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.error });
    }
  };
  //logout
  const logout = () => dispatch({ type: LOGOUT });
  //clear errors
  const clearError = () => dispatch({ type: CLEAR_ERROR });
  return (
    <authContext.Provider
      value={{
        token: state.token,
        isAdmin: state.isAdmin,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        loadUser,
        register,
        login,
        logout,
        clearError,
      }}>
      {children}
    </authContext.Provider>
  );
};
