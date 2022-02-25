import React from "react";
import OrderForm from "../OrderForm";

function Indian() {
  const pennies = [
    {
      id: "indian-head",
      title: "Indian Head Cent (1859-1909)",
      url: "https://i.ibb.co/bdxbWLS/475px-NNC-US-1859-1-C-Indian-Head-Cent-wreath.jpg",
      alt: "Indian-Head-Cent-wreath",
      info: "A design lauded for simplicity, this penny depicts a Native-American princess, now known as “Liberty”, on the front with an oak wreath on the back of the coin. Because it was minted post Civil-War, many of the nearly two billion put into production survive to this day.",
    },
  ];
  return (
    <section id="pennies">
      {/* <h1 className="orderform-title">This will be your lucky penny!</h1> */}
      {pennies.map((penny) => {
        return (
          <div className="penny-card" key={penny.id}>
            <h2>{penny.title}</h2>
            <img className="penny-img" src={penny.url} alt={penny.alt} />
            <p>{penny.info}</p>
            <p></p>
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

export default Indian;
