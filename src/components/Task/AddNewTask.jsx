import React, { useContext } from "react";
import TodoContext from "./../../context/todoContext";

const AddNewTask = () => {
  const context = useContext(TodoContext);

  return (
    <div className="container mx-auto">
      <form
        className="form-inline justify-content-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="input-group w-100">
          <input
            type="text"
            className="form-control rounded"
            placeholder="میخوای چکار کنی..!"
            value={context.todo}
            onChange={context.handleTodoInput}
          />
          <div className="input-group-prepend">
            <button
              type="submit"
              className="btn btn-sm  fa fa-plus"
              onClick={context.handleCreateNewTodo}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewTask;
