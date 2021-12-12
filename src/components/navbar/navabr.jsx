import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          Shopping List
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Shopping Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">
                admin
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="info">
          <Link to="/cart" className="bg-info">
            <div className="bg-danger p-2" style={{ borderRadius: "15px" }}>
              <span className="badge bg-primary">
                {props.numberOfProducts()}
              </span>
              <i
                className="fas fa-shopping-cart fa-3x"
                style={{ color: "#fff" }}
              ></i>
            </div>
          </Link>
          {/* This function  numberOfProducts will get fired with each update render */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
