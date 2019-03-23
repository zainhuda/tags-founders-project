import React, {Component} from 'react';
import axios from 'axios';
import styles from './userDetailsForm.css';

export class UserDetailsForm extends Component {

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

    	// get whatever data we can from slack about the user
		axios.get('/api/get_profile', {
			headers: {"Allow-Control-Allow-Origin": "*", }
		})
			.then((res) => {
				console.log("received by axios is: ", res);
				this.setState({
					// set the state to wahtever slack data we got
					firstName: res.data[0].slackData.profile.first_name,
					lastName: res.data[0].slackData.profile.last_name,
					image_512: res.data[0].slackData.profile.image_512,
					title: res.data[0].slackData.profile.title,
					phone: res.data[0].slackData.profile.phone,
					email: res.data[0].slackData.email,
					isLoaded: true
				})

			})
			.catch(err => console.log(err))
	};

	continue = (e) => {
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
		this.props.nextStep();
	};

	render() {
		let {isLoaded} = this.state;
		const {handleChange} = this.props;

		if (!isLoaded) {
			return (
				// a cool loading animation should go here
				<div>
					LOADING
				</div>
			)
		}
		else {

			let {firstName, lastName, title, phone, email } = this.state;

			return (
				<div class="main-container">
					<div class="form">
						<h1>Details</h1>
						<p>Here's what we got from Slack.</p>
						<p>First Name: </p>
						<input type="text" name="firstName" onChange={handleChange('firstName')} defaultValue={firstName}/>
						<p>Last Name: </p>
						<input type="text" name="lastName" onChange={handleChange('lastName')} defaultValue={lastName}/>
						<p>Title:</p>
						<input type="text" name="title" onChange={handleChange('title')} defaultValue={title}/>
						<p>Email: </p>
						<input type="text" name="email" onChange={handleChange('email')} defaultValue={email}/>
						<p>Phone:</p>
						<input type="text" name="phone" onChange={handleChange('phone')} defaultValue={phone}/>
						<br/>
						<input type="submit" class="submit-button" value="Next" onClick={this.continue}/>
						<p>Don't worry, you can always change these later.</p>
					</div>
				</div>
			)
		}
	}
}

export default UserDetailsForm
