import React, { createContext, useReducer } from 'react';
import appReducer from './appReducer';

// initialState
const initialState = {
  transaction: [
    { name: 'cash', amount: 1000, id: 1 },
    { name: 'flowers', amount: -10, id: 2 },
    { name: 'rent', amount: -100, id: 3 },
    { name: 'food', amount: -200, id: 4 },
  ],
};

//createContext

export const GlobalContext = createContext(initialState);

// provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE', id });
  };
  return (
    <GlobalContext.Provider
      value={{ transaction: state.transaction, deleteTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
