import React, { useState } from "react";

import TodoContext from "../context/todoContext";
import { v4 as uuidv4 } from "uuid";

const GlobalState = (props) => {
  const [getTodos, setTodos] = useState([]);
  const [getTodo, setTodo] = useState("");

  const handleCreateNewTodo = () => {
    const todos = [...getTodos];
    const todo = {
      id: uuidv4(),
      text: getTodo,
      completed: false,
    };
    if (getTodo !== "" && getTodo !== " ") {
      todos.push(todo);
      setTodos(todos);
      setTodo("");
    }
  };

  const handleCompletedTodo = (id) => {
    const todos = [...getTodos];
    const todoIndex = todos.findIndex((t) => t.id === id);
    const todo = todos[todoIndex];
    todo.completed = !todo.completed;
    todos[todoIndex] = todo;
    setTodos(todos);
  };

  const handleDeleteTodo = (id) => {
    const todos = [...getTodos];
    const filteredTodos = todos.filter((t) => t.id !== id);
    setTodos(filteredTodos);
  };

  const handleTodoInput = (event) => {
    setTodo(event.target.value);
  };

  return (
    <TodoContext.Provider
      value={{
        todos: getTodos,
        todo: getTodo,
        handleCreateNewTodo: handleCreateNewTodo,
        handleTodoInput: handleTodoInput,
        handleCompletedTodo: handleCompletedTodo,
        handleDeleteTodo: handleDeleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default GlobalState;
