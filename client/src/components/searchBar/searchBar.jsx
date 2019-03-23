import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProfiles} from '../../actions';
import {
  Form,
  FormControl,
  FormGroup,
  Glyphicon,
  Row
} from "react-bootstrap";
import './searchBar.css';
class searchBar extends Component {

	componentDidMount() {
		this.props.fetchProfiles(this.search.value);
	}

	state = {
		query: '',
	}

	handleInputChange = () => {
		this.setState({
			query: this.search.value
		})
		console.log("query:", this.state.query);
		this.props.fetchProfiles(this.search.value);
	};

	render() {
		return (
			<Row>
				<Form inline>
					<FormGroup controlId="formInlineName" className={"searchBar"}>
						<input
							className="search-input"
							placeholder="Search"
							ref={input => this.search = input}
							onChange={this.handleInputChange}
						/>
						<FormControl.Feedback>
						  <Glyphicon glyph="search" className="search-icon"/>
						</FormControl.Feedback>
					</FormGroup>
				</Form>
			</Row>



		)
	}

}
function mapStateToProps(state) {
	return {profiles: state.profiles};
}

export default connect(mapStateToProps, {fetchProfiles})(searchBar);
