import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
const Balance = () => {
  const { transaction } = useContext(GlobalContext);
  const amounts = transaction.map((item) => item.amount);
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => (acc += amount), 0);
  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, amount) => (acc += amount), 0);
  const balance = amounts.reduce((acc, amount) => (acc += amount), 0);

  return (
    <div>
      <div className="balance">
        <h4>Your Balance </h4>
        <h4>${balance}</h4>
      </div>
      <div className="inc-exp-container">
        <div>
          <h2>Income</h2>
          <p className="money plus">${income}</p>
        </div>
        <div>
          <h2>Expense</h2>
          <p className="money minus">${expense * -1}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
