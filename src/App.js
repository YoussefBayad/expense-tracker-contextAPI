import React, { useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
    </div>
  );
}

export default App;
