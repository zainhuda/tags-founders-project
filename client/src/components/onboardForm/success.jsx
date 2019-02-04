import React, {Component} from 'react';

export class Success extends Component {

	// we want to bring them to either the explore page or some tutorial???
	continue = (e) => {
		e.preventDefault();


		// redirect them
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
				<input type="submit" value="explore" onClick={this.continue}/>
			</div>
		)
	}

}

export default Success;