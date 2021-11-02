import * as yup from "yup";
import ofSchema from "../validation/orderFormSchema.js";

const phoneRegEx = /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

export default yup.object().shape({
  name_first: yup
    .string()
    .required("First name is required")
    .min(3, "First name must be 3 chars long"),
  name_last: yup
    .string()
    .required("Last name is required")
    .min(3, "Last name must be 3 chars long"),
  email: yup
    .string()
    .email("must be a valid email")
    .required("email is required"),
  street_address: yup.string().required("Street address is required"),
  city: yup
    .string()
    .required("City is required")
    .min(3, "City must be 3 char long"),
  state: yup
    .string()
    .required("State is required")
    .min(2, "State must be 2 char")
    .max(2, "State must be 2 char"),
  zip_code: yup
    .string()
    .required("Zip code is required")
    .min(5, "Zip code must be 5 char")
    .max(11, "Zip code must be less than 11 char"),
  phone_number: yup
    .string()
    .matches(phoneRegEx, "Must be a valid phone number")
    .required("Phone number is required"),
});
