import React from "react"; // , { useEffect }
import { Form, Message, Button, Input, Container } from "semantic-ui-react";
import { updateYourDetails } from "../actions/yourDetails";
import { useStateMachine } from "little-state-machine";
import Step5inSide from "./other/Step5inSide";
import Steps from "./Steps";
import FooterMessage from "./other/FooterMessage";

const Step5 = props => {
  const { state } = useStateMachine(updateYourDetails);

  const onSubmit = e => {
    e.preventDefault();
    props.nextStep();
  };
  const cancel = e => {
    e.preventDefault();
    props.cancelStep();
  };
  const back = e => {
    e.preventDefault();
    props.prevStep();
  };

  return (
    <Container>
      <Steps stepNumber={5} />
      <div>
        <Message attached header="By-Law affected" content="By-Law affected" />
        <Form className="attached fluid segment" onSubmit={onSubmit} success>
          <Form.Group widths="equal">
            <Form.Field
              id="processingByLaw"
              name="processingByLaw"
              control={Input}
              label="Processing By-law"
              defaultValue={state.processingByLaw}
              readOnly
            />
            <Form.Field
              id="municipality"
              name="municipality"
              control={Input}
              label="Municipality"
              defaultValue={state.municipality}
              readOnly
            />
          </Form.Group>
          <Step5inSide />

          <Button content="Cancel" onClick={cancel} secondary />
          <Button
            content="Back"
            icon="left arrow"
            labelPosition="left"
            onClick={back}
            primary
          />
          <Button
            content="Next"
            icon="right arrow"
            labelPosition="right"
            primary
          />
        </Form>
        <FooterMessage />
      </div>
    </Container>
  );
};

export default Step5;
