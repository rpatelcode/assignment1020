import React from "react"; // , { useEffect }
import { Form, Message, Button, Input, Container } from "semantic-ui-react";
import { updateYourDetails } from "../actions/yourDetails";
import { useStateMachine } from "little-state-machine";
import AddDelete from "./other/AddDelete";
import Steps from "./Steps";
import FooterMessage from "./other/FooterMessage";

const Step3 = props => {
  const { state } = useStateMachine(updateYourDetails);

  // useEffect(() => {
  //   register({ name: "selectName" });
  //   register({ name: "typeName" });
  //   register({ name: "selectBackgroundDoc" });

  //   setValue("selectName", state.selectName);
  //   setValue("typeName", state.typeName);
  //   setValue("selectBackgroundDoc", state.selectBackgroundDoc);
  // }, []);

  const onSubmit = e => {
    e.preventDefault();
    // action({
    //   ..._.merge(state, data)
    // });
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
      <Steps stepNumber={3} />
      <div>
        <Message
          attached
          header="BackGround Documents"
          content="BackGround Documents"
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
          <AddDelete />

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
            // disabled={
            //   !formState.dirty || (formState.dirty && !formState.isValid)
            // }
          />
        </Form>
        <FooterMessage />
      </div>
    </Container>
  );
};

export default Step3;
