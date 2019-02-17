import React, {Component} from 'react';
import axios from 'axios';
import InterestsModal from './interestsModal';

class Settings extends Component {

	// these are states of variables used only in the settings page!
	state = {
		firstName: '',
		lastName: '',
		image_512: '',
	    title: '',
		phone: '',
	    email: '',
	    interests: '',
		skills: '',
    };

	updateAndContinue = (e) => {
		e.preventDefault();

		let {firstName, lastName, image_512, title, phone, email, interests, skills } = this.state;

		let data = {
			"firstName": firstName,
			"lastName": lastName,
			"image_512": image_512,
	        "title": title,
			"phone": phone,
	        "email": email,
	        "interests": interests,
			"skills": skills,
		};
		console.log("we're about to send this off to the update_profile api!", data);
		axios.post('api/update_profile', {
			body: JSON.stringify(data)
		}).then((res) => {
			console.log("just finished updating the user settings, we got this res back: ", res);
		});

		this.props.changePage("myProfile");
	};


	back = (e) => {
		e.preventDefault();
		this.props.changePage("myProfile");
	};

	updateData = (input) => (e) => {
		this.setState({
			[input]: e.target.value
		})
	};


	render() {

		const {values, handleChange} = this.props;
		const {firstName, lastName, image_512, title, phone, email, interests, skills } = values;

		return(
			<div>
				<h1>Settings</h1>

				<h4>First Name</h4>
				<input
					type="text"
					name="firstName"
					onChange={this.updateData("firstName")}
					defaultValue={firstName}
				/>

				<h4>Last Name</h4>
				<input
					type="text"
					name="lastName"
					onChange={this.updateData("lastName")}
					defaultValue={lastName}
				/>

				<h4>image_512</h4>
				<input
					type="text"
					name="image_512"
					onChange={this.updateData("image_512")}
					defaultValue={image_512}
				/>

				<h4>title1</h4>
				<input
					type="text"
					name="title"
					onChange={this.updateData("title")}
					defaultValue={title}
				/>


				<h4>Phone</h4>
				<input
					type="text"
					name="phone"
					onChange={this.updateData("phone")}
					defaultValue={phone}
				/>

				<h4>Email</h4>
				<input
					type="text"
					name="email"
					onChange={this.updateData("email")}
					defaultValue={email}
				/>

				<h4>Interests</h4>
				<input
					type="text"
					name="interests"
					onChange={this.updateData("interests")}
					defaultValue={interests}
				/>
				<InterestsModal interests={interests}/>

				<h4>Skills</h4>
				<input
					type="text"
					name="skills"
					onChange={this.updateData("skills")}
					defaultValue={skills}
				/>

			<input type="submit" value="go back to profile" onClick={this.back}/>
				<input type="submit" value="save changes and update data base" onClick={this.updateAndContinue}/>


			</div>
		)
	};



}

export default Settings;