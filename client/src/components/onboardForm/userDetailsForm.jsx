import React, {Component} from 'react';
import axios from 'axios';

export class UserDetailsForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
		isLoaded: false,
		firstName: '',
		lastName: '',
		title: '',
		email: '',
        }
    }

	// api call for the current user
	componentDidMount() {
		axios.get('/api/get_profile', {
			headers: {"Allow-Control-Allow-Origin": "*", }
		})
			.then((res) => {
				console.log("received by axios is: ", res.data);
				this.setState({
					firstName: res.data.profile.first_name,
					lastName: res.data.profile.last_name,
					title: res.data.profile.title,
					email: res.data.email,
					isLoaded: true
				})

			})
			.catch(err => console.log(err))
	};

	continue = (e) => {
		e.preventDefault();
		// call api to update the profile

		const {values: {firstName, lastName, email}} = this.props;
		let data = {
			"firstName": firstName,
			"lastName": lastName,
			"email": email
		};
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
		const {values, handleChange} = this.props;

		if (!isLoaded) {
			return (
				<div>
					LOADING
				</div>
			)
		}
		else {
			let firstName = this.state.firstName;
			let lastName = this.state.lastName;
			let title = this.state.title;
			let email = this.state.email;
			return (
				<div>
					<h1>Heres what we got from slack :)</h1>
					<h1>your first name is: </h1>
					<input type="text" name="firstName" onChange={handleChange('firstName')} defaultValue={firstName}/>
					<h1>your last is: </h1>
					<input type="text" name="lastName" onChange={handleChange('lastName')}
					       defaultValue={values.lastName}/>
					<h1>your email is: </h1>
					<input type="text" name="email" onChange={handleChange('email')} defaultValue={values.email}/>
					<input type="submit" value="submit" onClick={this.continue}/>
					<h4> dw u can always change this stuff later</h4>
				</div>
			)
		}
	}



}

export default UserDetailsForm