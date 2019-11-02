import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <div>Good</div>
        </Grid>
        <Grid item xs={4}>
          <div>Suspicious</div>
        </Grid>
        <Grid item xs={4}>
          <div>Bad</div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
