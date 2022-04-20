import React from "react";
import CoinFlip from "./components/CoinFlip";
import DateForm from "./components/DateForm";
import { RiCoinLine } from "react-icons/ri";
import { GiShamrock } from "react-icons/gi";
import { GiWheat } from "react-icons/gi";
// import History from "./components/History";
// import decoration from "./decoration.png";
// import penny from "./penny.png";
import penny from "./pennystack.jpeg";
import "./HomePage.css";

function HomePage(props) {
  const { events, setEvents, births, setBirths, date, setDate } = props;

  return (
    <section className="home">
      {/* <div className="flip">
        <CoinFlip />
      </div> */}
      <section id="img-section">
        <div className="penny-cont">
          <h1 className="front-title">Lucky Penny</h1>
          <h2 className="front-para">
            “Find a penny, pick it up. All-day long, you’ll have good luck.” Or
            something like that, right? But why? Why will you have good luck if
            you swipe a penny off the sidewalk or discover one between the couch
            cushions?
          </h2>
          <img className="penny-front" src={penny} alt="penny" />
        </div>
        <CoinFlip />
      </section>

      <section className="section1">
        <div className="lucky-div">
          <div className="lore-info">
            <RiCoinLine className="react-icons" />
            <h3>Penny Lore</h3>
            <p>
              Ancient civilizations believed copper and other metals gifts from
              the gods intended to protect from evil. The initial origin of the
              “lucky penny” was fueled by superstitions such as horseshoes and
              charm bracelets. The continuous human struggle between good and
              evil is analogous to two sides of a coin.
            </p>
          </div>
        </div>
        <div className="lucky-div3">
          {/* <img
            className="lucky-icon"
            src="https://i.postimg.cc/nLwT5Z3W/pngwing-com-3.png"
            border="0"
            alt="pngwing-com-3"
          /> */}
          <GiShamrock className="react-icons" />
          <h3>Is every penny lucky?</h3>
          <p>
            Luck is a strange concept...yet it drives many of our beliefs. We
            can feel it working around us every day. If you find a penny heads
            up, luck is on your side! If tails show, you aren’t doomed! Flip it
            over to bring luck to whoever finds it next! Some even say these
            random pennies are placed for us to find by missed loved ones - a
            sign they are okay.
          </p>
        </div>{" "}
        <div className="lucky-div3">
          <GiWheat className="react-icons" />
          <h3>The luckiest of pennies!</h3>
          <p>
            A lucky penny can be even luckier when they are of a certain kind.
            For example, the Indian Head Penny and the Wheat Penny are both
            considered lucky because of their rarity and higher value. The
            Indian Head Penny was in circulation from 1859 – 1909 when the Wheat
            Penny was introduced. The circulation of the Wheat Penny ended in
            1956.
          </p>
        </div>
      </section>
      <section className="section2"></section>
      <section id="dateform">
        <div>
          <DateForm
            events={events}
            setEvents={setEvents}
            births={births}
            setBirths={setBirths}
            setDate={setDate}
            date={date}
          />
        </div>
        {/* <div>
          <History />
        </div> */}
      </section>
    </section>
  );
}

export default HomePage;
