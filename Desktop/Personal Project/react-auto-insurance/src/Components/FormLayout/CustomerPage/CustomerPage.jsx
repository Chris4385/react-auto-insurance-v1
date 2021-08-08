import React from "react";
import { Grid, InputLabel, Divider } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormInput } from "../FormInput/FormInput";
import useStyles from "./styles";
import Form from "../Form/Form";
import SubmitButton from "../Buttons/SubmitButton";

export default function CustomerPage({
  activeStep,
  prevStepMethod,
  handleClick,
  clientData,
}) {
  const { register, handleSubmit, control } = useForm();
  const classes = useStyles();
  const onSubmit = (data, event) => {
    event.preventDefault();
    handleClick(data);
  };
  const onError = (error) => {
    console.log(error);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Grid container spacing={3}>
        <FormInput
          {...register("firstName", { required: true })}
          name="firstName"
          label="First Name"
        />
        <FormInput
          {...register("lastName", { required: true })}
          label="Last Name"
        />
        <FormInput {...register("email", { required: true })} label="Email" />
        <Grid item xs={12} sm={6}>
          <InputLabel required style={{ paddingBottom: "10px" }}>
            Date of Birth
          </InputLabel>

          <Controller
            control={control}
            name="dob"
            label="Date of Birth"
            render={({ field: { onChange, value } }) => (
              <ReactDatePicker
                required
                onChange={onChange}
                isClearable
                selected={value}
                maxDate={new Date()}
                dateFormat="yyyy-MMM-dd"
              />
            )}
          ></Controller>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <div className={classes.buttons}>
        <SubmitButton activeStep={activeStep} />
      </div>
    </Form>
  );
}
