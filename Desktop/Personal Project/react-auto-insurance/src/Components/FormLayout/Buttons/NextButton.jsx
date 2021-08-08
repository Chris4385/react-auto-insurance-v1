import React from "react";
import { Button } from "@material-ui/core";
import useStyles from "./styles";

function NextButton({ activeStep, handleClick }) {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      disabled={activeStep > 2}
      onClick={handleClick}
    >
      Next
    </Button>
  );
}

export default NextButton;
