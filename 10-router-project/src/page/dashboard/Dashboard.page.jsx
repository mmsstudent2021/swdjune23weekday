import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { state } = useLocation();
  const nav = useNavigate();
  console.log(state);

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (!data) {
      nav("/admin");
    }
  }, []);

  return (
    <div className="grid grid-cols-10 h-screen">
      <div className="col-span-2">
        <h1>{state?.data?.email}</h1>
        <ul>
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>

          <Link to="/dashboard/user">
            <li>User</li>
          </Link>

          <Link to="/dashboard/blog">
            <li>Blog</li>
          </Link>
        </ul>
      </div>
      <div className="col-span-7">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
