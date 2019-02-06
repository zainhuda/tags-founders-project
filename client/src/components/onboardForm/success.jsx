import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'

export class Success extends Component {

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
			// maybe we want a tutorial route?????
			return <Redirect to="/explore"/>
		}
	};

	// go bakc a step!!
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		return(
			<div>
				<h1> all set !</h1>
				<input type="submit" value="go back" onClick={this.back}/>
				{this.renderRedirect()}
				<input type="submit" value="explore" onClick={this.setRedirect}/>
			</div>
		)
	}

}

export default Success;