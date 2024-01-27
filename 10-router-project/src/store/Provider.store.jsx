import React from "react";
import ApiContextProvider from "./ApiContext";

const ProviderStore = ({ children }) => {
  return <ApiContextProvider>{children}</ApiContextProvider>;
};

export default ProviderStore;
