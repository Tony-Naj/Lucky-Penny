import React from "react";
import "./Confirmation.css";
import oeo from "../oeo-logo.png";

function Confirmation() {
  return (
    <section id="confirmation">
      <div className="confirmation-div">
        <h3>Thank you for your purchase!</h3>
        <h4>Good luck is on the wind!</h4>
        {/* <p>Your Super Lucky Penny will arrive in 7-10 days.</p> */}
        <div className="movie-quote">
          <p>Don't put it in your pocket. It's your lucky coin.</p>
          <p>
            Put it anywhere just not in your pocket, where it will get mixed in
            with the others and become just another coin...
          </p>
        </div>
        <div className="img-con">
          <img
            className="anton"
            src="https://i.postimg.cc/TPy9WVcD/uh-oh-chigurh.gif"
            border="0"
            alt="uh-oh-chigurh"
          />
        </div>
        <div className="final">
          <p>which it is.</p>
        </div>
      </div>
      <section id="copyright">
        <div className="c-div">
          <img
            className="copy-img"
            src="https://i.ibb.co/vchsJQ0/Untitled.png"
            alt="spin"
          />
          {/* <img className="copy-img" src={oeo} alt="Naj's Logo" />s */}
        </div>
        <p>Copyright © 2021 | Anthony Cortese | Onaje Ooladuwa </p>
      </section>
    </section>
  );
}

export default Confirmation;
