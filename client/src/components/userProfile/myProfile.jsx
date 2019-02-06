// this is for the user to see his or her own profile
// some logic has to go in here
// accessed through the path: /profile

import React, { Component } from 'react';
import axios from 'axios';

class MyProfile extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            title: '',
            email: '',
            skills: [],
            interests: [],
            age: '',
            birthday: '',
            isLoaded: false
        }
    }

    componentDidMount() {
        axios.get('/api/get_profile', {
            headers: {"Allow-Control-Allow-Origin": "*"}
        })
            .then((res) => {
                this.setState({
					firstName: res.data[0].profile.first_name,
					lastName: res.data[0].profile.last_name,
					title: res.data[0].profile.title,
					email: res.data[0].email,
	                skills: [],
	                interest: [],
	                age: '',
	                birthday: '',
					isLoaded: true
                })

            })
    }



    render() {

    	let {isLoaded} = this.state;
    	let {firstName, lastName, title, email, skills, interests, age, birthday} = this.state;

        if (!isLoaded) {
            return(
                <div>
                    loading boi
                </div>
            )
        }
        else {
	        return (
		        <div>
			        <h2>MY PROFILE</h2>
			        <h4>first name: {firstName} last name: {lastName} title: {title} email: {email} skills: {skills}
			        interests: {interests} age: {age} bday: {birthday}</h4>
			        <input type="submit" value="settings" onClick={() => {this.props.changePage("settings")}} />
			        <input type="submit" value="tags" onClick={() => {this.props.changePage("changeTags")}}/>
		        </div>
	        )
        }
    }
}
export default MyProfile;