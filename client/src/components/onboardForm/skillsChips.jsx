// this is how the skils chips are added in the onboard form
// values are being passed down from the parent form as props
// states of this component and parent component are linked
import React, { Component } from 'react';
import Chips from 'react-chips';
import axios from 'axios';

class SkillsChips extends Component {

    constructor(props) {
        super(props);

        this.state = {
            suggestions: [
                // we'll have to change these on the fly as the user types
                // big ml things
                "javascript",
                "python",
                "leadership",
                "excel",
                "adobe",
                "photography"
            ],
        }
    }

    render() {
        return(
            <div>
                <Chips
                    value = {this.props.skillChips}
                    onChange={this.props.onChipChange}
                    suggestions={this.state.suggestions}
                    fromSuggestionsOnly={false}
                    createChipKeys={['Enter', ',']}
                />
            </div>
        )
    }
}

export default SkillsChips;
