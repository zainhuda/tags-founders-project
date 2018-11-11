import React, {Component} from 'react';
import {Col} from "react-bootstrap";
import Listing from "./listing";

class ListingContent extends Component {
  render() {
    const items = [...Array(100)].map((val, i) => <Listing number={i}/>);

    return (
      <Col lg={9} className="listingContent">
        <b> Listing Content </b>
        {items}
      </Col>
    );
  }
}

export default ListingContent;