import React from "react";
import "./History.css";
import OrderForm from "./OrderForm";

const pennies = [
  {
    id: "indian-head",
    title: "Indian Head Cent (1859-1909)",
    url: "https://i.ibb.co/bdxbWLS/475px-NNC-US-1859-1-C-Indian-Head-Cent-wreath.jpg",
    alt: "Indian-Head-Cent-wreath",
    info: "A design lauded for simplicity, this penny depicts a Native-American princess, now known as “Liberty”, on the front with an oak wreath on the back of the coin. Because it was minted post Civil-War, many of the nearly two billion put into production survive to this day.",
  },
  {
    id: "lincoln-wheat",
    title: "Lincoln Wheat Cent (1909-1958)",
    url: "https://i.ibb.co/JncSRSc/1937-Wheat-Penny-Front-Back.jpg",
    alt: "1937-Wheat-Penny-Front-Back",
    info: "The Lincoln cent was designed by famous Lithuanian-born sculptor and engraver Victor David Brenner and initially commissioned to honor the 100th anniversary of President Lincoln's birth. The wheat stalk design on the reverse of the coin symbolizes our nation's prosperity.",
  },
  {
    id: "lincoln-steel",
    title: "Lincoln Steel Cent (1943)",
    url: "https://i.ibb.co/KyBtKMP/lincoln-wheat-cent-steel.jpg",
    alt: "lincoln-wheat-cent-steel",
    info: "Nicknamed “steelies”, these pennies are the only US coin that contains 0% copper and can be picked up with a magnet. The steel composition of these cent pieces is owed to the overwhelming need for copper during World War II.",
  },
  {
    id: "lincoln-memorial",
    title: "Lincoln Memorial Cent (1959-2008)",
    url: "https://i.ibb.co/dWSGGQf/US0001-1979-Lincoln-Cent-Uncirculated-57744a123df78cb62c43487d.jpg",
    alt: "uncirculated lincoln memorial penny",
    info: "Designed to celebrate the 150th anniversary of Lincoln’s birth as well as the 50th anniversary of the Lincoln penny, the back-side depicts the Lincoln Memorial. As the price of copper rose, so too did the composition of this cent piece. All U.S. pennies made for circulation since 1983 contain a zinc core covered with a thin plating of copper.",
  },
  {
    id: "lincoln-bicentennial",
    title: "Lincoln Bicentennial Cent (2009)",
    url: "https://i.ibb.co/pQZhrJS/Four-2009-Bicentennial-Lincoln-Penny-Images.jpg",
    alt: "Four-2009-Bicentennial-Lincoln-Pennies",
    info: "Commemorating Lincoln’s bicentennial, this coin featured four different rear designs to celebrate his birth and early childhood in Kentucky, formative years in Indiana, professional life in Illinois, and presidency in Washington, D.C.",
  },
  {
    id: "lincoln-shield",
    title: "Lincoln Shield Cent (2010-Present)",
    url: "https://i.ibb.co/JHncSnk/lincoln-shield-cent.jpg",
    alt: "lincoln-shield-cent",
    info: "Emblematic of Lincoln’s preservation of the United States of America as a single and united country, this cent piece design features the Union Shield which dates back to the 1780’s and was used widely during the Civil War.",
  },
];

function History() {
  return (
    <section id="history">
      <div className="history-intro">
        <h1 className="history-title">History of the Penny</h1>
        <p className="history-text">
          While “pennies” in one form or another have existed for more than
          1,200 years, the United States first authorized this coin in 1792
          where it served to symbolize the spirit of the new nation. The “cent”,
          as it is officially named, has continued to exemplify the American
          ideal from Liberty to Lincoln. Over 300 billion cent coins have been
          minted in the United States.
        </p>
      </div>

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
      </section>
    </section>
  );
}

export default History;
