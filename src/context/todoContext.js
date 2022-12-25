import  { createContext } from 'react';

const TodoContext = createContext({
    todos: [],
    todo: "",
    handleCreateNewTodo : () => { },
    handleCompletedTodo : () => { },
    handleDeleteTodo : () => { },
    handleTodoInput : () => { },
})
export default TodoContext;