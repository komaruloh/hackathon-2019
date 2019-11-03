import React from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import UserDetail from "./UserDetail";
import Test from "./Test";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import LinkMui from "@material-ui/core/Link";

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

const Menu = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" width={1 / 10} justifyContent="space-around">
          <LinkMui color="inherit" component={Link} to="/test">
            Test
          </LinkMui>
          <LinkMui color="inherit" component={Link} to="/dashboard/live">
            Dashboard
          </LinkMui>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

function App() {
  const users = useStoreState(state => state.users.data);
  return (
    <Router>
      <Menu />
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
