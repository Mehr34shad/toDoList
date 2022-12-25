import React from "react";
import { withRouter,NavLink } from "react-router-dom";

const Nav = props => {
  console.log(props);
  return (
    <div className="p-3">
      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" exact>
            کارهای روزمره
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            درباره سازنده
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Nav);
