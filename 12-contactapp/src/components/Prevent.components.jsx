import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PreventComponents = ({ fail, check, children }) => {
  const nav = useNavigate();

  useEffect(() => {
    if (check) {
      nav(fail);
    }
  }, []);

  return <>{children}</>;
};

export default PreventComponents;
