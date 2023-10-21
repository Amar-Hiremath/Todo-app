import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "../Todo/Todo";
import { db } from "../../firebase";
import "./Todos.css";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import Header from "../Header/Header"

function Todos() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [incompleteTodoCount, setIncompleteTodoCount] = useState(0);

  // Create todo
  const createTodo = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  // Read todo from Firebase
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      let incompleteCount = 0; // Count of incomplete todos
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
        if (!doc.data().completed) {
          incompleteCount++;
        }
      });
      setIncompleteTodoCount(incompleteCount);
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // Update todo in Firebase
  const toggleComplete = async (todo) => {
    const newCompletedState = !todo.completed;
    await updateDoc(doc(db, "todos", todo.id), { completed: newCompletedState });

    // Update incompleteTodoCount
    const newIncompleteCount = newCompletedState
      ? incompleteTodoCount - 1
      : incompleteTodoCount + 1;
    setIncompleteTodoCount(newIncompleteCount);
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className="container">
      <Header />
      <form className="from">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input"
          type="text"
          placeholder=" Add Todo"
        ></input>
        <button onClick={createTodo} className="button">
          <AiOutlinePlus size={30} />
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      {todos.length < 1 ? null : (
        <p className="count">{`You have ${incompleteTodoCount} todos`}</p>
      )}
    </div>
  );
}

export default Todos;
