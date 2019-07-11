import React, { Component } from "react";
import {
  Button,
  Form,
  Input,
  Segment,
  Select,
  TextArea,
  List,
  Transition
} from "semantic-ui-react";

const users = ["1", "2", "3", "4"];

const stp6CodeTitle = [
  { key: "ctl1", text: "Code Title A", value: "Code Title A" },
  { key: "ctl2", text: "Code Title B", value: "Code Title B" }
];

const stp6Relationship = [
  { key: "adpt", text: "Adopted", value: "Adopted" },
  { key: "nadpt", text: "Not Adopted", value: "Not Adopted" }
];
export default class Step6inSide extends Component {
  state = { items: users.slice(0, 1) };

  handleAdd = e => {
    e.preventDefault();
    this.setState(prevState => ({
      items: users.slice(0, prevState.items.length + 1)
    }));
  };

  handleRemove = e => {
    e.preventDefault();
    this.setState(prevState => ({ items: prevState.items.slice(0, -1) }));
  };

  render() {
    const { items } = this.state;

    return (
      <Segment secondary>
        <Button.Group>
          <Button
            disabled={items.length === 0}
            icon="minus"
            onClick={this.handleRemove}
          />
          <Button
            disabled={items.length === users.length}
            icon="plus"
            onClick={this.handleAdd}
          />
        </Button.Group>

        <Transition.Group
          as={List}
          duration={200}
          divided
          verticalAlign="middle"
        >
          {items.map(item => (
            <List.Item key={item}>
              <Form.Group widths="equal">
                <Form.Field
                  id="stp6CodeTitle"
                  name="stp6CodeTitle"
                  control={Select}
                  options={stp6CodeTitle}
                  defaultValue="Code Title A"
                  label="Code Title"
                  required
                />
                <Form.Field
                  id="stp6Chapter"
                  name="stp6Chapter"
                  control={Input}
                  label="Chapter"
                />
                <Form.Field
                  id="stp6Relationship"
                  name="stp6Relationship"
                  control={Select}
                  options={stp6Relationship}
                  label="Relationship"
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field
                  id="stp6SelectByLawAffected"
                  name="stp6SelectByLawAffected"
                  control={TextArea}
                  label="Select Municipal Code Chapter to update of delete"
                />
              </Form.Group>
            </List.Item>
          ))}
        </Transition.Group>
      </Segment>
    );
  }
}
