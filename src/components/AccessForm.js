import React from 'react';
 import { useFormik } from 'formik';
 import * as Yup from 'yup';
 import './AccessForm.css'
 
 const AccessForm = () => {
   const formik = useFormik({
     initialValues: {
       username: '',
       email: '',
     },
     validationSchema: Yup.object({
       username: Yup.string()
         .max(15, 'Must be 15 characters or less')
         .required('Required'),
       email: Yup.string().email('Invalid email address').required('Required'),
     }),
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
   return (
    <div className='signup-card'>
      <form onSubmit={formik.handleSubmit}>
  
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="userame"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.username && formik.errors.username ? (
          <div>{formik.errors.username}</div>
        ) : null}
  
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
  
        <button type="submit">Sign Up!</button>
        <button type="submit">Sign In!</button>
      </form>
     </div>
   );
 };

 export default AccessForm