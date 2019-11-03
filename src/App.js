import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Dashboard";
import UserDetail from "./UserDetail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const users = [
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
];

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/dashboard/live">
          <Dashboard />
        </Route>
        <Route path="/dashboard/history">
          <Dashboard users={users} />
        </Route>
        <Route path="/detail">
          <UserDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
