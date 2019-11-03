import React from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Icon from "@mdi/react";
import { mdiAccountCircle } from "@mdi/js";
import { useStoreActions } from "easy-peasy";

const data = [
  {
    attributes: "IP Address",
    value: "192.168.0.1"
  },
  {
    attributes: "Country",
    value: "Nigeria"
  },
  {
    attributes: "Device Id",
    value: "1234567890"
  },
  {
    attributes: "Browser Type",
    value: "Lynx"
  },
  {
    attributes: "Operating System",
    value: "Linux"
  },
  {
    attributes: "User Agent",
    value: "Mozilla Firefox"
  },
  {
    attributes: "Email Domain",
    value: "gmail.com"
  },
  {
    attributes: "Email Verified",
    value: "No"
  },
  {
    attributes: "Phone Number",
    value: "0123456789"
  }
];

const UserDetail = () => {
  const saveUser = useStoreActions(actions => actions.users.saveUser);
  return (
    <Container maxWidth="sm">
      <Box
        border={1}
        m={3}
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Box m={1} display="flex" alignSelf="flex-start">
          <Button variant="outlined" component={Link} to="/">
            Back
          </Button>
          <Button
            variant="outlined"
            onClick={() =>
              saveUser({
                username: "YYYYYY"
              })
            }
          >
            Save
          </Button>
        </Box>
        <Icon size={4} path={mdiAccountCircle} />
        <Typography variant="h6">XXXXXXXX</Typography>
        <Typography variant="body1">Risk score: 79/100</Typography>
        <Box
          color="red"
          border={1}
          width={1 / 4}
          display="flex"
          justifyContent="center"
        >
          <Typography variant="body1">BAD</Typography>
        </Box>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Attributes</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(({ attributes, value }) => (
              <TableRow>
                <TableCell>{attributes}</TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};

export default UserDetail;
