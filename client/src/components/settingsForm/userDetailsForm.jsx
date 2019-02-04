import React, {Component} from 'react';

export class UserDetailsForm extends Component {

	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	render() {
		const { values, handleChange } = this.props;
		return(
			<div>
				<h1>Enter User Details</h1>
				<h4>First Name</h4>
				<input type="text" name="firstName" onChange={handleChange('firstName')} defaultValue={values.firstName}/>
				<h4>Last Name</h4>
				<input type="text" name="lastName" onChange={handleChange('lastName')} defaultValue={values.lastName}/>
				<h4>Email</h4>
				<input type="text" name="email" onChange={handleChange('email')} defaultValue={values.email}/>
				<h4>Position</h4>
				<input type="text" name="position" onChange={handleChange('position')} defaultValue={values.position}/>
				<input type="submit" value="Submit" onClick={this.continue}/>
			</div>
		)
	}
}

export default UserDetailsForm