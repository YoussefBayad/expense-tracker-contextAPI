import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
const History = () => {
  const { transaction, deleteTransaction } = useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transaction.map((item) => (
          <li className={item.amount > 0 ? 'plus' : 'minus'}>
            <p>{item.name}</p>
            <p>{item.amount}$</p>
            <button
              className="delete-btn"
              onClick={() => deleteTransaction(item.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
