import React from "react";
import { Provider } from "react-redux";

import Form from "./Form";
import List from "./List";

import store from "./store/store";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Form />
        <p>Redux</p>
        <List />
      </div>
    </Provider>
  );
};

export default App;
