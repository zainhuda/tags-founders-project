// this is for the user to see his or her own profile
// some logic has to go in here
// accessed through the path: /profile

import React, { Component } from 'react';
import Chips from 'react-chips';
import { Modal, Button } from "react-bootstrap"; // using bootstrap modal for nice styles
import axios from 'axios';

// redux
import {connect} from 'react-redux';

class InterestsModal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			chips: [],
			suggestions: [
				"basketball",
				"volleyball",
				"golf",
				"cheese",
				"wine"
			],
		}
	};

	componentDidMount() {
		let interests = this.props.myProfile[0].teamData.interests;
		console.log("interests in the modal are", interests);
		this.setState({
			chips: interests
		})

	}
	handleClose = () => {
		this.setState({ showModal: false });

  	};

	handleSave = () => {
		// update the interests
		this.props.myProfile[0].teamData.interests = this.state.chips;
		this.setState({ showModal: false });
	}




  	handleShow = () => {
    	this.setState({ showModal: true });
  	};



	onChipChange = chips => {
    	this.setState({ chips });
  	};


    render() {

        return (
        <>
			<Button variant="primary" onClick={this.handleShow}>
          		Edit Interests
        	</Button>

			<Modal show={this.state.showModal} onHide={this.handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Edit interests</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					You wana edit? then edit bossman aint nothing stopping u except
					<ol>
						<li> Fetch suggestions from db </li>
						<li> Enable enter to add, right now its just adding comma for custom interest</li>

					</ol>
				</Modal.Body>
				<h4> Seperate with commas </h4>
					<Chips
						value = {this.state.chips}
						onChange={this.onChipChange}
						suggestions={this.state.suggestions}
						fromSuggestionsOnly={false}
					/>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={this.handleSave}>
							Done
						</Button>
					</Modal.Footer>
				</Modal>
			</>
        )
    }

}

function mapStateToProps(state) {
	return {
		myProfile: state.myProfile
	};
};

export default connect(mapStateToProps)(InterestsModal);
