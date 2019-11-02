import React from "react";

import Box from "@material-ui/core/Box";
import Icon from "@mdi/react";
import { mdiAccountCircle } from "@mdi/js";

const UserDetail = () => {
  return (
    <Box border={1} m={3}>
      <Icon size={4} path={mdiAccountCircle} />
    </Box>
  );
};

export default UserDetail;
