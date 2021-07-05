import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";

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
    history.push("/History");
    // history.location.pathname("/History/?id:ls");
  };

  let year = formValues.years;

  const sortByYear = (year) => {
    if (year === "1943") {
      alert("Lincoln Steel Penny");
    } else if (year >= "1859" && year < "1909") {
      alert("Indian Head Penny");
    } else if (year >= "1909" && year < "1958") {
      alert("Lincoln Wheat Penny");
    } else if (year >= "1959" && year < "2008") {
      alert("Lincoln Memorial Penny");
    } else if (year === "2009") {
      alert("Lincoln BiCentennial Penny");
    } else if (year >= "2010") {
      alert("Lincoln Shield Penny");
    }
  };

  return (
    <div className="year-input">
      <h3>Enter your year to get your lucky penny!</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="integer"
          min="1"
          max="2021"
          name="years"
          placeholder="Choose your year"
          value={formValues.years}
          onChange={handleChange}
          id="years"
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
export default YearForm;
