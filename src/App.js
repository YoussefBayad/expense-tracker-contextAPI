import React from 'react';
import Balance from './components/Balance';
import History from './components/History';
import Transaction from './components/Transaction';
import { GlobalProvider } from './context/GlobalContext';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Balance />
        <History />
        <Transaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
