import React, { useState } from "react";
import { useHistory } from "react-router";

const initialFormValues = {
  years: "",
};

function YearForm(props) {
  const { year, setYear } = props;
  const [formValues, setFormValues] = useState(initialFormValues);

  const history = useHistory();
  // let num = parseInt(formValues.year);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  console.log("year", year);
  console.log("years", formValues.years);

  const handleSubmit = (e) => {
    e.preventDefault();
    setYear(formValues.years);
    sortByYear();
    history.push("/History");
  };

  const sortByYear = (year) => {
    if (year === 1958) {
      alert("this is it");
      console.log("year", year);
    } else if (year === NaN) {
      alert("where my dogs at");
    }
  };

  return (
    <div className="year-input">
      <h3>Enter your year to get your lucky penny!</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="integer"
          name="year"
          list="year"
          placeholder="Choose your year"
          value={formValues.year}
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default YearForm;
