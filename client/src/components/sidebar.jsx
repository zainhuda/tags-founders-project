import React, { Component } from "react";
import {Col, Panel, PanelGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Sidebar extends Component {

  render() {
    function handleClick() {
   alert('You can now view all people');
    }

    return (
      <Col lg={3} className="sidebar">
        <Link to={"/"} style={{color: "black", textDecoration: "none"}}> <h1 style={{textAlign: "center"}}> Project <b> X </b> </h1> </Link>
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
                <Panel eventkey={"2"}>
                <Panel.Heading>
                    <Panel.Title toggle>By Office</Panel.Title>
                    </Panel.Heading>
                <Panel.Body collapsible>
                        <Row> <a href={""}> London </a> </Row>
                        <Row> <a href={""}> Calgary </a> </Row>
                        <Row> <a href={""}> Toronto </a> </Row>
                        <Row> <a href={""}> Vancouver </a> </Row>
                        <Row> <a href={""}> Waterloo </a> </Row>
                        <Row> <a href={""}> Ottawa </a> </Row>
                        <Row> <a href={""}> Edmonton </a> </Row>
                </Panel.Body>
                </Panel>
             <Panel eventkey={"3"}>
                <Panel.Heading>
                    <Panel.Title toggle>By Region</Panel.Title>
                    </Panel.Heading>
                <Panel.Body collapsible>
                        <Row> <a href={""}> Alberta </a> </Row>
                        <Row> <a href={""}> Ontario </a> </Row>
                        <Row> <a href={""}> British Columbia </a> </Row>
                        <Row> <a href={""}> Quebec </a> </Row>
                        <Row> <a href={""}> Nova Scotia </a> </Row>
                        <Row> <a href={""}> Manitoba </a> </Row>
                        <Row> <a href={""}> Saskatchewan </a> </Row>
                </Panel.Body>
                </Panel>
        </PanelGroup>
      </Col>
    );
  }
}

export default Sidebar;
