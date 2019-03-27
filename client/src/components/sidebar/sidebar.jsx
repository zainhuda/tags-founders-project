import React, { Component } from "react";
import {connect} from 'react-redux';
import {fetchProfiles} from '../../actions';
import {fetchLabels} from '../../actions';


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

    componentDidMount() {
        this.props.fetchLabels();
    }

    renderSecondaryLabels(key) {
        const secondaryLabels = this.props.labels[key];
        secondaryLabels.map(label => {
            //  console.log("seconday label is:", label, key);
            return(
                <Row>
                    <p onClick={() => this.handleSort(label.sort)} className="collapseLinks"> {label.label} </p>
                </Row>
            )
        })
    }


    renderPrimaryLabels() {
        const labelsObject = this.props.labels;
        Object.keys(labelsObject).map((key, index) => {
            labelsObject[key].map(primaryLabel => {
                //console.log("primary label is", primaryLabel.label);
                //console.log("key is:", key);
                //console.log("index is:", index);
                return(
                        <Panel eventkey="2" className="sidebarCollapse">
                            <Panel.Heading>
                                <Panel.Title toggle className="panelTitle">By {key}</Panel.Title>
                              </Panel.Heading>
                          <Panel.Body collapsible>
                            <Col>
                                {this.renderSecondaryLabels(key)}
                            </Col>
                          </Panel.Body>
                        </Panel>

                )
            })
        })
    }

  render() {

      const labelsObject = this.props.labels;

      const labels = Object.keys(labelsObject).map((key, index) => {
          // lets get the secondary labels in a list
          const secondaryLabels = labelsObject[key].map((secondaryLabel) => {
              return(
                  <Row>
                      <p onClick={() => this.handleSort(secondaryLabel.sort)} className="collapseLinks"> {secondaryLabel.label} </p>
                  </Row>
              )
          })


          // now lets put those secondary labels under one primary label
          return(
              <Panel eventkey="2" className="sidebarCollapse">
                  <Panel.Heading>
                      <Panel.Title toggle className="panelTitle">By {key}</Panel.Title>
                    </Panel.Heading>
                <Panel.Body collapsible>
                  <Col>
                      {secondaryLabels}
                  </Col>
                </Panel.Body>
              </Panel>
          )
      })



    return (
      <Col className="sidebar">
        <Link to={"/explore"}>
            <img className="image-logo" src={require('../../assets/FN.png')}/>
        </Link>


        <PanelGroup accordian id={"Panels"}>
            {labels}
        </PanelGroup>
      </Col>
    );
  }
}

function mapStateToProps(state) {
    return {
        profiles: state.profiles,
        labels: state.labels
    }
}
export default connect(mapStateToProps, {fetchProfiles, fetchLabels})(Sidebar);
