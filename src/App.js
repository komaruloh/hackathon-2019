import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Dashboard";
import UserDetail from "./UserDetail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/detail">
          <UserDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
