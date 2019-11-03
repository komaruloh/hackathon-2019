import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiAccountCircle } from "@mdi/js";
import * as R from "ramda";

const PillSwitcher = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      aria-label="disabled tabs example"
    >
      <Tab label="Live" component={Link} to="/dashboard/live" />
      <Tab label="History" component={Link} to="/dashboard/history" />
    </Tabs>
  );
};

const User = ({ username }) => {
  return (
    <Box m={2}>
      <Button fullWidth variant="outlined" component={Link} to="/detail">
        {username}
      </Button>
    </Box>
  );
};

const List = ({ title, color, users }) => {
  return (
    <Grid item xs={4}>
      <Box border={1} m={2}>
        <Box display="flex" alignItems="center" borderBottom={1}>
          <Box bgcolor={color} marginRight={1} p={1}>
            <Icon size={1} path={mdiAccountCircle} />
          </Box>
          <Typography variant="body1">{title}</Typography>
        </Box>
        {users &&
          users.map(({ username }) => {
            return <User username={username} />;
          })}
      </Box>
    </Grid>
  );
};

const Dashboard = ({ users = [] }) => {
  const getUsers = R.curry(type =>
    R.pipe(
      R.find(R.propEq("type", type)),
      R.prop("users")
    )
  );

  const goodUsers = getUsers("good")(users);
  const suspiciousUsers = getUsers("suspicious")(users);
  const badUsers = getUsers("bad")(users);

  return (
    <Container maxWidth="lg">
      <Box display="flex" flexDirection="row-reverse">
        <PillSwitcher />
      </Box>
      <Box border={1} m={2}>
        <Grid container spacing={3}>
          <List title="Good" color="green" users={goodUsers} />
          <List title="Suspicious" color="yellow" users={suspiciousUsers} />
          <List title="Bad" color="red" users={badUsers} />
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
