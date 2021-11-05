import * as yup from "yup";

export default yup.object().shape({
  day: yup
    .number()
    .typeError("you must specify a number")
    .min(1, "Must be at least 1")
    .max(31, "May not be greater than 31")
    .required("Day is required"),
  month: yup.string().required("Month is required"),
});
