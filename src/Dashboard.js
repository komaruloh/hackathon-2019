import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiAccountCircle } from "@mdi/js";

const User = () => {
  return (
    <Box m={2}>
      <Button fullWidth variant="outlined" component={Link} to={"/detail"}>
        XXXXXXX
      </Button>
    </Box>
  );
};

const List = ({ title, color }) => {
  return (
    <Grid item xs={4}>
      <Box border={1} m={2}>
        <Box display="flex" alignItems="center" borderBottom={1}>
          <Box bgcolor={color} marginRight={1} p={1}>
            <Icon size={1} path={mdiAccountCircle} />
          </Box>
          <Typography variant="body1">{title}</Typography>
        </Box>
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
          <List title="Good" color="green" />
          <List title="Suspicious" color="yellow" />
          <List title="Bad" color="red" />
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
