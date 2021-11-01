import React from "react";
import "./Confirmation.css";
import oeo from "../oeo-logo.png";

function Confirmation() {
  return (
    <section id="confirmation">
      <div className="confirmation-div">
        <h3>Thank you for your purchase!</h3>
        <h4>Good luck is on the wind!</h4>
        <p>Your Super Lucky Penny will arrive in 7-10 days.</p>
      </div>
      <section id="copyright">
        <div className="c-div">
          <img
            className="copy-img"
            src="https://i.ibb.co/vchsJQ0/Untitled.png"
            alt="spin"
          />
          <img className="copy-img" src={oeo} alt="Naj's Logo" />
        </div>
        <p>Copyright © 2021 | Anthony Cortese | Onaje Ooladuwa </p>
      </section>
    </section>
  );
}

export default Confirmation;
