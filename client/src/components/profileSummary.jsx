import React, {Component} from 'react';
import { Panel } from "react-bootstrap";

class ProfileSummary extends Component {
  render() {
    return (
      <Panel className="profileSummary">
        <a href={""} style={{display: "block", position: "relative"}}>
          <img src={require("./../assets/ripped_img.jpeg")} className="summaryThumbnail"/>
        </a>
        <div className={"profileSummaryDescription"}>
        <h5> {this.props.name} </h5>
        <h6> {this.props.position} </h6>
        </div>
      </Panel>
    );
  }
}

export default ProfileSummary;