import React, { useState } from "react";
import "./OrderForm.css";

const initialFormValues = {
  name: "",
  email: "",
  street_address: "",
  city: "",
  state: "",
  zip_code: "",
  phone_number: "",
};

const OrderForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  return <div></div>;
};

export default OrderForm;
