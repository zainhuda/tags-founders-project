import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import ProfileModal from "../profileModal/profileModal";
import './profileThumbnail.css';

class ProfileThumbnail extends Component {
    constructor(...args) {
      super(...args);
      this.state = {
          modalShow: false,
          firstName: this.props.firstName,
          lastName: this.props.lastName,
          url: this.props.url,
          title: this.props.title,
          email: this.props.email,
          phone: this.props.phone,
          skills: this.props.skills,
          interests: this.props.interests
       };
    }

  render() {
	  let modalClose = () => {
	      this.setState({
	          modalShow: false
	      })
	  };

	  const {firstName, lastName, url, title, email, phone,  skills, interests} = this.state;

    return (
        <div>
      <Panel onClick={() => this.setState({ modalShow: true }, () => {
          console.log("clicked")
      })} className="profileSummary">
        <a>
          <img src={this.props.url} className="summaryThumbnail"/>
            <div className={"profileSummaryDescription"}>
                <h5> {this.props.firstName + " " + this.props.lastName} </h5>
                <h5>{this.props.title}</h5>
            </div>
        </a>
        </Panel>
		<ProfileModal
			  show={this.state.modalShow}
			  onHide={modalClose}
			  firstName={firstName}
			  lastName={lastName}
			  url={url}
			  title={title}
			  phone={phone}
			  email={email}
			  skills={skills}
			  interests={interests}
		  />
      </div>
    );
  }
}

export default ProfileThumbnail;
