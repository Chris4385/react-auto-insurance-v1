import React from "react";
import { Button } from "@material-ui/core";
import useStyles from "./styles";

function BackButton({ activeStep, prevStepMethod }) {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      variant="outlined"
      onClick={prevStepMethod}
      disabled={activeStep <= 0}
    >
      Back
    </Button>
  );
}

export default BackButton;
