import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DataContextProvider from "./contexts/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContextProvider>
    <App />
  </DataContextProvider>
);

// console.dir(Array);
// const str = "hein htet zan";
// const nums = [1,3,2,2]
// console.log(Array.from(str));
// console.log(Array.from(nums,el => el*2));
// console.log(nums);

// console.log(Array.from({length:5},(_,index) => index));
