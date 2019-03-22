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
        axios.get('/api/profiles', {
            headers: {"Access-Control-Allow-Origin": "*", }
        })
            .then(res => {
                console.log(res.data);
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
            const profilesArray = profiles.filter(profile => {
                return !profile.isInactive
            }).map(profile => {

                // use a default profile picture if there is no url on the profile... probably should host this ourselves
                if (!profile.teamData.image_512) {
                    profile.teamData.image_512 = "https://t3.ftcdn.net/jpg/00/64/67/52/240_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg";
                }

                return (
                <Col sm={2} style={{ padding: "3px" }}>
                    <ProfileThumbnail
                        key={profile._id}
                        firstName={profile.teamData.firstName}
                        lastName={profile.teamData.lastName}
                        title={profile.teamData.title}
                        url={profile.teamData.image_512} />
                </Col>
            )
            });
            return(
                <div>
                    <Col className="listingContent" lg="auto" >
                        <Row>
                            {profilesArray}
                        </Row>
                    </Col>
                </div>
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
