import React, {Component} from 'react';
import {Modal, Button} from "react-bootstrap";
import './profileModal.css';

class ProfileModal extends Component {


  render() {

      const skills = (this.props.skills).map(skill => {
          return(
              <div>
                {skill}
              </div>
          )
      })

      const interests = (this.props.interests).map(interest => {
          return(
              <div>
                {interest}
              </div>
          )
      })


    return (
      <Modal className="modal"
        {...this.props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="size"
      >
        <Modal.Body>
            <div className="modal-grid">
                <div>
                    <img src={this.props.url} className="modal-pic"/>
                </div>
                <div>
                    <div>
                        <h1 className="modal-name">
                            {this.props.firstName + " " + this.props.lastName}
                        </h1>
                        <h4 className="modal-title">{this.props.title}</h4>
                        <p className="info">Phone: {this.props.phone}</p>
                        <p className="info">Email: {this.props.email}</p>
                    </div>
                    <div>
                        <p className="info">Skills</p>
                        <div className="tags-list">
                            {skills}
                        </div>
                    </div>
                    <div>
                        <p className="info">Interests</p>
                        <div className="tags-list">
                            {interests}
                        </div>
                    </div>
                </div>
            </div>
        </Modal.Body>
      </Modal>
    );
  }
}


export default ProfileModal;
