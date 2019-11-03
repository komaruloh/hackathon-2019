import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Dashboard";
import UserDetail from "./UserDetail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useStoreState } from "easy-peasy";

const newUsers = [
  {
    type: "good",
    users: [
      {
        username: "YYYYYY"
      }
    ]
  }
];

function App() {
  const users = useStoreState(state => state.users.data);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/dashboard/live">
          <Dashboard newUser users={newUsers} />
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
