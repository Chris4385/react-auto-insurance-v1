import React from "react";
import { Button } from "@material-ui/core";
import useStyles from "./styles";

function SubmitButton({ activeStep }) {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      type="submit"
      variant="contained"
      color="primary"
      disabled={activeStep > 2}
    >
      Submit
    </Button>
  );
}

export default SubmitButton;
