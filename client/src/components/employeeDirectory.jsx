import React, {Component} from 'react';
import {Col, Button, Row} from "react-bootstrap";
import ProfileSummary from "./profileSummary";

class EmployeeDirectory extends Component {
  render() {
    const items = [...Array(100)].map((val, i) =>
      <Col lg={2} style={{padding: "4px"}}>
        <ProfileSummary name={"John Doe"} position={"Projects"}/>
      </Col>);

    return (
      <Col lg={9} className="listingContent">
        <Row> {items} </Row>
      </Col>
    );
  }
}

export default EmployeeDirectory;