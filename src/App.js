import React, { useReducer, useState } from 'react';
import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add_todo':
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
      };
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState('');
  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: 'add_todo', text });
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <div>
        {todos.map((todo) => (
          <li key={todo.text}>{todo.text}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
