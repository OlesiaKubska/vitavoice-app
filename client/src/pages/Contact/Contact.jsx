import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ContactWrapper } from "./Contact.styled";
import AOS from "aos";
import "aos/dist/aos.css";
import contactImg from "src/assets/images/contact/contact-bg.jpg";

function Contact() {
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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
    <ContactWrapper>
      <h2 data-aos="fade-up">Kontakt</h2>
      <img
        src={contactImg}
        alt="Kontakt"
        data-aos="fade-up"
        style={{ borderRadius: "1rem", marginBottom: "2rem" }}
      />

      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ resetForm }) => (
          <Form data-aos="fade-up">
            <label>Imię:</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" className="error" />

            <label>Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" className="error" />

            <label>Wiadomość:</label>
            <Field name="message" as="textarea" rows="5" />
            <ErrorMessage name="message" component="div" className="error" />

            <div
              style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
            >
              <button type="submit" className="btn btn-primary">
                Wyślij
              </button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={resetForm}
              >
                Wyczyść
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </ContactWrapper>
  );
}

export default Contact;
