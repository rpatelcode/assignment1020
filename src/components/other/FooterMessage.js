import React from "react";
import useForm from "react-hook-form";
import { updateYourDetails } from "../../actions/yourDetails";
import { useStateMachine } from "little-state-machine";
import { Message, Grid } from "semantic-ui-react";

function FooterMessage() {
  const { state } = useStateMachine(updateYourDetails);
  const { formState } = useForm({ mode: "onChange" });

  return (
    <>
      {/* <Grid columns={2} relaxed="very">
        <Grid.Column>
          <pre>
            <b>Global State:</b> {JSON.stringify(state, null, 2)}
          </pre>
        </Grid.Column>
        <Grid.Column>
          <pre>{JSON.stringify(formState, null, 2)}</pre>
        </Grid.Column>
      </Grid> */}

      <Message attached="bottom">
        The internal By-Laws Status registry is a system that was launched in
        2004. The system is currently being used to manage and track the status
        and historical details of by-Laws dating back to 1834. The City of
        Toronto and former municipalities that now make up the current City have
        passed more than 200,000 by-laws that are still in force today.
        Questions about this collection should be directed to: Deputy Registrar
        General, P.O. Box 468900 10899, Green River Road, Thunder Bay, ON P7X
        6H8 or at 1-8090-4691-21956 or 416-3295-83905.
      </Message>
    </>
  );
}

export default FooterMessage;
