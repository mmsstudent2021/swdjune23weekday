import React, { useState } from "react";
import {
  ContainerComponents,
  FormComponents,
  ButtonComponents,
} from "../components";
import { useNavigate } from "react-router-dom";
import { Register } from "../service/auth.service";

const LoginPage = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e) =>
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <ContainerComponents>
      <div className="Center">
        <div className="w-2/6 h-auto ">
          <h1 className="font-serif text-4xl text-center mb-10">
            Login Your Contact
          </h1>

          <form className="space-y-7 mt-5" onSubmit={handleSubmit}>
            <FormComponents
              value={formData.email}
              onChange={handleInputChange}
              name={"email"}
              type={"email"}
              label={"Enter Your Email"}
              placeholder="example@gmail.com"
            />
            <FormComponents
              value={formData.password}
              onChange={handleInputChange}
              name={"password"}
              type={"password"}
              label={"Password"}
            />
            <ButtonComponents style={"!rounded-lg"} type="submit">
              Login
            </ButtonComponents>
          </form>
          <p className="mt-5">
            You haven't account pls Register{" "}
            <button
              className="text-blue-400 underline"
              onClick={() => nav("/register")}
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </ContainerComponents>
  );
};

export default LoginPage;
