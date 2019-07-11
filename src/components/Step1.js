import React, { useEffect } from "react";
import {
  Form,
  Select,
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
const municipality = [
  { key: "to", text: "Toronto", value: "toronto" },
  { key: "aj", text: "Ajax", value: "ajax" }
];
const originOfByLaw = [
  { key: "co", text: "Council", value: "council" },
  { key: "fed", text: "Fedral", value: "fedral" }
];
const consolidation = [
  { key: "nc", text: "Not Consolidated", value: "noConsolidated" },
  { key: "co", text: "Consolidated", value: "consolidated" }
];

const Step1 = props => {
  useEffect(() => {
    register({ name: "processingByLaw" }, { required: true });
    register({ name: "municipality" }, { required: true });
    register({ name: "byLawNumber" }, { required: true });
    register({ name: "dateOfPassign" }, { required: true });
    register({ name: "printedPgs" }, { required: true });
    register({ name: "originOfByLaw" }, { required: true });
    register({ name: "consolidation" }, { required: true });
    register({ name: "commmonName" }, { required: true });
    register({ name: "linkToTextOfByLaw" }, { required: true });

    setValue("processingByLaw", state.processingByLaw);
    setValue("municipality", state.municipality);
    setValue("byLawNumber", state.byLawNumber);
    setValue("dateOfPassign", state.dateOfPassign);
    setValue("printedPgs", state.printedPgs);
    setValue("originOfByLaw", state.originOfByLaw);
    setValue("consolidation", state.consolidation);
    setValue("commmonName", state.commmonName);
    setValue("linkToTextOfByLaw", state.linkToTextOfByLaw);

    // triggerValidation({ name: "processingByLaw" });
    // triggerValidation({ name: "municipality" });
    // triggerValidation({ name: "byLawNumber" });
    // triggerValidation({ name: "dateOfPassign" });
    // triggerValidation({ name: "printedPgs" });
    // triggerValidation({ name: "originOfByLaw" });
    // triggerValidation({ name: "consolidation" });
    // triggerValidation({ name: "commmonName" });
    // triggerValidation({ name: "linkToTextOfByLaw" });
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

  return (
    <Container>
      <Steps stepNumber={1} />
      <div>
        <Message
          attached
          header="General By-Law Details"
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
              placeholder="Processing By-law"
              defaultValue={state.processingByLaw}
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
              required
              error={errors.processingByLaw ? true : false}
            />
            <Form.Field
              id="municipality"
              name="municipality"
              control={Select}
              label="Municipality"
              options={municipality}
              defaultValue={state.municipality}
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
              required
              error={errors.municipality ? true : false}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              id="byLawNumber"
              name="byLawNumber"
              control={Input}
              label="By-law Number"
              placeholder="By-law Number"
              defaultValue={state.byLawNumber}
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
              required
              error={errors.byLawNumber ? true : false}
            />

            <Form.Field
              id="dateOfPassign"
              name="dateOfPassign"
              control={Input}
              label="Date of Passing"
              placeholder="DD/MM/YYYY"
              defaultValue={state.dateOfPassign}
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
              required
              error={errors.dateOfPassign ? true : false}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              id="printedPgs"
              name="printedPgs"
              control={Input}
              label="Printed Pgs"
              placeholder="Printed Pgs"
              defaultValue={state.printedPgs}
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
              required
              error={errors.printedPgs ? true : false}
            />

            <Form.Field
              id="originOfByLaw"
              name="originOfByLaw"
              control={Select}
              label="Origin of By-law"
              options={originOfByLaw}
              defaultValue={state.originOfByLaw}
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
              required
              error={errors.originOfByLaw ? true : false}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              id="consolidation"
              name="consolidation"
              control={Select}
              label="Consolidation"
              options={consolidation}
              defaultValue={state.consolidation}
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
              required
              error={errors.consolidation ? true : false}
            />

            <Form.Field
              id="commmonName"
              name="commmonName"
              control={Input}
              label="Commmon Name"
              placeholder="Commmon Name"
              defaultValue={state.commmonName}
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
              required
              error={errors.commmonName ? true : false}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              id="linkToTextOfByLaw"
              name="linkToTextOfByLaw"
              control={Input}
              label="link to Text of By-law"
              placeholder="link to Text of By-law"
              defaultValue={state.linkToTextOfByLaw}
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
              required
              error={errors.linkToTextOfByLaw ? true : false}
            />
          </Form.Group>

          <Button content="Cancel" onClick={cancel} secondary />
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

export default Step1;
