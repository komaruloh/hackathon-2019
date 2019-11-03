import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StoreProvider, createStore, action } from "easy-peasy";

const userModel = {
  data: [
    {
      type: "good",
      users: [
        {
          username: "XXXXXXX1"
        }
      ]
    },
    {
      type: "suspicious",
      users: [
        {
          username: "XXXXXXX2"
        }
      ]
    },
    {
      type: "bad",
      users: [
        {
          username: "XXXXXXX3"
        }
      ]
    }
  ],
  saveUser: action((state, payload) => {
    const index = state.data.findIndex(({ type }) => type === payload.type);
    state.data[index].users.push(payload);
  })
};

const storeModel = {
  users: userModel
};

const store = createStore(storeModel);

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
