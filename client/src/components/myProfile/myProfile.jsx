// this will contain the main logic for the user's profile page

import React, {Component} from 'react';
import axios from 'axios';

// import different profile pages
import Settings from './settings/settings';
import Profile from '../profile/profile';

class MyProfile extends Component {

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
		console.log("mounted")
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

		console.log("skills in myprofiel are:", skills)
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
