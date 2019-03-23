import React, {Component} from 'react';
import axios from 'axios';
import InterestsModal from './interestsModal';
import SkillsModal from './skillsModal';

class Settings extends Component {

	// these are states of variables used only in the settings page!
	constructor(props) {
		super(props);
		this.state = {
			// user details
			firstName: '',
			lastName: '',
			image_512: '',
			title: '',
			phone: '',
			email: '',
			// tags
			skills: [],
			interests: [],
			isLoaded: false
		}
	}

	componentDidMount() {

		// get the data we have about the user
		axios.get('/api/get_profile', {
			headers: {"Allow-Control-Allow-Origin": "*", }
		})
			.then((res) => {
				console.log("received by axios is: ", res);
				this.setState({

					firstName: res.data[0].teamData.firstName,
					lastName: res.data[0].teamData.lastName,
					image_512: res.data[0].teamData.image_512,
					title: res.data[0].teamData.title,
					phone: res.data[0].teamData.phone,
					email: res.data[0].teamData.email,
					isLoaded: true
				})

			})
			.catch(err => console.log(err))
	};


	continue = (e) => {
		// this method updates the user's data
		e.preventDefault();

		let {values: {firstName, lastName, image_512, title, phone, email}} = this.props;

		// if "" then the user didnt change anything so we'll just use what we got from slack
		if (firstName === "") {
			firstName = this.state.firstName;
		}
		if (lastName === "") {
			lastName = this.state.lastName;
		}
		if (image_512 === "") {
			image_512 = this.state.image_512;
		}
		if (title === "") {
			title = this.state.title;
		}
		if (phone === "") {
			phone = this.state.phone;
		}
		if (email === "") {
			email = this.state.email;
		}

		// create the data to be sent to update user profile
		let data = {

			"firstName": firstName,
			"lastName": lastName,
			"image_512": image_512,
			"title": title,
			"phone": phone,
			"email": email
		};
		console.log("data from userDetailsForm:", data);

		// call the api to update the user pfoiel
		axios.post('api/update_profile', {
			body: JSON.stringify(data)
		})
			.then((response) => {
				console.log("response after update_profiel", response)
			});
		// move onto the next step (skills and interests)
		this.props.changePage('profile')
	};


	back = (e) => {
		e.preventDefault();
		this.props.changePage("profile");
	};

	render() {
		let {isLoaded} = this.state;
		const {handleChange} = this.props;
		const {firstName, lastName, image_512, title, phone, email, interests, skills } = this.state;

		if (!isLoaded) {
			return(
				<div>
					loading
				</div>
			)
		}
		else {
			return(
				<div>
					<h1>Settings</h1>

					<h4>First Name</h4>
					<input
						type="text"
						name="firstName"
						onChange={handleChange('firstName')}
						defaultValue={firstName}
					/>
					<h4>Last Name</h4>
					<input
						type="text"
						name="lastName"
						onChange={handleChange('lastName')}
						defaultValue={lastName}
					/>
					<h4>profiel pic</h4>
					<input
						type="text"
						name="image_512"
						onChange={handleChange('image_512')}
						defaultValue={image_512}
					/>
					<h4>title</h4>
					<input
						type="text"
						name="title"
						onChange={handleChange('title')}
						defaultValue={title}
					/>
					<h4>phone</h4>
					<input
						type="text"
						name="phone"
						onChange={handleChange('phone')}
						defaultValue={phone}
					/>
					<h4>email</h4>
					<input
						type="text"
						name="email"
						onChange={handleChange('email')}
						defaultValue={email}
					/>
					<h4>Interests</h4>
					<InterestsModal/>
					<SkillsModal/>
					<input type="submit" value="go back to profile" onClick={this.back}/>
					<input type="submit" value="save changes and update data base" onClick={this.continue}/>
				</div>
			)
		}

	};
}

export default Settings;
