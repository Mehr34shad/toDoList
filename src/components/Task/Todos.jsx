import React from 'react';
import TodoContext from './../../context/todoContext';
import Todo from './Todo';
import { useContext } from 'react';

const Todos = () => {
  const context = useContext(TodoContext);
  const { todos, handleDeleteTodo, handleCompletedTodo } = context;
  return (
    <ul className="list-group list-group-flush">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <Todo
              text={todo.text}
              isCompleted={todo.completed}
              deleted={() => handleDeleteTodo(todo.id)}
              completed={() => handleCompletedTodo(todo.id)}
            />
          </li>
        ))
      ) 
      : (
        <div className="alert alert-light">
          <p className="text-center">کاری نداری یعنی...!</p>
        </div>
      )
      
      }
    </ul>
  );
};

export default Todos;
