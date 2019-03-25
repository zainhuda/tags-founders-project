import React, { Component } from "react";
import {connect} from 'react-redux';
import {fetchProfiles} from '../../actions';
import {Col, Panel, PanelGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

import './sidebar.css';
import sidebarLabels from './sidebarLabels';

// use below for text instead of image
//<Link to={"/"} style={{color: "black", textDecoration: "none"}}> <h1 style={{textAlign: "center"}}> Tags </h1> </Link>

class Sidebar extends Component {

    handleSort = (sortElement) => {
        console.log("elem is", sortElement);
        this.props.fetchProfiles(sortElement);
    }

  render() {
    // make the porfolios list
    const portfolios = sidebarLabels.portfolios.map(label => {
        return(
            <Row>
                <p onClick={() => this.handleSort(label.sort)} className="collapseLinks"> {label.label} </p>
            </Row>
        )
    });

    // make the majors list
    const majors = sidebarLabels.majors.map(label => {
        return(
            <Row>
                <p onClick={() => this.handleSort(label.sort)} className="collapseLinks"> {label.label} </p>
            </Row>
        )
    })

    return (
      <Col className="sidebar">
        <Link to={"/explore"}>
            <img className="image-logo" src={require('../../assets/FN.png')}/>
        </Link>


        <PanelGroup accordian id={"Panels"}>
        <Panel eventkey="1" className="sidebarCollapse" onClick={() => this.handleSort("")}>
          <Panel.Heading>
            <Panel.Title  className="panelTitle"><p>All People</p></Panel.Title>
          </Panel.Heading>
        </Panel>
            <Panel eventkey="2" className="sidebarCollapse">
                <Panel.Heading>
                    <Panel.Title toggle className="panelTitle">By Portfolio</Panel.Title>
                  </Panel.Heading>
              <Panel.Body collapsible>
                <Col>
                    {portfolios}
                </Col>
              </Panel.Body>
            </Panel>
                <Panel eventkey={"3"} className="sidebarCollapse">
                <Panel.Heading>
                    <Panel.Title toggle className="panelTitle">By Major</Panel.Title>
                    </Panel.Heading>
                <Panel.Body collapsible>
                    <Col>
                        {majors}
                    </Col>
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

function mapStateToProps(state) {
    return {profiles: state.profiles}
}
export default connect(mapStateToProps, {fetchProfiles})(Sidebar);
