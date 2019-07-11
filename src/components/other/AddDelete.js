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

const selectName = [
  { key: "pdf", text: "Document PDF", value: "Document PDF" },
  { key: "word", text: "Word", value: "Document Word" },
  { key: "html", text: "HTML", value: "Document HTML" }
];

export default class AddDelete extends Component {
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
                  id="selectName"
                  name="selectName"
                  control={Select}
                  options={selectName}
                  label="Select Name"
                />
                <Form.Field
                  id="typeName"
                  name="typeName"
                  control={Input}
                  label="(OR) Type Name"
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field
                  id="selectBackgroundDoc"
                  name="selectBackgroundDoc"
                  control={TextArea}
                  label="Select Background document you want to delete or update"
                />
              </Form.Group>
            </List.Item>
          ))}
        </Transition.Group>
      </Segment>
    );
  }
}
