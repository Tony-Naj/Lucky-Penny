import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./YearForm.css";
import * as yup from "yup";
import yfSchema from "../validation/yearFormSchema";
import Coin from "./Coin";

const initialFormValues = {
  years: "",
};

function YearForm() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState(initialFormValues);

  useEffect(() => {
    yfSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    yup
      .reach(yfSchema, name)
      .validate(value)
      .then((valid) => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors[0] });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

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
        <Coin />
        <form className="year-form" onSubmit={handleSubmit}>
          <label className="year-form-label" type="text">
            {" "}
            Select your lucky year:
          </label>

          <input
            className="input-box"
            type="integer"
            min="1859"
            max="2021"
            name="years"
            placeholder="Choose your year"
            value={formValues.years}
            onChange={handleChange}
            id="years"
          />
          <p>{errors.years}</p>
          <button disabled={disabled} type="submit">
            GET LUCKY!
          </button>
        </form>
      </div>
    </section>
  );
}
export default YearForm;
