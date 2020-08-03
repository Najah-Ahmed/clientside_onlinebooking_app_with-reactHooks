import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED: {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
        isAdmin: action.payload.is_Admin,
      };
    }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.access_token);
      return {
        ...state,
        // ...action.payload,
        isAuthenticated: true,
        loading: false,
        token: localStorage.getItem('token'),
      };

    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
