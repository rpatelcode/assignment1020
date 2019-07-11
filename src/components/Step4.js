import React from "react";
import { Form, Message, Button, Input, Container } from "semantic-ui-react";
import { updateYourDetails } from "../actions/yourDetails";
import { useStateMachine } from "little-state-machine";
import SelectSearchDropdown from "./other/SelectSearchDropdown";
import Steps from "./Steps";
import FooterMessage from "./other/FooterMessage";

const Step4 = props => {
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
      <Steps stepNumber={4} />
      <div>
        <Message
          attached
          header="Approval Details"
          content="Required information"
        />
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

          <Form.Field>
            <label> Available Agencies</label>
            <SelectSearchDropdown />
          </Form.Field>

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

export default Step4;
