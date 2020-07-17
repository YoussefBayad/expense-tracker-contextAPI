import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
const Transaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [id, setId] = useState(0);
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form>
        <label className="label">Text</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter text..."
          required
        />
        <label className="label">Amount</label>
        <label className="label">(Expense start with minus)</label>
        <input
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          placeholder="Enter text..."
          required
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addTransaction(name, amount, id);
            setId(id + 1);
          }}
          className="btn"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default Transaction;
