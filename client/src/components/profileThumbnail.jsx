import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import { Link } from "react-router-dom";

class ProfileThumbnail extends Component {
  render() {
    return (
      <Panel className="profileSummary">
        <Link
          to={"/profile"}
          style={{ display: "block", position: "relative" }}
        >
          <img
            src={require("./../assets/ripped_img.jpeg")}
            className="summaryThumbnail"
          />
        </Link>
        <div className={"profileSummaryDescription"}>
          <h5> {this.props.name} </h5>
          <h6> {this.props.position} </h6>
        </div>
      </Panel>
    );
  }
}

export default ProfileThumbnail;
