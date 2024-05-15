import React from 'react';
import TodoList from './components/TodoList';
import "./App.css"

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">My Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;

