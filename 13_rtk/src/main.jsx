import ReactDom from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDom.createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
