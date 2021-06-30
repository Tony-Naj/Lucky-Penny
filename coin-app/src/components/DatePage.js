import React from "react";
// import axios from "axios";
import "./DatePage.css";

function DatePage(props) {
  const { events, births } = props;

  return (
    <div>
      <div className="events">
        <h3>Events:</h3>
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
        <ul>
          {births.map((birth) => (
            <li>
              {birth.year}: {birth.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DatePage;
