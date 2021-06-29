import React from "react";
// import axios from "axios";
import "./DatePage.css";

function DatePage(props) {
  const { event, events } = props;
  console.log("events:", event);
  console.log("events:", events);
  // console.log("event:", event.day);
  // console.log("events:", event.text);
  return (
    <div key={event} className="date-div">
      <div className="events">
        {/* <h3>Events:</h3> */}

        <p>
          {event}: {event}
        </p>

        {/* <div className="births">
          <h3>Births:</h3>
          {births.map((item1, index1) => (
            <div key={index1}>
              <p>
                {item1.year}: {item1.text}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default DatePage;
