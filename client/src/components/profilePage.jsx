import React, { Component } from "react";
import { Col } from "react-bootstrap";
import ProfileLabel from "./profileLabel";

class ProfilePage extends Component {
  render() {
    return (
      <Col>
        <Col lg={6}>
          <h3 style={{ marginBottom: "2vh" }}> John Doe </h3>
          <h4>
            <b> Designer </b>
          </h4>

          <hr />

          <ProfileLabel title="Department" value="Creative" />
          <ProfileLabel title="Office" value="London" />
          <ProfileLabel title="Region" value="North America" />
          <ProfileLabel title="Mobile" value="123 432 453" />
          <ProfileLabel title="email" value="email@example.com" />

          <hr />

          <ProfileLabel title="birthday" value="October 2nd" />
          <ProfileLabel title="Joining date" value="October 5th 2018" />
        </Col>

        <Col lg={6}>
          <img
            src={require("./../assets/ripped_big_img.jpeg")}
            className="summaryThumbnail"
            style={{ padding: "1em" }}
          />
        </Col>
      </Col>
    );
  }
}

export default ProfilePage;
