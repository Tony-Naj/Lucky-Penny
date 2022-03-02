import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import coin from "./coin.png";
import Countdown from "./components/years/Countdown";

function Navbar() {
  return (
    <div className="navbar-div">
      <div className="coin-container">
        <a href="/">
          <img className="nav-coin" src={coin} alt="golden coin" border="0" />
        </a>
      </div>
      {/* <h1 className="app-title">LUCKY PENNY</h1> */}
      <div className="nav-buttons">
        <Link to="/">
          <nav>Home</nav>
        </Link>

        <Link to="/history">
          <nav>History</nav>
        </Link>

        <Link to="/superstitions">
          <nav>Facts</nav>
        </Link>
      </div>
      <div className="luck-penny">
        <Countdown />
        <h3 className="hashtag">#LuckyPennyDay</h3>
        {/* <h3 className="hashtag"> May 23rd Countdown</h3> */}
      </div>
    </div>
  );
}

export default Navbar;
