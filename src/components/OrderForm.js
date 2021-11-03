import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import * as yup from "yup";
import "./OrderForm.css";
import ofSchema from "../validation/orderFormSchema.js";

const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  streetAddress: "",
  city: "",
  state: "",
  zip: "",
  telephone: "",
};

const OrderForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    ofSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    yup
      .reach(ofSchema, name)
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

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/Confirmation");
  };

  return (
    <section id="order-section">
      <div className="order-div">
        <div className="coin">
          <div className="front"></div>
          <div className="front_b"></div>
          <div className="back"></div>
          <div className="back_b"></div>
        </div>
        <h3 className="order-text">Order Now!</h3>
        <div className="form-container">
          <form className="order-form" onSubmit={handleSubmit}>
            <label type="text">
              First name:
              <input
                error={errors.firstName}
                type="text"
                name="firstName"
                placeholder="first name"
                value={formValues.firstName}
                onChange={handleChange}
              />
              <p>{errors.firstName}</p>
            </label>
            <label type="text">
              Last Name:
              <input
                type="text"
                name="lastName"
                placeholder="last name"
                value={formValues.lastName}
                onChange={handleChange}
              />
              <p>{errors.lastName}</p>
            </label>
            <label type="text">
              Email:
              <input
                type="email"
                name="email"
                placeholder="email"
                value={formValues.email}
                onChange={handleChange}
              />
              <p>{errors.email}</p>
            </label>
            <label type="text">
              Address:
              <input
                type="text"
                name="streetAddress"
                placeholder="street address"
                value={formValues.streetAddress}
                onChange={handleChange}
              />
              <p>{errors.streetAddress}</p>
            </label>
            <label type="text">
              City:
              <input
                type="text"
                name="city"
                placeholder="city"
                value={formValues.city}
                onChange={handleChange}
              />
              <p>{errors.city}</p>
            </label>
            <label type="text">
              State:
              <input
                type="text"
                name="state"
                placeholder="state"
                value={formValues.state}
                onChange={handleChange}
              />
              <p>{errors.state}</p>
            </label>
            <label type="text">
              Zip:
              <input
                type="text"
                name="zip"
                placeholder="zip code"
                value={formValues.zip}
                onChange={handleChange}
              />
              <p>{errors.zip}</p>
            </label>
            <label type="text">
              Phone:
              <input
                type="tel"
                name="telephone"
                placeholder="phone number"
                value={formValues.telephone}
                onChange={handleChange}
              />
              <p>{errors.telephone}</p>
            </label>
            <button disabled={disabled} type="submit" onSubmit={handleSubmit}>
              Get Lucky!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
