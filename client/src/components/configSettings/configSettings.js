import React, {Component} from 'react';
import {fetchConfig} from '../../actions';
import {connect} from 'react-redux';

import {Col, Panel, PanelGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class ConfigSettings extends Component {

    componentDidMount() {
        this.props.fetchConfig();
    }



    handleChange = (key) => (e) => {
        // key is the primary label
        // e.target.value has the value of the input box
        console.log("key is", key);
        console.log("e value is", e.target.value);
        //let temp = this.props.config.labels[key].find(label => label.label === e.target.value);
        //console.log(temp);
        this.setState({
            [key]: e.target.value
        })
        console.log("state is", this.state);
    }
    deletePrimaryLabel = () => {

    }
    deleteSecondaryLabel = () => {

    }
    newPrimaryLabel = () => {

    }
    newSecondaryLabel = () => {

    }

    render() {
        const labelsObject = this.props.config.labels;
        console.log("l", labelsObject);

        const labels = Object.keys(labelsObject).map((key, index) => {
            console.log(key);

            // formatting of the secondary labels
            const secondaryLabels = labelsObject[key].map(secondaryLabel => {
                console.log(secondaryLabel)
                return(
                    <div>
                        <input onChange={this.handleChange(key)} defaultValue={secondaryLabel.label}/>
                    </div>
                )
            })

            // formatting of the primary labels
            return(
                <div>
                    <input onChange={this.handleChange()} defaultValue={key} />
                    {secondaryLabels}
                </div>
            )
        })




        return(
            <Col className="sidebar">
                {labels}
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        config: state.config,
    }
}
export default connect(mapStateToProps, {fetchConfig})(ConfigSettings);
