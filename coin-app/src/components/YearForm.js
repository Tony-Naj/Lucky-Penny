import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import "./YearForm.css";

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
      alert("Lincoln Steel Penny");
      history.push("/Steel");
    } else if (year >= "1859" && year < "1909") {
      alert("Indian Head Penny");
      history.push("/Indian");
    } else if (year >= "1909" && year < "1958") {
      alert("Lincoln Wheat Penny");
      history.push("/Wheat");
    } else if (year >= "1959" && year < "2008") {
      alert("Lincoln Memorial Penny");
      history.push("/Memorial");
    } else if (year === "2009") {
      alert("Lincoln BiCentennial Penny");
      history.push("/BiCentennial");
    } else if (year >= "2010") {
      alert("Lincoln Shield Penny");
      history.push("/Shield");
    }
  };

  return (
    <section className="form-section">
      <div className="year-input">
        <img
          className="penny-pic"
          src="https://i.ibb.co/CnDbH0c/d0ed91a6ddd47e4cbe2066bd0a0eed45.png"
          alt="d0ed91a6ddd47e4cbe2066bd0a0eed45"
          border="0"
        />
        <h3>Enter your lucky year to get your new penny!</h3>
        <form className="year-form" onSubmit={handleSubmit}>
          <input
            className="input"
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
