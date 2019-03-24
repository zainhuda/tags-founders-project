import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import Checkbox from "./checkbox";
import Loading from "../loading/loading";
import "./inactiveUserList.css";


class InactiveUserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      profiles: [],
      checkboxes: [],
      newlyUpdated: {},
    };
  }

  componentDidMount() {
    // make api request for inactive users
    axios
      .get("/api/inactive_users", {
        headers: { "Access-Control-Allow-Origin": "*" }
      })
      .then(res => {
        console.log(res.data);


        this.setState({
          isLoaded: true,
          profiles: res.data,
          checkboxes: this.createCheckboxDataStructure(res.data),
        });
      })
      .catch(err => console.log(err));
  }


  createCheckboxDataStructure = (data) => {
    const checkboxes = {};
    for (let i = 0; i < data.length; i++) {
      let profile = data[i];
      let isInactive = false;

      if (profile.isInactive) {
        isInactive  = true
      }

      checkboxes[profile.slackData.id] = isInactive
    }
    return checkboxes
  };

  // big copy from google for checkbox handling
  handleCheckboxChange = slackId => {
    // const { name } = String(changeEvent.target);
    // console.log("name", name, changeEvent.target, changeEvent.key);

    let shouldDelete = !this.state.checkboxes[slackId];

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [slackId]: !prevState.checkboxes[slackId]
      },
      newlyUpdated: {
        ...prevState.newlyUpdated,
        [slackId]: shouldDelete
      }
    }));
  };

  handleFormSubmit = event => {
      event.preventDefault();


      const usersToMakeInactive = [];
      const usersToMakeActive = [];


      const newlyUpdatedIds = Object.keys(this.state.newlyUpdated);

      for (const slackId of newlyUpdatedIds) {
        if (this.state.checkboxes[slackId]){
          usersToMakeInactive.push(slackId)
        } else {
          usersToMakeActive.push(slackId)
        }
      }

      console.log("users to inactivate", usersToMakeInactive);
      console.log("users to activate", usersToMakeActive);
      axios.post("/api/update_inactivity", {headers: { "Access-Control-Allow-Origin": "*" }, inactiveUsers: usersToMakeInactive, activeUsers: usersToMakeActive});
  };


    selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        },
        newlyUpdated: {
          ...prevState.newlyUpdated,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);


  createCheckbox = profile => (
    <Checkbox
      label={profile.teamData.firstName + " " +  profile.teamData.lastName}
      isSelected={this.state.checkboxes[profile.slackData.id]}
      onCheckboxChange={this.handleCheckboxChange}
      key={profile.slackData.id}
      slackId={profile.slackData.id}
    />
  );

  createCheckboxes  = () => {
    const checkBoxComponents = this.state.profiles.map(this.createCheckbox);
    // this.setState({checkboxComponents: checkBoxComponents})
    return checkBoxComponents
  };

  render() {
    let { isLoaded, profiles, checkboxes} = this.state;
    if (!isLoaded && checkboxes !== undefined) {
      // havent recieved data
      return (
        // loading icon goes here
        <Loading centered={true}/>
      );
    } else {
      // data is received and we can render it
      const checkboxes = this.createCheckboxes();
      return (
        <>

        <Col style={{ padding: "50px" }}>
          <Row>
            <h2> Remove inactive users from Explore </h2>
            <h4> Below is a list of users who are inactive on Slack, select and save the users you wish to remove from Tags </h4>
          </Row>
          <Row>
           <form onSubmit={this.handleFormSubmit}>
            <div className="form-group mt-2">
                <button
                  // type="button"
                  className="list-button"
                  onClick={this.selectAll}
                >
                  Select All
                </button>
                <button
                  // type="button"
                  className="list-button"
                  onClick={this.deselectAll}
                >
                  Deselect All
                </button>

              <button type="submit" className="list-button submit">Save Changes</button>
              </div>
            </form>

            {checkboxes}

          </Row>
        </Col>
        </>
      );
    }
  }
}

export default InactiveUserList
