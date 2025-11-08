import React from "react";
import BreadCrumb from "../../components/about/Breadcrumb";
import ContactForm from "../../components/contact/ContactForm";
import Map from "../../components/contact/Map";

const Contact = () => {
  return (
    <div>
      <BreadCrumb title="Contact" />
      {/* <Map /> */}
      <ContactForm />
    </div>
  );
};

export default Contact;
