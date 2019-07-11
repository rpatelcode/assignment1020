import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";

import { CSSTransition } from "react-transition-group";

const Form = () => {
  const [step, setstep] = React.useState(1);

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };
  const cancelStep = () => {
    setstep(1);
  };
  switch (step) {
    case 1:
      return (
        <CSSTransition
          key={step}
          in={true}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Step1 cancelStep={cancelStep} nextStep={nextStep} />
        </CSSTransition>
      );

    case 2:
      return (
        <CSSTransition
          key={step}
          in={true}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Step2
            cancelStep={cancelStep}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </CSSTransition>
      );
    case 3:
      return (
        <CSSTransition
          key={step}
          in={true}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Step3
            cancelStep={cancelStep}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </CSSTransition>
      );
    case 4:
      return (
        <Step4
          cancelStep={cancelStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 5:
      return (
        <CSSTransition
          key={step}
          in={true}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Step5
            cancelStep={cancelStep}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </CSSTransition>
      );
    case 6:
      return (
        <CSSTransition
          key={step}
          in={true}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Step6
            cancelStep={cancelStep}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </CSSTransition>
      );
    case 7:
      return (
        <CSSTransition
          key={step}
          in={true}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Step7
            cancelStep={cancelStep}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </CSSTransition>
      );
    case 8:
      return (
        <CSSTransition
          key={step}
          in={true}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Step8 cancelStep={cancelStep} prevStep={prevStep} />
        </CSSTransition>
      );
    default:
      return null;
  }
};

export default Form;
