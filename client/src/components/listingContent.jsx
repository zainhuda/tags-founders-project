import React, {Component} from 'react';
import {Col, Button} from "react-bootstrap";
import ProfileSummary from "./profileSummary";

class ListingContent extends Component {
  render() {
    const items = [...Array(100)].map((val, i) => <ProfileSummary number={i} test={"Hello!"}/>);

    return (
      <Col lg={9} className="listingContent">
        <b> Listing Content </b>
        {items}


      </Col>
    );
  }
}

export default ListingContent;