import React, {Component} from 'react';
import {fetchConfig} from '../../actions';
import {connect} from 'react-redux';

class ConfigSettings extends Component {

    componentDidMount() {
        this.props.fetchConfig();
    }

    render() {
        let config = this.props.config
        console.log(config);
        return(
            <>
                hi from configsettings

            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        config: state.config,
    }
}
export default connect(mapStateToProps, {fetchConfig})(ConfigSettings);
