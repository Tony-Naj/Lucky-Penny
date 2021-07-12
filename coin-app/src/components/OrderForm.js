import React, { useState } from "react";
import "./OrderForm.css";

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

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          value={formValues.name_first}
          onChange={handleChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          value={formValues.name_last}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <label>Street Address</label>
        <input
          type="text"
          name="streetAddress"
          placeholder="street address"
          value={formValues.street_address}
          onChange={handleChange}
        />
        <label>City</label>
        <input
          type="text"
          name="city"
          placeholder="city"
          value={formValues.city}
          onChange={handleChange}
        />
        <label>State</label>
        <input
          type="text"
          name="state"
          placeholder="state"
          value={formValues.state}
          onChange={handleChange}
        />
        <label>Zip Code</label>
        <input
          type="text"
          name="zip"
          placeholder="zip code"
          value={formValues.zip_code}
          onChange={handleChange}
        />
        <label>Telephone</label>
        <input
          type="tel"
          name="telephone"
          placeholder="phone number"
          value={formValues.phone_number}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default OrderForm;
