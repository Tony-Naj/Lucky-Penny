import React, { useState } from "react";
import { useHistory } from "react-router";
import * as yup from "yup";
import "./OrderForm.css";
import coin from "../coin.png";

const initialFormValues = {
  name_first: "",
  name_last: "",
  email: "",
  street_address: "",
  city: "",
  state: "",
  zip_code: "",
  phone_number: "",
};

const OrderForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const history = useHistory();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/Confirmation");
  };

  return (
    <section id="order-section">
      <div className="order-div">
        <h3 className="order-text">Order Now!</h3>
        <form className="order-form" onSubmit={handleSubmit}>
          <label type="text">First name:</label>
          <input
            type="text"
            name="firstName"
            placeholder="first name"
            value={formValues.name_first}
            onChange={handleChange}
          />
          <label type="text">Last Name:</label>
          <input
            type="text"
            name="lastName"
            placeholder="last name"
            value={formValues.name_last}
            onChange={handleChange}
          />
          <label type="text">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <label type="text">Address:</label>
          <input
            type="text"
            name="streetAddress"
            placeholder="street address"
            value={formValues.street_address}
            onChange={handleChange}
          />
          <label type="text">City:</label>
          <input
            type="text"
            name="city"
            placeholder="city"
            value={formValues.city}
            onChange={handleChange}
          />
          <label type="text">State:</label>
          <input
            type="text"
            name="state"
            placeholder="state"
            value={formValues.state}
            onChange={handleChange}
          />
          <label type="text">Zip:</label>
          <input
            type="text"
            name="zip"
            placeholder="zip code"
            value={formValues.zip_code}
            onChange={handleChange}
          />
          <label type="text">Phone:</label>
          <input
            type="tel"
            name="telephone"
            placeholder="phone number"
            value={formValues.phone_number}
            onChange={handleChange}
          />
          <button type="submit" onSubmit={handleSubmit}>
            Get Lucky!
          </button>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
