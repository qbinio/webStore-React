import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactFormFormik = () => {
  const onSubmitValidationSchema = Yup.object().shape({
    userName: Yup.string().required("You have to type something"),
    userEmail: Yup.string()
      .email("Invalid email")
      .required("You have to type something"),
    message: Yup.string()
      .required("You have to type something")
      .min(20, "Message is too short"),
    acceptTerms: Yup.bool().oneOf([true], "You have to accept terms"),
  });

  return (
    <>
      <Formik
        initialValues={{
          userName: "",
          userEmail: "",
          message: "",
          acceptTerms: false,
        }}
        validationSchema={onSubmitValidationSchema}
        onSubmit={({ values }) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form>
            <Field type="text" name="userName" value={values.userName} />
            <ErrorMessage name="userName" />
            <Field type="email" name="userEmail" value={values.userEmail} />
            <ErrorMessage name="userEmail" />
            <Field
              type="text"
              name="message"
              value={values.message}
              component="textarea"
            />
            <ErrorMessage name="message" />
            <Field type="checkbox" name="acceptTerms" />
            <ErrorMessage name="acceptTerms" />

            <button type="submit">Send</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactFormFormik;
