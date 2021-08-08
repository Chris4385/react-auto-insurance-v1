import React, { useState } from "react";
import {
  Grid,
  InputLabel,
  Divider,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormInput } from "../FormInput/FormInput";
import useStyles from "./styles";
import Form from "../Form/Form";
import SubmitButton from "../Buttons/SubmitButton";
import BackButton from "../Buttons/BackButton";

export default function CustomerPage({
  activeStep,
  prevStepMethod,
  handleVehicleSubmit,
}) {
  const { register, handleSubmit, control } = useForm();
  const [previousClaim, setPreviousClaim] = useState("");
  const [drivingYear, setDrivingYear] = useState("");
  const classes = useStyles();
  const onSubmit = (data) => {
    handleVehicleSubmit({ ...data, previousClaim, drivingYear });
  };
  const onError = (error) => {
    console.log(error);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Grid container spacing={3}>
        <FormInput
          {...register("plateNumber", { required: true })}
          label="Plate Number"
        />
        <FormInput
          {...register("carMaker", { required: true })}
          label="Car Maker"
        />
        <FormInput
          {...register("carModel", { required: true })}
          label="Car Model"
        />
        <Grid item xs={12} sm={6}>
          <InputLabel required style={{ paddingBottom: "10px" }}>
            Car Manufacture Date
          </InputLabel>

          <Controller
            control={control}
            name="manufactureDate"
            label="carManufacturerDate"
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
        <Grid item sm={6} xs={12}>
          <InputLabel required>
            How many years since you have driving licence?
          </InputLabel>
          <FormControl style={{ minWidth: 240 }} required>
            <Select
              className={classes.select}
              value={drivingYear}
              onChange={(event) => setDrivingYear(event.target.value)}
            >
              <MenuItem value={"Less than one year"}>
                Less than one year
              </MenuItem>
              <MenuItem value={"One to two years"}>One to two years</MenuItem>
              <MenuItem value={"Two to three years"}>
                Two to three years
              </MenuItem>
              <MenuItem value={"Three to four years"}>
                Three to four years
              </MenuItem>
              <MenuItem value={"Four to five years"}>
                Four to five years
              </MenuItem>
              <MenuItem value={"More than five years"}>
                More than five years
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item sm={6} xs={12}>
          <FormControl required component="fieldset">
            <FormLabel component="legend">
              Do you made any claims in last 5 years?
            </FormLabel>
            <RadioGroup
              row
              name="previousClaim"
              value={previousClaim}
              onChange={(event) => setPreviousClaim(event.target.value)}
            >
              <FormControlLabel
                value="Yes"
                control={<Radio size="small" required={true} />}
                label="Yes"
              />
              <FormControlLabel
                value="No"
                control={<Radio size="small" required={true} />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
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
