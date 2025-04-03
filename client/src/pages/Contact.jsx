import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Contact() {
  const [successMessage, setSuccessMessage] = useState("");

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Imię jest wymagane"),
    email: Yup.string()
      .email("Nieprawidłowy email")
      .required("Email jest wymagany"),
    message: Yup.string().required("Wiadomość jest wymagana"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (data.success) {
        setSuccessMessage("Dziękujemy! Wiadomość została wysłana.");
        resetForm();
        setTimeout(() => setSuccessMessage(""), 5000);
      }
    } catch (error) {
      console.error("Błąd podczas wysyłania:", error);
    }
  };

  return (
    <section>
      <h2>Kontakt</h2>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>Imię:</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className="error" />

          <label>Email:</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" className="error" />

          <label>Wiadomość:</label>
          <Field name="message" as="textarea" />
          <ErrorMessage name="message" component="div" className="error" />

          <button type="submit">Wyślij</button>
        </Form>
      </Formik>
    </section>
  );
}

export default Contact;
