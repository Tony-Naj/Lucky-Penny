import React from "react";
import OrderForm from "../OrderForm";

function year1943() {
  const pennies = [
    {
      id: "lincloln-steel",
      title: "Lincoln Steel Cent (1943)",
      url: "https://i.ibb.co/KyBtKMP/lincoln-wheat-cent-steel.jpg",
      alt: "lincoln-wheat-cent-steel",
      info: "Nicknamed “steelies”, these pennies are the only US coin that contains 0% copper and can be picked up with a magnet. The steel composition of these cent pieces is owed to the overwhelming need for copper during World War II.",
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

export default year1943;
