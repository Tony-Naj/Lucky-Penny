import React from "react";
import "./DatePage.css";
import YearForm from "./YearForm";

function DatePage(props) {
  const { events, births, date } = props;

  return (
    <section id="date-data">
      <div className="date-title">
        <h1 className="spinner">{date}</h1>
      </div>
      <div className="info">
        <div className="events">
          <h3 className="events-h3">
            {`These historic moments happened on ${date}:`}
            {/* {`On ${date}, ${
            events[events.length - 1].text
          } Here are some more events that took place on ${date}:`} */}
          </h3>
          <ul>
            {events.map((event) => (
              <li>
                <strong>{event.year}:</strong> {event.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="births">
          <h3 className="births-h3">
            {`These people of renown were born on ${date}:`}
            {/* <h3 className="births-h3">{`Did you know 
            ${
              births[births.length - 1].text
            } was born on ${date}? Here are more notable births:`}</h3> */}
          </h3>
          <ul>
            {births.map((birth) => (
              <li>
                <strong>{birth.year}:</strong> {birth.text}
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
