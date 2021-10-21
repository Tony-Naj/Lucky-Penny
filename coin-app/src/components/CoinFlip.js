import React from "react";
import "./CoinFlip.css";

function CoinFlip() {
  return (
    <div className="flip">
      <div className="coin-flip">
        <div className="coin-heads">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/US_One_Cent_Obv.png/240px-US_One_Cent_Obv.png"
            alt="heads"
          />
        </div>
        <div className="coin-tails">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/US_One_Cent_Rev.png/240px-US_One_Cent_Rev.png"
            alt="tails"
          />
        </div>
      </div>
    </div>
  );
}

export default CoinFlip;
