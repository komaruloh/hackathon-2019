import React from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import UserDetail from "./UserDetail";
import Test from "./Test";
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

const Menu = () => {};

function App() {
  const users = useStoreState(state => state.users.data);
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard/live">Dashboard</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
      </nav>
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
        <Route path="/test">
          <Test />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
