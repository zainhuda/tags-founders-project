import React, { Component } from "react";
import { Col, Row} from "react-bootstrap";
import ProfileSummary from "./profileSummary";
import Header from "./header";

class EmployeeDirectory extends Component {
  render() {
    const items = [...Array(100)].map((val, i) =>
      <Col lg={2} style={{ padding: "4px" }}>
        <ProfileSummary name={"John Doe"} position={"Projects"}/>
      </Col>);

    return (
      <Col lg={9}>
        <div className="listingContent">

        <Header/>
        <Row> {items} </Row>
        </div>
      </Col>
    );
  }
}

export default EmployeeDirectory;