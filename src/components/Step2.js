import React, { useEffect } from "react";
import {
  Form,
  TextArea,
  Message,
  Button,
  Input,
  Container
} from "semantic-ui-react";
import { updateYourDetails } from "../actions/yourDetails";
import useForm from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import _ from "lodash";
import Steps from "./Steps";
import FooterMessage from "./other/FooterMessage";

const Step2 = props => {
  useEffect(() => {
    register({ name: "byLawTextArea" }, { required: true });
    setValue("byLawTextArea", state.byLawTextArea);
  }, []);

  const {
    register,
    errors,
    handleSubmit,
    setValue,
    triggerValidation,
    formState
  } = useForm({ mode: "onChange" });
  const { state, action } = useStateMachine(updateYourDetails);

  const onSubmit = (data, e) => {
    e.preventDefault();
    action({
      ..._.merge(state, data)
    });
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
      <Steps stepNumber={2} />
      <div>
        <Message
          attached
          header="Description of the By-law"
          content="Required information"
        />
        <Form
          className="attached fluid segment"
          onSubmit={handleSubmit(onSubmit)}
          success
        >
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
              id="byLawTextArea"
              name="byLawTextArea"
              control={TextArea}
              label="Please enter the short description of the By-law"
              defaultValue={state.byLawTextArea}
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
              required
              error={errors.byLawTextArea ? true : false}
            />
          </Form.Group>

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
            disabled={
              !formState.dirty || (formState.dirty && !formState.isValid)
            }
          />
        </Form>
        <FooterMessage />
      </div>
    </Container>
  );
};

export default Step2;
