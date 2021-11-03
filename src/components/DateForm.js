import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./DateForm.css";
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

  let url = `https://history.muffinlabs.com/date/${formValues.month}/${formValues.day}`;
  const fetchData = async () => {
    await axios
      .get(url)
      .then((res) => {
        const entries = Object.entries(res.data);
        setEvents(entries[2][1].Events);
        setBirths(entries[2][1].Births);
        setDate(res.data.date);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="form-section">
      <div className="date-div">
        <div className="coin">
          <div className="front"></div>
          <div className="front_b"></div>
          <div className="back"></div>
          <div className="back_b"></div>
        </div>

        <form className="date-form" onSubmit={handleSubmit}>
          <label type="text">Day:</label>
          <input
            className="input"
            type="integer"
            min="0"
            max="31"
            name="day"
            placeholder="Day"
            value={formValues.day}
            onChange={handleChange}
            id="day"
          />
          <label type="text">Month:</label>
          <input
            className="input"
            type="text"
            name="month"
            placeholder="Month"
            list="daysofmonth"
            value={formValues.month}
            onChange={handleChange}
            id="month"
          />
          <datalist id="daysofmonth">
            <option value="1-January" option="January"></option>
            <option value="2-February" option="February"></option>
            <option value="3-March" option="March"></option>
            <option value="4-April" option="April"></option>
            <option value="5-May" option="May"></option>
            <option value="6-June" option="June"></option>
            <option value="7-July" option="July"></option>
            <option value="8-August" option="August"></option>
            <option value="9-September" option="September"></option>
            <option value="10-October" option="October"></option>
            <option value="11-November" option="November"></option>
            <option value="12-December" option="December"></option>
          </datalist>

          <button type="submit" onSubmit={handleSubmit}>
            Get Lucky!
          </button>
        </form>
      </div>
    </section>
  );
}

export default DateForm;
