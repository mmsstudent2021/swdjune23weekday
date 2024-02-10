import React from "react";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ContactAddPage,
  ContactPage,
} from "./page";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />}>
          <Route index element={<ContactPage />} />
          <Route path="add" element={<ContactAddPage />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
