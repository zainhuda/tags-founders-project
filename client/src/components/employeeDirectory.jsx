import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import ProfileThumbnail from "./profileThumbnail";

class EmployeeDirectory extends Component {
  render() {
    const items = [...Array(100)].map((val, i) => (
      <Col lg={2} style={{ padding: "4px" }}>
        <ProfileThumbnail name={"John Doe"} position={"Projects"} />
      </Col>
    ));

    return (
      <Col className="listingContent">
        <Row> {items} </Row>
      </Col>
    );
  }
}

export default EmployeeDirectory;
