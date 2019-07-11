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

const stp5Municipality = [
  { key: "pdf", text: "Toronto", value: "Toronto" },
  { key: "word", text: "Brampton", value: "Brampton" }
];

const stp5Relationship = [
  { key: "acpt", text: "Accepted", value: "Accepted" },
  { key: "nacpt", text: "Not Accepted", value: "Not Accepted" }
];
export default class Step5inSide extends Component {
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
                  id="stp5Municipality"
                  name="stp5Municipality"
                  control={Select}
                  options={stp5Municipality}
                  defaultValue="Toronto"
                  label="Municipality"
                  required
                />
                <Form.Field
                  id="stp5ByLawNumber"
                  name="stp5ByLawNumber"
                  control={Input}
                  label="By-law Number"
                />
                <Form.Field
                  id="stp5Relationship"
                  name="stp5Relationship"
                  control={Select}
                  options={stp5Relationship}
                  label="Relationship"
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field
                  id="stp5SelectByLawAffected"
                  name="stp5SelectByLawAffected"
                  control={TextArea}
                  label="Select By-law affected to update or delete"
                />
              </Form.Group>
            </List.Item>
          ))}
        </Transition.Group>
      </Segment>
    );
  }
}
