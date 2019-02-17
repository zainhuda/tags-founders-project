// this is for the user to see his or her own profile
// some logic has to go in here
// accessed through the path: /profile

import React, { Component } from 'react';

class MyProfile extends Component {

    render() {

    	const {values, changePage} = this.props;
    	let {firstName, lastName, image_512, title, phone, email, interests, skills} = values;


        return (
	        <div>
		        <h2>MY PROFILE</h2>
		        <h4>first name: {firstName} last name: {lastName} imaeg: {image_512} title: {title} phone: {phone} email: {email} skills: {skills}
		        interests: {interests}</h4>
		        <input type="submit" value="settings" onClick={() => {changePage("settings")}} />
		        <input type="submit" value="tags" onClick={() => {changePage("changeTags")}}/>
	        </div>
        )
    }

}
export default MyProfile;