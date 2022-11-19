// import React from 'react';
// import logo from './logo.svg';

import './App.css';
import { Button } from './Button';
var data = require('./purity.json');

type TodoItem = { 
  // Our todo should have the title and completed fields and the id field to 
  id: number;
  text: string;
  checked: boolean;
}

type TodoItems = {
  todos: TodoItem[], // Our Todos is an array of Todo
}
const checkItems = data.list.map((item: string) => {
  return (
  <div className='checkList'>
    <li><input type="checkbox"/>{item}</li>
  </div>
  )
})
function onSubmit(){
  console.log("Hello World")
}
function App() {
  return (
    <>
    <h4>Click on every item you have done</h4>
      <ol>{checkItems}</ol>
     <div className='button-stack'>
     <Button text="Submit" executor={onSubmit()}/>
     <Button text="Clear CheckBoxes" executor={onSubmit()}/>
     </div>

    </>


  );
}

export default App;
