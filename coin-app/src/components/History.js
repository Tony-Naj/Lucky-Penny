import React from "react";
import "./History.css";
import OrderForm from "./OrderForm";

function History() {
  return (
    <div className="history-div">
      <h1>History of the Penny</h1>
      <p>
        While “pennies” in one form or another have existed for more than 1,200
        years, the United States first authorized this coin in 1792 where it
        served to symbolize the spirit of the new nation. The “cent”, as it is
        officially named, has continued to exemplify the American ideal from
        Liberty to Lincoln. Over 300 billion cent coins have been minted in the
        United States.
      </p>

      <section id="ih" className="1859-1909">
        <h2 className="indian_head">Indian Head Cent (1859-1909)</h2>
        <img
          className="history-penny"
          src="https://i.ibb.co/bdxbWLS/475px-NNC-US-1859-1-C-Indian-Head-Cent-wreath.jpg"
          alt="475px-NNC-US-1859-1-C-Indian-Head-Cent-wreath"
          border="0"
        />
        {/* <img  src="https://i.ibb.co/0yjJpQB/11.webp" alt="11" border="0"/> */}
        <p>
          A design lauded for simplicity, this penny depicts a Native-American
          princess, now known as “Liberty”, on the front with an oak wreath on
          the back of the coin. Because it was minted post Civil-War, many of
          the nearly two billion put into production survive to this day.
        </p>
      </section>
      <section id="lw" className="1909-1958">
        <h2 className="lincoln_wheat">Lincoln Wheat Cent (1909-1958)</h2>
        <img
          className="history-penny"
          src="https://i.ibb.co/JncSRSc/1937-Wheat-Penny-Front-Back.jpg"
          alt="1937-Wheat-Penny-Front-Back"
          border="0"
        />
        {/* <img src="https://i.ibb.co/7YKP9Ns/12.webp" alt="12" border="0"/> */}
        <p>
          The Lincoln cent was designed by famous Lithuanian-born sculptor and
          engraver Victor David Brenner and initially commissioned to honor the
          100th anniversary of President Lincoln's birth. The wheat stalk design
          on the reverse of the coin symbolizes our nation's prosperity.
        </p>
      </section>
      <section id="lst" className="1943">
        <h2 className="lincoln_steel">Lincoln Steel Cent (1943)</h2>
        <img
          className="history-penny"
          src="https://i.ibb.co/KyBtKMP/lincoln-wheat-cent-steel.jpg"
          alt="lincoln-wheat-cent-steel"
          border="0"
        />
        {/* <img src="https://i.ibb.co/bKvC1sj/14.webp" alt="14" border="0"/> */}
        <p>
          Nicknamed “steelies”, these pennies are the only US coin that contains
          0% copper and can be picked up with a magnet. The steel composition of
          these cent pieces is owed to the overwhelming need for copper during
          World War II.
        </p>
      </section>
      <section id="lm" className="1959-2008">
        <h2 className="lincoln_memorial">Lincoln Memorial Cent (1959-2008)</h2>
        <img
          className="history-memorial"
          src="https://i.ibb.co/dWSGGQf/US0001-1979-Lincoln-Cent-Uncirculated-57744a123df78cb62c43487d.jpg"
          alt="US0001-1979-Lincoln-Cent-Uncirculated-57744a123df78cb62c43487d"
          border="0"
        />
        {/* <img src="https://i.ibb.co/9qqt62V/15.webp" alt="15" border="0"/> */}
        <p>
          Designed to celebrate the 150th anniversary of Lincoln’s birth as well
          as the 50th anniversary of the Lincoln penny, the back-side depicts
          the Lincoln Memorial. As the price of copper rose, so too did the
          composition of this cent piece. All U.S. pennies made for circulation
          since 1983 contain a zinc core covered with a thin plating of copper.
        </p>
      </section>
      <section id-="lb" className="2009">
        <h2 className="lincoln_bicentennial">
          Lincoln Bicentennial Cent (2009)
        </h2>
        <img
          src="https://i.ibb.co/pQZhrJS/Four-2009-Bicentennial-Lincoln-Penny-Images.jpg"
          alt="Four-2009-Bicentennial-Lincoln-Penny-Images"
          border="0"
        />
        <p>
          Commemorating Lincoln’s bicentennial, this coin featured four
          different rear designs to celebrate his birth and early childhood in
          Kentucky, formative years in Indiana, professional life in Illinois,
          and presidency in Washington, D.C.
        </p>
      </section>
      <section id="lsh" className="2010">
        <h2 className="lincoln_shield">Lincoln Shield Cent (2010-Present)</h2>
        <img
          className="history-penny"
          src="https://i.ibb.co/JHncSnk/lincoln-shield-cent.jpg"
          alt="lincoln-shield-cent"
          border="0"
        />
        {/* <img src="https://i.ibb.co/xGMh9qJ/16.webp" alt="16" border="0"/> */}
        <p>
          Emblematic of Lincoln’s preservation of the United States of America
          as a single and united country, this cent piece design features the
          Union Shield which dates back to the 1780’s and was used widely during
          the Civil War.
        </p>
      </section>
      <section>
        <div>
          <OrderForm />
        </div>
      </section>
    </div>
  );
}

export default History;
