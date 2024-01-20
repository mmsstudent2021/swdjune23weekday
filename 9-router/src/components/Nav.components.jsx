import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavComponents = () => {
  return (
    <nav>
      <ol className="flex space-x-5 no-underline text-blue-600">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"} state={{ phoneNumber: 91234232323 }}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/book">Book</NavLink>
        </li>
        <li>
          <NavLink to={`/book/${Math.random(10)}`}>DetailBook</NavLink>
        </li>
      </ol>
    </nav>
  );
};

export default NavComponents;
