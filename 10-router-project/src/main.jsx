import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import ProviderStore from "./store/Provider.store";

ReactDom.createRoot(document.querySelector("#root")).render(
  <ProviderStore>
    <Router>
      <App />
    </Router>
  </ProviderStore>
);
