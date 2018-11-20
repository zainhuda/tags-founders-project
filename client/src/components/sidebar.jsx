import React, { Component } from "react";
import { Col } from "react-bootstrap";

class Sidebar extends Component {
  render() {
    return (
      <Col lg={3} className="sidebar">
        <h1> Project <b> X </b> </h1>
      </Col>
    );
  }
}

export default Sidebar;
