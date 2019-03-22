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
    }

}
export default MyProfile;
