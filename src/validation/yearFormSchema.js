import * as yup from "yup";

export default yup.object().shape({
  years: yup
    .number()
    .typeError("you must specify a number")
    .min(1859, "Please enter a year after 1858")
    .max(2021, "Please enter a valid year")
    .required("Year is required"),
});
