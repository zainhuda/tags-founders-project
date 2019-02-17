// this is for the user to see his or her own profile
// some logic has to go in here
// accessed through the path: /profile

import React, { Component } from 'react';
import Chips from 'react-chips';
import { Modal, Button } from "react-bootstrap"; // using bootstrap modal for nice styles
import axios from 'axios';



class InterestsModal extends Component {

		constructor(props) {
			super(props);

			this.state = {
          showModal: false,
          chips: this.props.interests,
          suggestions: [
              "Javascript",
              "Python",
              "Problem Solving",
              "Being sus",
              "Double sus",
              "Success"
          ],
      }

		};

		handleClose = () => {
    	this.setState({ showModal: false });
  	};

  	handleShow = () => {
    	this.setState({ showModal: true });
  	};

  	handleSave = () => {
			const data = {interests: this.state.chips};

			axios.post('api/update_interests', {
				body: JSON.stringify(data)
			}).then((res) => {
				console.log("update res: ", res);
				this.handleClose();
			});
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
										suggestions={[
											"Javascript",
											"Python",
											"Problem Solving",
											"Being sus",
											"Double sus",
											"Success"
										]}
										fromSuggestionsOnly={false}

									/>
							<Modal.Footer>
								<Button variant="secondary" onClick={this.handleClose}>
									Close
								</Button>
								<Button variant="primary" onClick={this.handleSave}>
									Save Changes
								</Button>
							</Modal.Footer>
					</Modal>
				</>
        )
    }

}
export default InterestsModal;