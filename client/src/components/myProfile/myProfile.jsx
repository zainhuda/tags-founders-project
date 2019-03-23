<<<<<<< HEAD
// this will contain the main logic for the user's profile page
// waht wil lbe included here? a view of their details, settings link, ability to change skills and interests

import React, {Component} from 'react';
import axios from 'axios';

// import different profile pages
import Settings from './settings/settings';
import Profile from '../profile/profile';

export class MyProfile extends Component {

	state = {
		firstName: '',
		lastName: '',
		image_512: '',
	    title: '',
		phone: '',
	    email: '',
	    interests: '',
		skills: '',
	    isLoaded: false,
		page: "profile"
    };


    componentDidMount() {
        axios.get('/api/get_profile', {
            headers: {"Allow-Control-Allow-Origin": "*"}
        })
            .then((res) => {
            	console.log("the res in profilePage is:", res);
                this.setState({
					firstName: res.data[0].teamData.firstName,
					lastName: res.data[0].teamData.lastName,
					image_512: res.data[0].teamData.image_512,
	                title: res.data[0].teamData.title,
					phone: res.data[0].teamData.phone,
	                email: res.data[0].teamData.email,
	                interests: res.data[0].teamData.interests,
					skills: res.data[0].teamData.skills,
	                isLoaded: true
                })
            })
=======
// this is for the user to see his or her own profile
// some logic has to go in here
// accessed through the path: /profile

import React, { Component } from 'react';
import Button from "../button.jsx";
import Sidebar from "../sidebar.jsx";
import styles from "./myProfile.css";


class MyProfile extends Component {

    render() {

    	const {values, changePage} = this.props;
    	let {firstName, lastName, image_512, title, phone, email, interests, skills} = values;

        return (
	        <div>
		        <h2>MY PROFILE</h2>

		        <h4>first name:{firstName} last name: {lastName} image: {image_512} title: {title} phone: {phone} email: {email} skills: {skills}
		        interests: {interests}</h4>
		        <input type="submit" value="settings" onClick={() => {changePage("settings")}} />

		     	<div className={"ui horizontal segments"}>
		        	<div className={"seg"}> </div>
		        	<Sidebar>
		        	</Sidebar>
		        	
		       		 <div className={"bottom"}> <i className={"user circle icon blue huge"}></i> View my profile</div>


		        	<div className={"segment"}>



		        		<div className={"column"}>

		        			<div className={"ui segment"}>

		        				<div className={"ui huge search"}>

		        					<div className={"ui icon input"}>


		        						<input className={"prompt"} type={"`text"} placeholder={"Search for tags, interests and people"}/>
    									<i className={"search icon"}></i>

		        					</div>

		        					<div className={"results"}></div>

		        				</div>
		        				<div className={"FirstName"}> John Doe </div>
		        				<img src={require("./person.png")}/>
		        				<h4> Financial Consultant</h4>
		        				<h6> Matching Skills and intrests</h6>

		        		   </div>

		        			<div className={"ui segment"}></div>



		        		</div>

		        	</div>

		        </div>





	        </div>



        )
>>>>>>> 4cae612b56b568f3ac9ec4f611b72d4d20756d2e
    }

	// change page method
	changePage = (goPage) => {
		this.setState({
			page: goPage
		});
	};

	// handle the field change
	handleChange = (input) => (e) => {
		this.setState({
			[input]: e.target.value
		})
	};

	render() {
		const {firstName, lastName, image_512, title, phone, email, interests, skills } = this.state;
		const values = {firstName, lastName, image_512, title, phone, email, interests, skills};


		const {page} = this.state;
		switch (page) {
			// load which ever settings page
			case "profile":
				return(
					<div>
						<Profile
							changePage={this.changePage}
							values={values}
						/>
					</div>
				);
			case "settings":
				return(
					<div>
						<Settings
							changePage={this.changePage}
							handleChange={this.handleChange}
							values={values}
						/>
					</div>
				);
		}
	}
}

export default MyProfile;
