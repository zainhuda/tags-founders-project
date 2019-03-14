import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import { Link } from "react-router-dom";

class InactiveUser extends Component {
  render() {
    return (
      <Panel className="">
        <div className="">
          <h5> {this.props.firstName + " " + this.props.lastName} </h5>
            <h5>{this.props.title}</h5>
        </div>
      </Panel>
    );
  }
}

export default InactiveUser;
