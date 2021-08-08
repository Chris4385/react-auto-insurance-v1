import React from "react";
import useStyles from "./styles";

export default function Form({ children, ...props }) {
  const classes = useStyles();
  return (
    <form className={classes.root} {...props}>
      {children}
    </form>
  );
}
