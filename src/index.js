import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Main from "./Main";
import { store, persistor } from "./redux/store";
import "./style.scss";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loadin={null} persistor={persistor}>
      <Main />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
