// React Dependency
import React from "react";
// React Dom Dependency
import ReactDOM from "react-dom";
// React Redux Dependency
import { Provider } from "react-redux";
// Configure Store
import configureStore from "./store/index";
// App Component
import App from "./App";
// CSS Stylesheet
import "./index.css";
// Setup Store
const store = configureStore();
// Where the entire app is rendered
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
