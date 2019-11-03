import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StoreProvider, createStore, action, computed } from "easy-peasy";
import * as R from "ramda";

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

const dndModel = {
  data: {
    users: {
      "user-1": {
        id: "user-1",
        username: "ZZZZZZZ1"
      },
      "user-2": {
        id: "user-2",
        username: "ZZZZZZZ2"
      },
      "user-3": {
        id: "user-3",
        username: "ZZZZZZZ3"
      }
    },
    columns: {
      userColumn: {
        id: "userColumn",
        userIds: ["user-1", "user-2", "user-3"]
      },
      testColumn: {
        id: "testColumn",
        userIds: []
      }
    }
  },
  columnIds: computed(state => Object.keys(state.data.columns)),
  saveDnd: action((state, payload) => {
    const newOrder = R.move(payload.originalIndex, payload.newIndex)(
      state.data.columns.userColumn.userIds
    );
    state.data.columns.userColumn.userIds = newOrder;
  }),
  removeUser: action((state, payload) => {
    const newOrder = R.remove(payload.originalIndex, 1)(
      state.data.columns.userColumn.userIds
    );
    state.data.columns.userColumn.userIds = newOrder;
  })
};

const storeModel = {
  users: userModel,
  dnd: dndModel
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
