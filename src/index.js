import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import counter from "./modules/counter";
import App from "./App";

const store = createStore(counter, { counter: 0 });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);