import React from "react";
import OrderForm from "../OrderForm";

function Memorial() {
  const pennies = [
    {
      id: "lincoln-memorial",
      title: "Lincoln Memorial Cent (1959-2008)",
      url: "https://i.ibb.co/dWSGGQf/US0001-1979-Lincoln-Cent-Uncirculated-57744a123df78cb62c43487d.jpg",
      alt: "uncirculated lincoln memorial penny",
      info: "Designed to celebrate the 150th anniversary of Lincoln’s birth as well as the 50th anniversary of the Lincoln penny, the back-side depicts the Lincoln Memorial. As the price of copper rose, so too did the composition of this cent piece. All U.S. pennies made for circulation since 1983 contain a zinc core covered with a thin plating of copper.",
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
export default Memorial;
