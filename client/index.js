import React from "react"
import { render } from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import rootReducer from "./reducers"

const store = createStore(rootReducer)

require("./main.css");

import App from "./components/App";

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("app")
);
