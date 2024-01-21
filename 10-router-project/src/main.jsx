import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDom.createRoot(document.querySelector("#root")).render(
  <Router>
    <App />
  </Router>
);
