import React, { useState } from "react";
import { Button, Dimmer, Header, Icon } from "semantic-ui-react";
import useForm from "react-hook-form";
import { updateYourDetails } from "../../actions/yourDetails";
import { useStateMachine } from "little-state-machine";

const SubmitFinalBtn = props => {
  const { state } = useStateMachine(updateYourDetails);
  const { formState } = useForm({ mode: "onChange" });

  const [active, setactive] = useState(false);

  const handleOpen = () => setactive(true);
  const handleClose = () => setactive(false);

  return (
    <div>
      <Button
        floated="right"
        positive
        size="huge"
        content="Submit"
        icon="right arrow"
        labelPosition="right"
        onClick={handleOpen}
        primary
      />

      <Dimmer active={active} onClickOutside={handleClose} page>
        <Header as="h2" icon inverted>
          <Icon name="check circle outline" />
          Submitted!
          <Header.Subheader>
            Take-home assignment completed, Your data will be discarded.
            <pre>
              <b>Global State:</b> {JSON.stringify(state, null, 2)}
            </pre>
          </Header.Subheader>
        </Header>
      </Dimmer>
    </div>
  );
};

export default SubmitFinalBtn;
