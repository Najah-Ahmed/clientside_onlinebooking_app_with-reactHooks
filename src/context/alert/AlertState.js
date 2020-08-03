import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { v4 as uuid } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from '../types';

export const AlertState = ({ childern }) => {
  const initialState = [];
  const [state, dispatch] = useReducer(AlertReducer, initialState);
  const setAlert = (msg, type, timeOut = 5000) => {
    const id = uuid;
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });
    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
          payload: id,
        }),
      timeOut
    );
  };
  return (
    <AlertContext.Provider value={{ alerts: state, setAlert }}>
      {childern}
    </AlertContext.Provider>
  );
};
