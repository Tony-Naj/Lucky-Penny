import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import "./YearForm.css";
import plant from "../penny-plant.png";

const initialFormValues = {
  years: "",
};

function YearForm() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const history = useHistory();
  // const location = useLocation();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  console.log("year", formValues.years);

  const handleSubmit = (e) => {
    e.preventDefault();
    sortByYear(year);
  };

  let year = formValues.years;

  const sortByYear = (year) => {
    if (year === "1943") {
      history.push("/Steel");
    } else if (year >= "1859" && year < "1909") {
      history.push("/Indian");
    } else if (
      (year >= "1909" && year < "1942") ||
      (year >= "1944" && year < "1958")
    ) {
      history.push("/Wheat");
      // } else if (year >= "1944" && year < "1958") {
      //   alert("Lincoln Wheat Penny");
      //   history.push("/Wheat");
    } else if (year >= "1959" && year < "2008") {
      history.push("/Memorial");
    } else if (year === "2009") {
      history.push("/BiCentennial");
    } else if (year >= "2010") {
      history.push("/Shield");
    }
  };

  return (
    <section id="form-section">
      <div className="year-input">
        {/* <h2>Get your new penny!</h2> */}
        <div className="coin">
          <div className="front"></div>
          <div className="front_b"></div>
          <div className="back"></div>
          <div className="back_b"></div>
        </div>
        <form className="year-form" onSubmit={handleSubmit}>
          <label type="text">Lucky year:</label>
          <input
            className="input-box"
            type="integer"
            min="1"
            max="2021"
            name="years"
            placeholder="Choose your year"
            value={formValues.years}
            onChange={handleChange}
            id="years"
          />
          <button type="submit">GET LUCKY!</button>
        </form>
      </div>
    </section>
  );
}
export default YearForm;
