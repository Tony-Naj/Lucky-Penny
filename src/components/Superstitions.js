import React from "react";
import CoinFlip from "./CoinFlip";
import "./Superstitions.css";

function Superstitions() {
  return (
    <section id="super">
      <div className="super-div">
        <img
          className="two-face"
          src="https://i.postimg.cc/XYhqmRyy/Two-face-dc-comics-20080605023632011-000.jpg"
          border="0"
          alt="Two-face-dc-comics-20080605023632011-000"
        />
        <h1 className="lore">Penny Superstitions</h1>
        <ul>
          <li>
            Do not spend a penny that you find. Instead, save it for luck.
          </li>
          <li>
            If you place a penny in your shoe, it will bring good fortune.
          </li>
          <li>
            Carrying three pennies with you is going to bring you good luck.
          </li>
          <li>
            Throwing a penny coin over your left shoulder into a wishing well or
            water will grant your wish.
          </li>
          <li>
            Tossing a penny when you have a problem enables fate to take care of
            the issue for you.
          </li>
          <li>Coins with holes in them are considered especially lucky.</li>
          <li>
            If you put the first penny you get every day into your pocket, you
            are going to attract more as the day continues.
          </li>
          <li>
            If you find a penny, it means that there is more money coming your
            way.
          </li>
          <li>
            If you keep a coin in your baby’s crib, the baby will grow up to be
            wise, wealthy, and healthy.
          </li>
          <li>
            To secure good luck, you should carry a penny that was minted in
            your birth year.
          </li>
          <li>
            Having a jar filled with pennies in your kitchen is good luck.
          </li>
          <li>
            If you toss a penny overboard while you are traveling at sea, it
            will bring you a safe trip.
          </li>
          <li>
            Some also say that you should carry a penny in your pocketbook,
            which is wrapped in paper, so you are able to say that you are never
            broke.
          </li>
        </ul>
        <CoinFlip />
      </div>
    </section>
  );
}

export default Superstitions;
