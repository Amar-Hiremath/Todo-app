import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import "./Todo.css";


const Todo = ({ todo , toggleComplete , deleteTodo}) => {
  return (
    <li className={todo.completed ? "liCompleted" : "li"}>
      <div className="row">
        <input onChange={()=>toggleComplete(todo)} type="checkbox" checked = {todo.completed ? "checked" : ""}/>
        <p onClick={()=>toggleComplete(todo)} className={ todo.completed ? "textCompleted ": "text" }>{todo.text}</p>
      </div>
        <button onClick={()=> deleteTodo(todo.id)} className="delete-icon">{<DeleteIcon/>}</button>
    </li>
  );
}; 

export default Todo;
