import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import Language from './Languages';
import Genres from './Genres';
import Vedio1 from './vedioQuality';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Language",
    "Genres",
    "Quality",
  ];
}
const Languages = () => {
  const { control } = useFormContext();
  return (
    <>
      <Language />
    </>
  );
};
const Genre = () => {
  const { control } = useFormContext();
  return (
    <>
      <Genres />
    </>
  );
};
const Vedio = () => {
  const { control } = useFormContext();
  return (
    <>
      <Vedio1 />
    </>
  );
};


function getStepContent(step) {
  switch (step) {
    case 0:
      return <Language />;

    case 1:
      return <Genres />;
    case 2:
      return <Vedio1/>;
    default:
      return "unknown step";
  }
}

const OTT = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      value:"",
      name:"",
      type:""
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                
              >
                back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  disabled={activeStep === 0}
                  variant="contained"
                  color="primary"
                  onClick={handleBack}
                >
                  Back
                </Button>
              )}
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default OTT;