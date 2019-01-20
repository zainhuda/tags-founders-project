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
        axios.get('http://localhost:5000/api/profiles/t25mt190a', {
            headers: {"Access-Control-Allow-Origin": "*", }
        })
            .then(res => {
                console.log("res is: ");
                console.log(res);
                this.setState({isLoaded: true, profiles: res.data});
                console.log(res.data);
            })

            .catch(err => console.log(err))
    };

	render() {


        let { isLoaded, profiles } = this.state;

        if (!isLoaded) {

            return(
                <div>
                    Loading...
                </div>
            )
        }
        else {

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