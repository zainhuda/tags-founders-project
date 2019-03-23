// this is for the user to see his or her own profile
// some logic has to go in here
// accessed through the path: /profile

import React, { Component } from 'react';
import Button from "../button.jsx";
import Sidebar from "../sidebar.jsx";
import styles from "./profile.css";

class Profile extends Component {

    render() {

    	const {values, changePage} = this.props;
    	let {firstName, lastName, image_512, title, phone, email, interests, skills} = values;

        return (


				<div className="profile-main-container">
					<div className="grid1">
						<div className="image-container">
							<img className="profile-image" src={image_512}/>
						</div>
						<div>

						<div className="name">
							{firstName} {lastName}
						</div>
						<div className="title">
							{title}
						</div>
						<div className="grid2">
							<div className="phone">
								{phone}
							</div>
							<div className="email">
								{email}
							</div>

							<div className="skills">
								Skills
								<div className="tags-list">
									{skills}
								</div>
							</div>
							<div className="interests">
								Interests
								<div className="tags-list">
									{interests}
								</div>
							</div>

						</div>
					</div>
					</div>
					<input type="submit" value="settings" onClick={() => {changePage("settings")}} />

				</div>


        )
    }

}
export default Profile;
