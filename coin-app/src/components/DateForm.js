import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import DatePage from "./DatePage";

const initialFormValues = {
  day: "",
  month: "",
  year: "",
};

function DateForm() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [events, setEvents] = useState([]);
  const [births, setBirths] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const history = useHistory();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    setDay(formValues.day);
    setMonth(formValues.month);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formValues);
    // history.push("/DatePage");
    fetchData();
  };

  const fetchData = () => {
    axios
      .get(
        `https://history.muffinlabs.com/date/${formValues.month}/${formValues.day}`
      )
      .then((res) => {
        const entries = Object.entries(res.data);
        setMonth(setDay(setEvents(entries[2][1].Events)));
        setBirths(entries[2][1].Births);
        console.log(res.data);
        console.log(entries[2][1].Events);
        console.log("entry", entries);
        console.log(res.data.date);
        console.log("props:", events, births);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3>Enter your Special Date</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="day"
          placeholder="Day"
          value={formValues.day}
          onChange={handleChange}
          id="day"
        />
        <label type="text">Choose a Month:</label>
        <input
          type="text"
          name="month"
          list="daysofmonth"
          value={formValues.month}
          onChange={handleChange}
          id="month"
        />
        <datalist id="daysofmonth">
          <option value="1" name="January"></option>
          <option value="2" name="February"></option>
          <option value="3" name="March"></option>
          <option value="4" name="April"></option>
          <option value="5" name="May"></option>
          <option value="6" name="June"></option>
          <option value="7" name="July"></option>
          <option value="8" name="August"></option>
          <option value="9" name="September"></option>
          <option value="10" name="October"></option>
          <option value="11" name="November"></option>
          <option value="12" name="December"></option>
        </datalist>

        <label type="text">Choose a Year:</label>
        <input
          type="text"
          name="year"
          list="daysofyear"
          // value={formValues.month}
          // onChange={handleChange}
          id="year"
        />

        <button type="submit" onSubmit={handleSubmit}>
          ENTER
        </button>
      </form>

      {events.map((event) => (
        <DatePage key={event.index} event={event} events={events} />
      ))}
    </div>
  );
}

export default DateForm;
