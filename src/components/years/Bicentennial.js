import React from "react";
import OrderForm from "../OrderForm";

function Bicentennial(props) {
  const { year } = props;
  const pennies = [
    {
      id: "lincoln-bicentennial",
      title: "Lincoln Bicentennial Cent (2009)",
      url: "https://i.ibb.co/pQZhrJS/Four-2009-Bicentennial-Lincoln-Penny-Images.jpg",
      alt: "Four-2009-Bicentennial-Lincoln-Pennies",
      info: "Commemorating Lincoln’s bicentennial, this coin featured four different rear designs to celebrate his birth and early childhood in Kentucky, formative years in Indiana, professional life in Illinois, and presidency in Washington, D.C.",
    },
  ];

  return (
    <section id="pennies">
      {pennies.map((penny) => {
        return (
          <div className="penny-card" key={penny.id}>
            <h1>{year}</h1>
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

export default Bicentennial;
