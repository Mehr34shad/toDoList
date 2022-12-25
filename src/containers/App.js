import React, { Fragment } from "react";

import Todos from "../components/Task/Todos";
import AddNewTask from "../components/Task/AddNewTask";

const App = () => {
  return (
    <Fragment>
      <div className="d-flex justify-content-center container">
        <div className="col-md-8">
          <div className="card-hover-shadow-2x mb-3 card">
            <Todos/>
          </div>
        </div>
      </div>
      <AddNewTask />
    </Fragment>
  );
};

export default App;
