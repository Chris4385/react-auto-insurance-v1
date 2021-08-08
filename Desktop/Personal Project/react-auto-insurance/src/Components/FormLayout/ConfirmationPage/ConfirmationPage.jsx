import React from "react";
import { Grid, Divider } from "@material-ui/core";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useStyles from "./styles";
import Form from "../Form/Form";
import Review from "../Review/Review";
import SubmitButton from "../Buttons/SubmitButton";
import BackButton from "../Buttons/BackButton";

export default function ConfirmationPage({
  clientData,
  vehicleData,
  activeStep,
  handleFinalSubmit,
  setActiveStep,
  prevStepMethod,
}) {
  const classes = useStyles();
  const { handleSubmit } = useForm();
  const handleFinalClick = () => {
    swal(
      "Thank you for your response",
      "Our representative will reach out to you via your email within 24 hours.",
      "success"
    )
      .then((data) => {
        handleFinalSubmit({ ...clientData, ...vehicleData });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form onSubmit={handleSubmit(handleFinalClick)}>
      <Grid container spacing={3}>
        <Divider className={classes.divider} />
        <Grid item sm={12}>
          <Review heading={"Customer Details"} data={clientData} />
          <br />
          <Review heading={"Vehicle Details"} data={vehicleData} />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <div className={classes.buttons}>
        <BackButton activeStep={activeStep} prevStepMethod={prevStepMethod} />
        <SubmitButton activeStep={activeStep} />
      </div>
    </Form>
  );
}
