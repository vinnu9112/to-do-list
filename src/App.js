import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Todos from './components/Todos';
import React, { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';

function App() {

  let initTodo;
  if (localStorage.getItem("todos")=== null) {
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  


  const onDelete = (todo) =>{
  setTodos(todos.filter((e)=>{
    return e !== todo  
  }))

  localStorage.getItem("todos");
  }

  const addTodo = (title, desc)=>{
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else{
      sno =  todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]) // remember []- an array to store new objects
  }
  


  const [todos, setTodos] = useState(initTodo);
  useEffect (()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])
  

  return (
    <>
      <Header title="My Todo List"/>
      <AddTodo addTodo = {addTodo}/>
      <Todos todos={todos} onDelete = {onDelete} />
      <Footer/>
    </>
  );
}

export default App;
