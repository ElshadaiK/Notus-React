import React from "react";
import { Formik } from 'formik';

// components

export default function Forms() {
  return (
    <>

      <div className="flex flex-wrap mt-24">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded">

            <div>
            <h1
                  className="text-blueGray-700 text-lg uppercase hidden lg:inline-block font-semibold mb-4"
                >
                  new loan
                </h1>
              <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <button type="submit" disabled={isSubmitting}>
                      Submit
           </button>
                  </form>
                )}
              </Formik>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
