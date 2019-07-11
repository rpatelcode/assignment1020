import React from "react"; // , { useEffect }
import {
  Form,
  Message,
  Button,
  Input,
  Grid,
  TextArea,
  Container
} from "semantic-ui-react";
import { updateYourDetails } from "../actions/yourDetails";
import { useStateMachine } from "little-state-machine";
import Steps from "./Steps";
import FooterMessage from "./other/FooterMessage";
import SubmitFinalBtn from "./other/SubmitFinalBtn";

const Step8 = props => {
  const { state } = useStateMachine(updateYourDetails);

  const onSubmit = e => {
    e.preventDefault();
    // props.nextStep();
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
      <Steps stepNumber={8} />
      <div>
        <Message
          attached
          header="Comments"
          content="General internal / unpublished work notes"
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
          <Form.Group widths="equal">
            <Form.Field
              id="stp8Comments"
              name="stp8Comments"
              control={TextArea}
              label="Please enter comments"
            />
          </Form.Group>

          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Button content="Cancel" onClick={cancel} secondary />
                <Button
                  content="Back"
                  icon="left arrow"
                  labelPosition="left"
                  onClick={back}
                  primary
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <SubmitFinalBtn />
                {/* <Button
                  floated="right"
                  positive
                  size="huge"
                  content="Submit"
                  icon="right arrow"
                  labelPosition="right"
                  primary
                /> */}
              </Grid.Column>
            </Grid.Row>
          </Grid>

          {/* <Grid>
            <Grid.Column floated="left" width={7}>
              <Button content="Cancel" onClick={cancel} secondary />
              <Button
                content="Back"
                icon="left arrow"
                labelPosition="left"
                onClick={back}
                primary
              />
            </Grid.Column>
            <Grid.Column floated="right" width={3}>
              <Button
                positive
                size="huge"
                content="Submit"
                icon="right arrow"
                labelPosition="right"
                primary
              />
            </Grid.Column>
          </Grid> */}
        </Form>
        <FooterMessage />
      </div>
    </Container>
  );
};

export default Step8;
