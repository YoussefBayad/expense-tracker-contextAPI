import React, { createContext, useReducer } from 'react';
import appReducer from './appReducer';

// initialState
const initialState = {
  transaction: [
    { name: 'cash', amount: 100 },
    { name: 'flowers', amount: -10 },
  ],
};

//createContext

export const GlobalContext = createContext(initialState);

// provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transaction: state.transaction }}>
      {children}
    </GlobalContext.Provider>
  );
};
