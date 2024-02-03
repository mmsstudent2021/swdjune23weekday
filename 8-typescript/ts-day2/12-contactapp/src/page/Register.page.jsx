import React, { useState } from "react";
import {
  ButtonComponents,
  ContainerComponents,
  FormComponents,
} from "../components";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <ContainerComponents>
      <div className="Center">
        <div className="w-2/6 h-auto">
          <h1 className=" font-serif text-4xl mb-10">Register Your Account</h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <FormComponents
              onChange={handleInputChange}
              value={formData.name}
              label={"Enter Username"}
              type="text"
              name="name"
            />
            <FormComponents
              onChange={handleInputChange}
              value={formData.email}
              label={"Enter Your Email"}
              type="email"
              name="email"
              placeholder="example@gmail.com"
            />
            <FormComponents
              onChange={handleInputChange}
              value={formData.password}
              label={"Enter Your Password"}
              type="password"
              name="password"
              placeholder="Password"
            />
            <FormComponents
              onChange={handleInputChange}
              value={formData.password_confirmation}
              label={"Confirm Your Password"}
              type="password"
              name="password_confirmation"
              placeholder="Confirm Password"
            />
            <ButtonComponents type={"submit"} style={"!rounded-lg"}>
              Register
            </ButtonComponents>
          </form>
        </div>
      </div>
    </ContainerComponents>
  );
};

export default RegisterPage;
