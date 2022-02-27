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
          <nav>Fun-facts</nav>
        </Link>
      </div>
      <div className="luck-penny">
        <h3 className="hashtag">#LuckyPennyDay</h3>

        <Countdown />
      </div>
    </div>
  );
}

export default Navbar;
