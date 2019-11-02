import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <Box border={1} m={2}>
      <Link to="/detail">XXXXXXX</Link>
    </Box>
  );
};

const List = ({ title }) => {
  return (
    <Grid item xs={4}>
      <Box border={1} m={2}>
        <div>{title}</div>
        <User />
      </Box>
    </Grid>
  );
};

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Box border={1} m={2}>
        <Grid container spacing={3}>
          <List title="Good" />
          <List title="Suspicious" />
          <List title="Bad" />
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
