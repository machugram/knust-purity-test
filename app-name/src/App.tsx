import React from 'react';
import logo from './logo.svg';
import './App.css';

type TodoItem = { 
  // Our todo should have the title and completed fields and the id field to 
  id: number;
  text: string;
  checked: boolean;
}

type TodoItems = {
  todos: TodoItem[], // Our Todos is an array of Todo
}
function App() {
  return (
    <h1>Hello World</h1>
  );
}

export default App;
