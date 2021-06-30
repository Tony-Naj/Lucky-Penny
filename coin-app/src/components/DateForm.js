import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import DatePage from "./DatePage";

const initialFormValues = {
  day: "",
  month: "",
  year: "",
};

function DateForm(props) {
  const { events, births, setBirths, setEvents } = props;

  const [formValues, setFormValues] = useState(initialFormValues);

  const history = useHistory();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    history.push("/DatePage");
  };

  const fetchData = () => {
    axios
      .get(
        `https://history.muffinlabs.com/date/${formValues.month}/${formValues.day}`
      )
      .then((res) => {
        const entries = Object.entries(res.data);
        setEvents(entries[2][1].Events);
        setBirths(entries[2][1].Births);
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
        <input type="text" name="year" list="daysofyear" id="year" />

        <button type="submit" onSubmit={handleSubmit}>
          ENTER
        </button>
        <DatePage events={events} births={births} />
      </form>
    </div>
  );
}

export default DateForm;
