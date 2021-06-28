import React, { useState } from "react";
import axios from "axios";
import DatePage from "./DateForm";

const initialFormValues = {
  day: "",
  month: "",
  year: "",
};

function DateForm(props) {
  // const { setMonth, setDay, month, day } = props;
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [formValues, setFormValues] = useState(initialFormValues);
  const [events, setEvents] = useState([]);
  const [births, setBirths] = useState([]);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(setDay);
    setDay(formValues.day);
    setMonth(formValues.month);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formValues);
    console.log(formValues.day);
    console.log(formValues.month);
    fetchData();
  };

  const fetchData = () => {
    axios
      .get(
        `https://history.muffinlabs.com/date/${formValues.month}/${formValues.day}`
      )
      .then((res) => {
        // console.log("Events:", res);
        const entries = Object.entries(res.data);
        // console.log(entries);
        // console.log("newdata:", entries[2][1].Events);
        // console.log("births:", entries[2][1].Births);
        setMonth(setDay(setEvents(entries[2][1].Events)));
        setBirths(entries[2][1].Births);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h3>Enter your Date of Birth</h3>
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

        <button type="submit" onSubmit={handleSubmit}>
          ENTER
        </button>
      </form>
      <div className="date-div">
        <div className="events">
          <h3>Events:</h3>
          {events.map((item, index) => (
            <div key={index}>
              <p>
                {item.year}: {item.text}
              </p>
            </div>
          ))}
          <div className="births">
            <h3>Births:</h3>
            {births.map((item1, index1) => (
              <div key={index1}>
                <p>
                  {item1.year}: {item1.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateForm;
