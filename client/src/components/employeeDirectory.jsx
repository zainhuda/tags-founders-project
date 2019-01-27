import React, { Component } from "react";
import {connect} from 'react-redux';
import { Col, Row } from "react-bootstrap";
import ProfileThumbnail from "./profileThumbnail";
import axios from 'axios';

class EmployeeDirectory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
	        profiles: []
        }
    }

    componentDidMount() {
        // make api request for profiles
        // we need to make the id dynamic based on what user is logged in currently
        axios.get('http://localhost:5000/api/profiles', {
            headers: {"Access-Control-Allow-Origin": "*", }
        })
            .then(res => {
                this.setState({isLoaded: true, profiles: res.data});
            })
            .catch(err => console.log(err))
    };

	render() {
        let { isLoaded, profiles } = this.state;
        if (!isLoaded) {
            // havent recieved data
            return(
                // loading icon goes here
                <div>
                    Loading...
                </div>
            )
        }
        else {
            // data is received and we ca render it
            const profilesArray = profiles.map(profile => (
                <Col lg={2} style={{ padding: "4px" }}>
                <ProfileThumbnail key={profile.id} name={profile.real_name} url={profile.profile.image_192} id={profile.id}/>
                </Col>
            ));
            return(
                <Col className="listingContent">
                    <Row>
                        {profilesArray}
                    </Row>
                </Col>
            )
        }
	}
}

const mapStateToProps = (state) => {
    return {
        profiles: state.profile.profiles
    }
};

export default connect(mapStateToProps)(EmployeeDirectory);