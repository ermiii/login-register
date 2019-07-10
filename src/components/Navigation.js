import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-default dropdown-toggle"
        type="button"
        id="menu1"
        data-toggle="dropdown"
      >
        Click Me to Log in
      </button>
      <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
        <li>
          <Link to="/LoginStudent">Login Student</Link>
        </li>
        <li>
          <Link to="/LoginMentors">Login Mentor</Link>
        </li>
        <li>
          <Link to="/LoginAdmin">Login Admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
