import React from "react";
import "./DatePage.css";
import YearForm from "./YearForm";

function DatePage(props) {
  const { events, births, date, year } = props;

  return (
    <section id="date-data">
      <div className="date-title">
        <h1 className="spinner">{date}</h1>
      </div>
      <div className="info">
        <div className="events">
          <h3 className="events-h3">{`Moments in history from ${date}:`}</h3>
          <ul>
            {events.map((event) => (
              <li className="list">
                <strong>{event.year}:</strong> {event.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="births">
          <h3 className="births-h3">{`Notable birthdays on ${date}:`}</h3>
          <ul>
            {births.map((birth) => (
              <li className="list">
                <strong>{birth.year}:</strong> {birth.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <section id="years">
        <div className="year-info">
          <h3>Choose the year of your birth or an important milestone!</h3>
          <h4>It's your turn to GRAB your "super lucky penny"!</h4>
        </div>
      </section>

      <div>
        <YearForm year={year} />
      </div>
    </section>
  );
}

export default DatePage;
