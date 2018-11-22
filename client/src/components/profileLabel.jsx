import React, { Component } from "react";

class ProfileLabel extends Component {
  render() {
    return (
      <div className={"profileRow"}>
        <div className={"profileLabelTitle"}>
          {this.props.title.toUpperCase()}
        </div>
        <div className={"profileLabelValue"}> {this.props.value}</div>
      </div>
    );
  }
}

export default ProfileLabel;
