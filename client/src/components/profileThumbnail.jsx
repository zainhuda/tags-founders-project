import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import { Link } from "react-router-dom";

class ProfileThumbnail extends Component {
  render() {
    return (
      <Panel className="profileSummary">
        <Link to={"/profile"} style={{ display: "block", position: "relative" }}>
          <img src={this.props.url} className="summaryThumbnail"/>
        </Link>
        <div className={"profileSummaryDescription"}>
          <h5> {this.props.firstName + " " + this.props.lastName} </h5>
            <h5>{this.props.title}</h5>
        </div>
      </Panel>
    );
  }
}

export default ProfileThumbnail;
