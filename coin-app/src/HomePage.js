import React from "react";
import DateForm from "./components/DateForm";
import History from "./components/History";

function HomePage() {
  return (
    <div className="wrapper">
      <section className="section parallax bg1">
        <div className="static">
          <h3>The Luck of The Penny</h3>
          <p>
            According to the book and the lore surrounding them, pennies are
            especially lucky when you find them face up, as that means that you
            have more money on the way. Finding a penny after rainfall could
            mean that the pennies came from heaven or from the gods.{" "}
          </p>
        </div>
      </section>
      <section className="section parallax bg2">
        <div className="static">
          <h3>Is Tails Up Unlucky?</h3>
          <p>
            Some people believe that picking up a penny that is tails up will
            bring you bad luck, and only the face side of the coin is lucky.
            Rather than take the tails-up penny and risk whatever ill fortune
            that may bring, there’s a salt-over-the-shoulder way of dealing with
            it. The traditional way of dealing with it is to lean down and turn
            the penny over so the head is facing up, but then to leave it so the
            good luck of the face-up penny can be bestowed upon the next
            passerby.
          </p>
        </div>
      </section>
      <section className="section parallax bg3">
        <div className="static">
          <p>
            According to the book and the lore surrounding them, pennies are
            especially lucky when you find them face up, as that means that you
            have more money on the way. Finding a penny after rainfall could
            mean that the pennies came from heaven or from the gods.{" "}
          </p>
        </div>
      </section>
      <section>
        <div>
          <DateForm />
        </div>
        <div>
          <History />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
