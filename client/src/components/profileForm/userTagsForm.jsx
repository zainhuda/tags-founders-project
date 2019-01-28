import React, {Component} from 'react';

export class UserTagsForm extends Component {

	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const { values, handleChange } = this.props;
		return(
			<div>
				<h4>Interests</h4>
				<input type="text" name="firstName" onChange={handleChange('firstName')} defaultValue={values.firstName}/>
				<h4>Skills</h4>
				<input type="text" name="lastName" onChange={handleChange('lastName')} defaultValue={values.lastName}/>
				<input type="submit" value="Back" onClick={this.back}/>
				<input type="submit" value="Submit" onClick={this.continue}/>

			</div>
		)
	}
}

export default UserTagsForm;