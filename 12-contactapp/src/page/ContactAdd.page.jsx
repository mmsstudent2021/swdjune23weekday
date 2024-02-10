import React, { useState } from "react";
import { ButtonComponents, FormComponents } from "../components";

const ContactAddPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleFormDataChange = (e) =>
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="Center">
      <div className="w-3/5 h-auto shadow px-6 py-7 border">
        <h1 className="font-serif text-xl mb-10 text-center">
          Create Your Contact
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <FormComponents
            onChange={handleFormDataChange}
            value={formData.name}
            label={"Name"}
            type="text"
            name="name"
          />
          <FormComponents
            onChange={handleFormDataChange}
            value={formData.phone}
            label={"Phone"}
            type="text"
            name="phone"
          />
          <FormComponents
            onChange={handleFormDataChange}
            value={formData.email}
            label={"Email"}
            type="text"
            name="email"
          />
          <FormComponents
            onChange={handleFormDataChange}
            value={formData.address}
            label={"Address"}
            type="text"
            name="address"
          />
          <ButtonComponents type="submit">Create Contact</ButtonComponents>
        </form>
      </div>
    </div>
  );
};

export default ContactAddPage;
