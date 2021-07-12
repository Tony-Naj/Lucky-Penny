import React from "react";
import "./DatePage.css";
import YearForm from "./YearForm";

function DatePage(props) {
  const { events, births, date } = props;

  return (
    <div>
      <h2>{date}</h2>

      <div className="events">
        <h3>Events:</h3>
        <h4>A list of events that happened on this date in history!</h4>
        <ul>
          {events.map((event) => (
            <li>
              {event.year}: {event.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="births">
        <h3>Births:</h3>
        <h4>These famous people were born on this day in history!</h4>
        {/* <h4>{`Did you know ${births[0].text} was born on this day in history! So were:`}</h4> */}
        <ul>
          {births.map((birth) => (
            <li>
              {birth.year}: {birth.text}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <YearForm />
      </div>
    </div>
  );
}

export default DatePage;
