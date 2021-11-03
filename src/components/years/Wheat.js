import React from "react";
import OrderForm from "../OrderForm";

function Wheat() {
  const pennies = [
    {
      id: "lincoln-wheat",
      title: "Lincoln Wheat Cent (1909-1958)",
      url: "https://i.ibb.co/JncSRSc/1937-Wheat-Penny-Front-Back.jpg",
      alt: "1937-Wheat-Penny-Front-Back",
      info: "The Lincoln cent was designed by famous Lithuanian-born sculptor and engraver Victor David Brenner and initially commissioned to honor the 100th anniversary of President Lincoln's birth. The wheat stalk design on the reverse of the coin symbolizes our nation's prosperity.",
    },
  ];
  return (
    <section id="pennies">
      {pennies.map((penny) => {
        return (
          <div className="penny-card" key={penny.id}>
            <h2>{penny.title}</h2>
            <img className="penny-img" src={penny.url} alt={penny.alt} />
            <p>{penny.info}</p>
          </div>
        );
      })}
      <section id="order-form">
        <div>
          <OrderForm />
        </div>
      </section>
    </section>
  );
}

export default Wheat;
