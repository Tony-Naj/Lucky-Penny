import React, { useState } from "react";
import { useHistory } from "react-router";
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
        {/* <div className="order-head"> */}
        {/* <img
            className="penny-pic-order"
            src={coin}
            alt="golden coin logo"
            border="0"
          /> */}
        <h3 className="order-text">Order Now!</h3>
        {/* </div> */}
        <form className="order-form" onSubmit={handleSubmit}>
          {/* <label>First Name</label> */}
          <input
            type="text"
            name="firstName"
            placeholder="first name"
            value={formValues.name_first}
            onChange={handleChange}
          />
          {/* <label>Last Name</label> */}
          <input
            type="text"
            name="lastName"
            placeholder="last name"
            value={formValues.name_last}
            onChange={handleChange}
          />
          {/* <label>Email</label> */}
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {/* <label>Street Address</label> */}
          <input
            type="text"
            name="streetAddress"
            placeholder="street address"
            value={formValues.street_address}
            onChange={handleChange}
          />
          {/* <label>City</label> */}
          <input
            type="text"
            name="city"
            placeholder="city"
            value={formValues.city}
            onChange={handleChange}
          />
          {/* <label>State</label> */}
          <input
            type="text"
            name="state"
            placeholder="state"
            value={formValues.state}
            onChange={handleChange}
          />
          {/* <label>Zip Code</label> */}
          <input
            type="text"
            name="zip"
            placeholder="zip code"
            value={formValues.zip_code}
            onChange={handleChange}
          />
          {/* <label>Telephone</label> */}
          <input
            type="tel"
            name="telephone"
            placeholder="phone number"
            value={formValues.phone_number}
            onChange={handleChange}
          />
          <input className="button" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
