import React, { useState } from "react";
import { Paper, Stepper, Step, StepLabel } from "@material-ui/core";
import useStyles from "./styles";
import { Navbar, CustomerPage, VehiclePage, ConfirmationPage } from "./index";

function FormLayout() {
  const classes = useStyles();
  const stepperLabels = ["Client Details", "Vehicle Details", "Confirmation"];
  const [activeStep, setActiveStep] = useState(0);
  const [clientData, setClientData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
  });
  const [vehicleData, setVehicleData] = useState({
    plateNumber: "",
    carMaker: "",
    carModel: "",
    carManufactureDate: "",
    claimsMadeWithinLast5Years: "",
    drivingYearSinceLicenceReceived: "",
  });

  const prevStepMethod = () => {
    activeStep <= 0 ? setActiveStep(0) : setActiveStep((prev) => prev - 1);
  };
  const nextStep = () => {
    activeStep >= 2 ? setActiveStep(0) : setActiveStep((prev) => prev + 1);
  };

  const returnToFirstForm = () => {
    setActiveStep(0);
  };

  const dateFormatter = (date) => {
    const dateStr = date.toString();
    const dateArr = dateStr.split(" ");
    return `${dateArr[2]}-${dateArr[1]}-${dateArr[3]}`;
  };
  const handleClientSubmit = (data) => {
    nextStep();
    const client = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      dateOfBirth: dateFormatter(data.dob),
    };
    setClientData((prev) => ({
      ...prev,
      ...client,
    }));
  };

  const handleVehicleSubmit = (data) => {
    nextStep();
    const vehicle = {
      plateNumber: data.plateNumber,
      carMaker: data.carMaker,
      carModel: data.carModel,
      carManufactureDate: dateFormatter(data.manufactureDate),
      claimsMadeWithinLast5Years: data.previousClaim,
      drivingYearSinceLicenceReceived: data.drivingYear,
    };
    setVehicleData((prev) => ({
      ...prev,
      ...vehicle,
    }));
  };

  const handleFinalSubmit = (data) => {
    console.log(data);
    nextStep();
  };

  return (
    <>
      <Navbar returnToFirstForm={returnToFirstForm} />
      <div className={classes.toolbar}>
        <div className={classes.layout}>
          <Paper className={classes.paper} elevation={2}>
            <Stepper activeStep={activeStep}>
              {stepperLabels.map((label) => (
                <Step key={label} alternativeLabel>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {activeStep === 0 && (
              <CustomerPage
                activeStep={activeStep}
                prevStepMethod={prevStepMethod}
                handleClick={handleClientSubmit}
              />
            )}
            {activeStep === 1 && (
              <VehiclePage
                activeStep={activeStep}
                prevStepMethod={prevStepMethod}
                handleVehicleSubmit={handleVehicleSubmit}
              />
            )}
            {activeStep === 2 && (
              <ConfirmationPage
                clientData={clientData}
                vehicleData={vehicleData}
                activeStep={activeStep}
                handleFinalSubmit={handleFinalSubmit}
                prevStepMethod={prevStepMethod}
              />
            )}
          </Paper>
        </div>
      </div>
    </>
  );
}

export default FormLayout;
