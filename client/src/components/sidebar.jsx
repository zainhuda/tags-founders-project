import React, { Component } from "react";
import {Col, Panel, PanelGroup, Row} from "react-bootstrap";

class Sidebar extends Component {

  render() {
    function handleClick() {
   alert('You can now view all people');
    }

    return (
      <Col lg={3} className="sidebar">
        <h1> Project <b> X </b> </h1>
        <Panel onClick={handleClick}>
          <Panel.Title>All People</Panel.Title>
        </Panel>

        <PanelGroup accordian id={"Collapse Links"}>
            <Panel eventkey="1">
                <Panel.Heading>
                    <Panel.Title toggle>By Department</Panel.Title>
                  </Panel.Heading>
              <Panel.Body collapsible>
                <Col>
                  <Row> <a href={""}> Account Management </a>  </Row>
                  <Row> <a href={""}> Administration </a> </Row>
                  <Row> <a href={""}> Creative </a> </Row>
                  <Row> <a href={""}> Digital & Social </a> </Row>
                  <Row> <a href={""}> DTP </a> </Row>
                  <Row> <a href={""}> Finance </a> </Row>
                  <Row> <a href={""}> HR </a> </Row>
                  <Row> <a href={""}> IT </a> </Row>
                  <Row> <a href={""}> Management </a> </Row>
                  <Row> <a href={""}> Media </a> </Row>
                  <Row> <a href={""}> Prodcution </a> </Row>
                  <Row> <a href={""}> Strategy </a> </Row>
                </Col>
              </Panel.Body>
            </Panel>
        </PanelGroup>
      </Col>
    );
  }
}

export default Sidebar;
