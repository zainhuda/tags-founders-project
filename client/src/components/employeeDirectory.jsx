import React, { Component } from "react";
import {connect} from 'react-redux';
import { Col, Row } from "react-bootstrap";
import ProfileThumbnail from "./profileThumbnail/profileThumbnail";
import axios from 'axios';

class EmployeeDirectory extends Component {



	render() {
        console.log("profiles in employeedirectory", this.props.profiles);


        // data is received and we ca render it
        const profilesArray = this.props.profiles.filter(profile => {
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
                    phone={profile.teamData.phone}
                    email={profile.teamData.email}
                    url={profile.teamData.image_512}
                    skills={profile.teamData.skills}
                    interests={profile.teamData.interests} />
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

function mapStateToProps(state) {
	return {profiles: state.profiles};
}

export default connect(mapStateToProps)(EmployeeDirectory);
