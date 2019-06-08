// this is for the user to see his or her own profile
// some logic has to go in here
// accessed through the path: /profile

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Button from "../button.jsx";
import Sidebar from "../sidebar/sidebar.jsx";
import styles from "./profile.css";
import axios from "axios";

// import constants to navigate between pages
import {PROFILE_PAGE, SETTINGS_PAGE} from '../myProfile/myProfileNavPages';

class Profile extends Component {


    handleLogout = () => {
        axios.get('/api/logout');
    }

    render() {

    	const {values, changePage} = this.props;
    	let {firstName, lastName, image_512, title, phone, email, skills, interests} = values;
        // console.log("skills in profiel are", skills)
        return (



            <div className="modal-grid">
                <div>
                    <img src={image_512} className="modal-pic"/>
                </div>
                <div>
                    <div>
                        <h1 className="modal-name">
                            {firstName + " " +lastName}
                        </h1>
                        <h4 className="modal-title">{title}</h4>
                        <p className="info">Phone: {phone}</p>
                        <p className="info">Email: {email}</p>
                    </div>
                    <div>
                        <p className="info">Skills</p>
                        <div className="tags-list">
                            {skills.join(", ")}
                        </div>
                    </div>
                    <div>
                        <p className="info">Interests</p>
                        <div className="tags-list">
                            {interests.join(",  ")}
                        </div>
                    </div>
                </div>
                <input className="submit-button" type="submit" value="Edit Profile" onClick={() => {changePage(SETTINGS_PAGE)}} />
                <div></div>
                    <Link to="/">
                        <input className="submit-button" type="submit" value="Logout" onClick={() => this.handleLogout()} />
                    </Link>

            </div>
        )
    }
}
export default Profile;
