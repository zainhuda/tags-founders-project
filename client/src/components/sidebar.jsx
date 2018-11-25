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

        <PanelGroup accordian id={"Panels"}>
        <Panel eventkey="1" className="sidebarCollapse" onClick={handleClick}>
          <Panel.Heading>
            <Panel.Title className="panelTitle">All people</Panel.Title>
          </Panel.Heading>
        </Panel>
            <Panel eventkey="2" className="sidebarCollapse">
                <Panel.Heading>
                    <Panel.Title toggle className="panelTitle">By Department</Panel.Title>
                  </Panel.Heading>
              <Panel.Body collapsible>
                <Col>
                  <Row> <a href={""} className="collapseLinks"> Account Management </a>  </Row>
                  <Row> <a href={""} className="collapseLinks"> Administration </a> </Row>
                  <Row> <a href={""} className="collapseLinks"> Creative </a> </Row>
                  <Row> <a href={""} className="collapseLinks"> Digital & Social </a> </Row>
                  <Row> <a href={""} className="collapseLinks"> DTP </a> </Row>
                  <Row> <a href={""} className="collapseLinks"> Finance </a> </Row>
                  <Row> <a href={""} className="collapseLinks"> HR </a> </Row>
                  <Row> <a href={""} className="collapseLinks"> IT </a> </Row>
                  <Row> <a href={""} className="collapseLinks"> Management </a> </Row>
                  <Row> <a href={""} className="collapseLinks"> Media </a> </Row>
                  <Row> <a href={""} className="collapseLinks"> Prodcution </a> </Row>
                  <Row> <a href={""} className="collapseLinks"> Strategy </a> </Row>
                </Col>
              </Panel.Body>
            </Panel>
                <Panel eventkey={"3"} className="sidebarCollapse">
                <Panel.Heading>
                    <Panel.Title toggle className="panelTitle">By Office</Panel.Title>
                    </Panel.Heading>
                <Panel.Body collapsible>
                        <Row> <a href={""} className="collapseLinks"> London </a> </Row>
                        <Row> <a href={""} className="collapseLinks"> Calgary </a> </Row>
                        <Row> <a href={""} className="collapseLinks"> Toronto </a> </Row>
                        <Row> <a href={""} className="collapseLinks"> Vancouver </a> </Row>
                        <Row> <a href={""} className="collapseLinks"> Waterloo </a> </Row>
                        <Row> <a href={""} className="collapseLinks"> Ottawa </a> </Row>
                        <Row> <a href={""} className="collapseLinks"> Edmonton </a> </Row>
                </Panel.Body>
                </Panel>
             <Panel eventkey={"4"} className="sidebarCollapse">
                <Panel.Heading>
                    <Panel.Title toggle className="panelTitle">By Region</Panel.Title>
                    </Panel.Heading>
                <Panel.Body collapsible>
                        <Row> <a href={""} className="collapseLinks"> Alberta </a> </Row>
                        <Row> <a href={""} className="collapseLinks"> Ontario </a> </Row>
                        <Row> <a href={""} className="collapseLinks"> British Columbia </a> </Row>
                        <Row> <a href={""} className="collapseLinks"> Quebec </a> </Row>
                        <Row> <a href={""} className="collapseLinks"> Nova Scotia </a> </Row>
                        <Row> <a href={""} className="collapseLinks"> Manitoba </a> </Row>
                        <Row> <a href={""} className="collapseLinks"> Saskatchewan </a> </Row>
                </Panel.Body>
                </Panel>
        </PanelGroup>
      </Col>
    );
  }
}

export default Sidebar;
