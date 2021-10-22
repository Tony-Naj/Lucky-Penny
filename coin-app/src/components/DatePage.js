import React from "react";
import "./DatePage.css";
import YearForm from "./YearForm";

function DatePage(props) {
  const { events, births, date } = props;

  return (
    <section className="dates">
      <div className="date-title">
        <h1 className="date">{date}</h1>
      </div>
      <div className="info">
        <div className="events">
          {/* <h4>A list of events that happened on this date in history!</h4> */}
          <h4>{`Did you know on ${date}, ${
            events[events.length - 1].text
          }. Here are some more events that took place on this date:`}</h4>
          {/* <h4>{`Did you know ${events[0].text} was born on this day in history! So were:`}</h4> */}
          <ul>
            {events.map((event) => (
              <li>
                {event.year}: {event.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="births">
          {/* <h3>Births:</h3> */}
          {/* <h4>These famous people were born on this day in history!</h4> */}
          <h4>{`Did you know on
            ${
              births[births.length - 1].text
            } was born on ${date}! So were:`}</h4>
          <ul>
            {births.map((birth) => (
              <li>
                {birth.year}: {birth.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <YearForm />
      </div>
    </section>
  );
}

export default DatePage;
