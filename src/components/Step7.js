import React from "react"; // , { useEffect }
import {
  Form,
  Message,
  Button,
  Segment,
  Input,
  Select,
  Container
} from "semantic-ui-react";
import { updateYourDetails } from "../actions/yourDetails";
import { useStateMachine } from "little-state-machine";
import Steps from "./Steps";
import FooterMessage from "./other/FooterMessage";

const stp7PrimarySubject = [
  { key: "1", text: "Primary Subject A", value: "Primary Subject A" },
  { key: "2", text: "Primary Subject B", value: "Primary Subject B" },
  { key: "7", text: "NONE SELECTED", value: "NONE SELECTED" }
];

const stp7SecondarySubject = [
  { key: "3", text: "Secondary Subject A", value: "Secondary Subject A" },
  { key: "4", text: "Secondary Subject B", value: "Secondary Subject B" },
  { key: "8", text: "NONE SELECTED", value: "NONE SELECTED" }
];

const stp7TertiarySubject = [
  { key: "5", text: "Tertiary Subject A", value: "Tertiary Subject A" },
  { key: "6", text: "Tertiary Subject B", value: "Tertiary Subject B" },
  { key: "9", text: "NONE SELECTED", value: "NONE SELECTED" }
];

const Step7 = props => {
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
      <Steps stepNumber={7} />
      <div>
        <Message
          attached
          header="Subject Classification"
          content="Subject Classification"
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
              id="stp7PrimarySubject"
              name="stp7PrimarySubject"
              defaultValue="Primary Subject A"
              control={Select}
              options={stp7PrimarySubject}
              label="Primary Subject"
              required
            />
            <Form.Field
              id="stp7SecondarySubject"
              name="stp7SecondarySubject"
              defaultValue="NONE SELECTED"
              control={Select}
              options={stp7SecondarySubject}
              label="Secondary Subject"
            />
            <Form.Field
              id="stp7TertiarySubject"
              name="stp7TertiarySubject"
              defaultValue="NONE SELECTED"
              control={Select}
              options={stp7TertiarySubject}
              label="Tertiary Subject"
            />
          </Form.Group>
          <Segment color="yellow">
            <p>
              Primary subject is mandatory field. Please select a valid entry
              from the list of available subjects.
            </p>
            <p>
              If you want to select primary subject only, please make sure that
              secondary and tertiary subject are set to "NONE SELECTED"
            </p>
            <p>
              If you want to select primary and secondary subjects only, please
              make sure that tertiary subject is set to "NONE SELECTED"
            </p>
          </Segment>
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

export default Step7;
