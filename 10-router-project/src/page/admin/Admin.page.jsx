import React, { useEffect, useState } from "react";
import { Auth } from "../../service/user.service";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const nav = useNavigate();
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const finder = localStorage.getItem("auth");

    if (finder) {
      nav("/dashboard");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await Auth("user", formData);

    if (data) {
      localStorage.setItem("auth", JSON.stringify(data));
      nav("/dashboard", { state: { data } });
    }
  };

  return (
    <div className="h-screen bg-red-500">
      <div className="w-[50%] mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="email">Enter Your Email</label>
            <input
              value={formData.email}
              onChange={(e) =>
                setFromData((pre) => ({ ...pre, email: e.target.value }))
              }
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Enter Your Password</label>
            <input
              value={formData.password}
              onChange={(e) =>
                setFromData((pre) => ({ ...pre, password: e.target.value }))
              }
              type="password"
              name="password"
              id="password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
