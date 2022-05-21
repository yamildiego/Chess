import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import "./index.css";
import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";

import rootReducers from "./Reducers";

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Router basename="/"> */}
      <App />
      {/* </Router> */}
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
