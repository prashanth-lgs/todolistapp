import React from 'react';
import './index.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleAddTodo = () => {
    const { inputValue, todos } = this.state;
    if (inputValue.trim() !== '') {
      this.setState({
        todos: [...todos, inputValue],
        inputValue: '',
      });
    }
  };

  handleDeleteTodo = (index) => {
    const { todos } = this.state;
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos, inputValue } = this.state;

    return (
      <div className="todo-container">
        <h1 className="todo-title">Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleAddTodo}>Add</button>
        </div>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              {todo}
              <button onClick={() => this.handleDeleteTodo(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
