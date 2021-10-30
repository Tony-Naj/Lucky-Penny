import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import coin from "./coin.png";

function Navbar() {
  return (
    <div className="navbar-div">
      <div className="coin-container">
        <img className="nav-coin" src={coin} alt="golden coin" border="0" />
      </div>
      <h1 className="app-title">LUCKY PENNY!</h1>
      <div className="nav-buttons">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/history">
          <button>History</button>
        </Link>
        <Link to="/superstitions">
          <button>Superstitions</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
