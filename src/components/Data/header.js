import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const header = () => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            Header is Back On Top!!!
          </Link>
        </h1>
      </div>
      <div className="header-links">
      <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
      </ul>
      <ul>
            <li>
                <Link to="/signup">Signup</Link>
            </li>
      </ul>
      <ul>
            <li>
                <Link to="/cart">Cart</Link>
                <i class="fas fa-shopping-cart" />
            </li>
      </ul>
      </div>
    </header>
  );
};
export default header;
