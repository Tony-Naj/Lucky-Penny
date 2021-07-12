import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import DatePage from "./DatePage";

const initialFormValues = {
  day: "",
  month: "",
};

function DateForm(props) {
  const { setBirths, setEvents, setDate } = props;

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
        setDate(res.data.date);
        console.log(res.data.date);
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
        <label type="text">Choose a Day:</label>
        <input
          type="integer"
          min="0"
          max="31"
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
          placeholder="Month"
          list="daysofmonth"
          value={formValues.month}
          onChange={handleChange}
          id="month"
        />
        <datalist id="daysofmonth">
          <option value="1" option="January"></option>
          <option value="2" option="February"></option>
          <option value="3" option="March"></option>
          <option value="4" option="April"></option>
          <option value="5" option="May"></option>
          <option value="6" option="June"></option>
          <option value="7" option="July"></option>
          <option value="8" option="August"></option>
          <option value="9" option="September"></option>
          <option value="10" option="October"></option>
          <option value="11" option="November"></option>
          <option value="12" option="December"></option>
        </datalist>

        <button type="submit" onSubmit={handleSubmit}>
          ENTER
        </button>
      </form>
    </div>
  );
}

export default DateForm;
