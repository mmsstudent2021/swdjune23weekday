import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/Store";

ReactDom.createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
