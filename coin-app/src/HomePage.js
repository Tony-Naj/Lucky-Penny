import React from "react";
import CoinFlip from "./components/CoinFlip";
import DateForm from "./components/DateForm";
import History from "./components/History";
import "./HomePage.css";

function HomePage(props) {
  const { events, setEvents, births, setBirths, date, setDate } = props;

  return (
    <section className="home">
      <div className="flip">
        <CoinFlip />
      </div>
      <div className="quote-div">
        <h3 className="shimmer">
          “Find a penny, pick it up. All day long you’ll have good luck.”
        </h3>
      </div>
      <section className="section1">
        <div className="lucky-div">
          <h3>Lucky Penny Lore</h3>
          <p>
            Well, according to one theory, people originally believed that
            pennies would bring them a lot of luck due to their religious
            beliefs. Ancient civilizations believed that copper and other metals
            were gifts from the gods, which were intended to provide people with
            protection from evil. This theory was also fueled by a number of
            other superstitions, such as metal horseshoes and charm bracelets,
            which people also believed to be lucky.
          </p>
        </div>

        <div className="lucky-div">
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
        </div>
      </section>
      <section className="section2">
        <div className="lucky-div2">
          <p>
            Some people say that if you find a penny and it is tails side up,
            you should flip it the other way round and leave it so that it
            brings the next person that finds it luck.
          </p>
          <p>
            Luck is a strange thing that we believe in. Its existence is
            completely abstract but we can feel it working around us every day.
            It's been stated that you can find a "super lucky penny," which is
            when the date stamped on a penny you find on the street matches your
            year of birth, or an important year in your life. Let's find YOUR
            super lucky penny! Begin by entering a special date that has
            importance to you!
          </p>
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
