import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export class FormSubmitted extends Component {

	state = {
		redirect: false
	};

	setRedirect = () => {
		this.setState({
			redirect: true
		})
	};

	renderRedirect = () => {
		if (this.state.redirect) {
			// redirect to their profile page????
			return <Redirect to="/explore"/>
		}
	};

	render() {
		return(
			<div>
				<h1>ur settingss were changed !</h1>
				{this.renderRedirect()}
				<input type="submit" value="explore" onClick={this.setRedirect}/>
			</div>
		)
	}
}

export default FormSubmitted;