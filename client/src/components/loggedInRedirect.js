import { Redirect } from "react-router-dom";
import React, {Component} from 'react';
import axios from "axios";

class LoggedInRedirect extends Component {

	constructor(props){
		super(props);

		this.state = {
      isLoggedIn: null,
    };

    axios.get("/api/current_user", {headers: {"Access-Control-Allow-Origin": "*", }}).then((currentUser) => {
    	let isLoggedIn;
    	if (currentUser.data){
    		 isLoggedIn = true;
			} else {
    		isLoggedIn = false;
			}
			this.setState({isLoggedIn: isLoggedIn});
		})
	}



	render() {
		let redirect;
		if (this.state.isLoggedIn === false) {
			redirect = <Redirect to="/"/>
		}

		return(
			<>
				{redirect}
			</>
		);
	}
}

export default LoggedInRedirect;