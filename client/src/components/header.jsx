import React, { Component } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  Glyphicon,
  Row
} from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: "" };
  }

  render() {
    return (
      <Row style={{ marginTop: "2vh", marginBottom: "2vh" }}>
        <Form inline>
          <h3
            style={{
              display: "inline",
              float: "left",
              paddingLeft: "2vw",
              margin: 0
            }}
          >
            
          </h3>
          <FormGroup controlId="formInlineName" className={"searchBar"}>
            <FormControl
              type="text"
              placeholder="Search"
              style={{ width: "500px" }}
            />
            <FormControl.Feedback>
              <Glyphicon glyph="search" />
            </FormControl.Feedback>
          </FormGroup>
        </Form>
      </Row>
    );
  }
}

export default Header;
