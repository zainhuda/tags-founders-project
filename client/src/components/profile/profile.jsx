// this is for the user to see his or her own profile
// some logic has to go in here
// accessed through the path: /profile

import React, { Component } from 'react';
import Button from "../button.jsx";
import Sidebar from "../sidebar/sidebar.jsx";
import styles from "./profile.css";

class Profile extends Component {

    render() {

    	const {values, changePage} = this.props;
    	let {firstName, lastName, image_512, title, phone, email, skills} = values;

            console.log("skills in profiel are", skills)


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
                            {skills}
                        </div>
                    </div>
                    <div>
                        <p className="info">Interests</p>
                        <div className="tags-list">
                        </div>
                    </div>
                </div>
                <input type="submit" value="settings" onClick={() => {changePage("settings")}} />

            </div>



        )
    }

}
export default Profile;
