import React from "react";
import CoinFlip from "./components/CoinFlip";
import DateForm from "./components/DateForm";
import History from "./components/History";
import penny from "./penny.png";
import "./HomePage.css";

function HomePage(props) {
  const { events, setEvents, births, setBirths, date, setDate } = props;

  return (
    <section className="home">
      <div className="flip">
        <CoinFlip />
      </div>
      <div className="penny-cont">
        <img className="penny-front" src={penny} alt="penny" />
      </div>
      <section className="section1">
        <div className="lucky-div">
          <h3>Lucky Penny Lore</h3>
          <p>
            Ancient civilizations believed copper and other metals gifts from
            the gods intended to protect from evil. The initial origin of the
            “lucky penny” was fueled by superstitions such as horseshoes and
            charm bracelets. The continuous human struggle between good and evil
            is analogous to two sides of a coin.
          </p>
          <p>
            Luck is a strange concept...yet it drives many of our beliefs. We
            can feel it working around us every day. If you find a penny heads
            up, luck is on your side! If tails show, you aren’t doomed! Flip it
            over to bring luck to whoever finds it next! Some even say these
            random pennies are placed for us to find by missed loved ones - a
            sign they are okay.
          </p>
        </div>

        {/* <div className="lucky-div">
          <h3>Lucky Penny Lore</h3>
          <p>
            Another reason people might have claimed pennies would bring good
            luck comes down to the battle between good and evil, which is like
            two sides of the coin. Finding a penny heads up meant you’d have
            luck on your side, but tails up would mean the opposite, although
            the exact reasoning for this is unknown. Some people say that if you
            find a penny tails up, you should flip it over to make it heads up
            so that it can bring luck to whoever finds it next.
          </p>
        </div> */}
      </section>
      <section className="section2">
        <div className="lucky-div2">
          <h3>Let us help you find YOUR super lucky penny!</h3>
          <h4>Enter your special date!</h4>
        </div>
      </section>
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
