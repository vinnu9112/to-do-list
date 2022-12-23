import React from 'react'
import TodoItem from "./TodoItem";

const Todos = (props) => {
  return (
    <div className='container my-3' style={{minHeight: "70vh", margin: "40px auto"}}>
      <h4 className='my-3'>Todo List</h4>
    
      {props.todos.length===0 ? "No todos to display":
         props.todos.map((todo)=>{
            return(
             <TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete} /> 
            )
          })}
    </div>
  )
}

export default Todos
