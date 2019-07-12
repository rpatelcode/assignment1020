import React from "react";
import { Header, Container, Image, Step } from "semantic-ui-react";
import logo from "../images/logo_city.gif";

const Steps = props => {
  const StepChoose = () => {
    switch (props.stepNumber) {
      case 1:
        return (
          <Step.Group fluid>
            <Step active title="Step 1" />
            <Step disabled title="Step 2" />
            <Step disabled title="Step 3" />
            <Step disabled title="Step 4" />
            <Step disabled title="Step 5" />
            <Step disabled title="Step 6" />
            <Step disabled title="Step 7" />
            <Step disabled title="Step 8" />

            {/* <Step active title="Step 1" />
            <Step disabled title="Step 2" />
            <Step disabled title="Step 3" />
            <Step disabled title="Step 4" />
            <Step disabled title="Step 5" />
            <Step disabled title="Step 6" />
            <Step disabled title="Step 7" />
            <Step disabled title="Step 8" /> */}
          </Step.Group>
        );
      case 2:
        return (
          <Step.Group fluid>
            <Step title="Step 1" />
            <Step active title="Step 2" />
            <Step disabled title="Step 3" />
            <Step disabled title="Step 4" />
            <Step disabled title="Step 5" />
            <Step disabled title="Step 6" />
            <Step disabled title="Step 7" />
            <Step disabled title="Step 8" />
          </Step.Group>
        );
      case 3:
        return (
          <Step.Group fluid>
            <Step title="Step 1" />
            <Step title="Step 2" />
            <Step active title="Step 3" />
            <Step disabled title="Step 4" />
            <Step disabled title="Step 5" />
            <Step disabled title="Step 6" />
            <Step disabled title="Step 7" />
            <Step disabled title="Step 8" />
          </Step.Group>
        );
      case 4:
        return (
          <Step.Group fluid>
            <Step title="Step 1" />
            <Step title="Step 2" />
            <Step title="Step 3" />
            <Step active title="Step 4" />
            <Step disabled title="Step 5" />
            <Step disabled title="Step 6" />
            <Step disabled title="Step 7" />
            <Step disabled title="Step 8" />
          </Step.Group>
        );
      case 5:
        return (
          <Step.Group fluid>
            <Step title="Step 1" />
            <Step title="Step 2" />
            <Step title="Step 3" />
            <Step title="Step 4" />
            <Step active title="Step 5" />
            <Step disabled title="Step 6" />
            <Step disabled title="Step 7" />
            <Step disabled title="Step 8" />
          </Step.Group>
        );
      case 6:
        return (
          <Step.Group fluid>
            <Step title="Step 1" />
            <Step title="Step 2" />
            <Step title="Step 3" />
            <Step title="Step 4" />
            <Step title="Step 5" />
            <Step active title="Step 6" />
            <Step disabled title="Step 7" />
            <Step disabled title="Step 8" />
          </Step.Group>
        );
      case 7:
        return (
          <Step.Group fluid>
            <Step title="Step 1" />
            <Step title="Step 2" />
            <Step title="Step 3" />
            <Step title="Step 4" />
            <Step title="Step 5" />
            <Step title="Step 6" />
            <Step active title="Step 7" />
            <Step disabled title="Step 8" />
          </Step.Group>
        );
      case 8:
        return (
          <Step.Group fluid>
            <Step title="Step 1" />
            <Step title="Step 2" />
            <Step title="Step 3" />
            <Step title="Step 4" />
            <Step title="Step 5" />
            <Step title="Step 6" />
            <Step title="Step 7" />
            <Step active title="Step 8" />
          </Step.Group>
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      <Image src={logo} size="small" centered />
      <Header as="h2" textAlign="center" icon>
        Case Study Application
        <Header.Subheader>Take-home assignment</Header.Subheader>
      </Header>
      <Container style={{ marginBottom: "2em" }}>
        <StepChoose />
      </Container>

      {/* <Image src="./images/logo_city.gif" size="small" textAlign="center" />
      <Header as="h2" textAlign="center" icon>
        Case Study Application
        <Header.Subheader>Take-home assignment</Header.Subheader>
      </Header> 
      <Container style={{ marginBottom: "2em" }}>
        <StepChoose />
      </Container> */}
    </>
  );
};

export default Steps;
