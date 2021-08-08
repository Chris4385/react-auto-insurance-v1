import React from "react";
import useStyles from "./styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

import logo from "../../assets/icon.png";

function Navbar({ returnToFirstForm }) {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Button}
            size="small"
            onClick={returnToFirstForm}
            className={classes.title}
            color="inherit"
            variant="h6"
          >
            <img className={classes.image} src={logo} alt="icon-logo" />
            Auto Insurance
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
