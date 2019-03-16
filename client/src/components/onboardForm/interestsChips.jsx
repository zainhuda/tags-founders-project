// this is how the interests tags are added
// values are being passed down from the parent form as props
// states of this component and parent component are linked
import React, { Component } from 'react';
import Chips from 'react-chips';
import axios from 'axios';

class InterestsChips extends Component {

    constructor(props) {
        super(props);

        this.state = {
            suggestions: [
                // we'll somehow update these on the fly as the user types
                "basketball",
                "golf",
                "volleyball",
                "rice",
                "men",
                "women"
            ],
        }
    }

    render() {
        return(
            <div>
                <Chips
                    value = {this.props.interestChips}
                    onChange={this.props.onChipChange}
                    suggestions={this.state.suggestions}
                    fromSuggestionsOnly={false}
                />
            </div>
        )
    }
}

export default InterestsChips;
