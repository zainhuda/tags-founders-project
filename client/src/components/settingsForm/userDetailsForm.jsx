import React, {Component} from 'react';
import axios from "axios";

class UserDetailsForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			image_512: '',
			title: '',
			phone: '',
			email: '',
			isLoaded: false
		}
	}

	componentDidMount() {

    	// get whatever data we can from slack about the user
		axios.get('/api/get_profile', {
			headers: {"Allow-Control-Allow-Origin": "*", }
		})
			.then((res) => {
				console.log("received by axios is: ", res.data);
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
		e.preventDefault();

		let {values: {firstName, lastName, title, email, phone, image_512}} = this.props;
		console.log("title is:", title);
		// if "" then the user didnt change anything so we'll just use what we got from slack
		if (firstName === "") {
			firstName = this.state.firstName;
		}
		if (lastName ==="") {
			lastName = this.state.lastName;
		}
		if (title === "") {
			title = this.state.title;
		}
		if (phone ===undefined) {
			phone = this.state.phone;
		}
		if (email === undefined) {
			email = this.state.email;
		}
		if (image_512 === undefined) {
			image_512 = this.state.image_512;
		}

	console.log("this.state.title is:", this.state.title);
		// create the data to be sent to update the user profile
		let data = {
			"firstName": firstName,
			"lastName": lastName,
			"title": title,
			"phone": phone,
			"email": email,
			"image_512": image_512
		};
		console.log("the changes were:", data);

		// call the api to update the user pfoiel
		axios.post('api/update_profile', {
			body: JSON.stringify(data)
		})
			.then((response) => {
				console.log(response)
			})
			.then((data) => {
				console.log(data);
			});



		this.props.nextStep();
	};

	render() {
		let {isLoaded} = this.state;
		const { handleChange } = this.props;
		if (!isLoaded) {
			return(
				// loading animation goes here
				<div>
					loading
				</div>
			)
		}

		else {

			let {firstName, lastName, title, phone, email, image_512 } = this.state;

			return (
				<div>
					<h1>chagne ur settings here</h1>
					<h4>First Name</h4>
					<input type="text" name="firstName" onChange={handleChange('firstName')} defaultValue={firstName}/>
					<h4>Last Name</h4>
					<input type="text" name="lastName" onChange={handleChange('lastName')} defaultValue={lastName}/>
					<h4>Email</h4>
					<input type="text" name="email" onChange={handleChange('email')} defaultValue={email}/>
					<h4>Phone</h4>
					<input type="text" name="phone" onChange={handleChange('phone')} defaultValue={phone}/>
					<h4>Position</h4>
					<input type="text" name="position" onChange={handleChange('position')} defaultValue={title}/>
					<h4>image</h4>
					<input type="text" name="image_512" onChange={handleChange('image_512')}/>
					<input type="submit" value="Submit" onClick={this.continue}/>
					<input type="submit" value="Go back to profile" onClick={() => {
						this.props.changePage("myProfile")
					}}/>
				</div>
			)
		}
	}
}

export default UserDetailsForm