import React from "react";
import OrderForm from "../OrderForm";

function Shield() {
  const pennies = [
    {
      id: "lincoln-shield",
      title: "Lincoln Shield Cent (2010-Present)",
      url: "https://i.ibb.co/JHncSnk/lincoln-shield-cent.jpg",
      alt: "lincoln-shield-cent",
      info: "Emblematic of Lincoln’s preservation of the United States of America as a single and united country, this cent piece design features the Union Shield which dates back to the 1780’s and was used widely during the Civil War.",
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

export default Shield;
