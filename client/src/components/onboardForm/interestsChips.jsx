// this is how the interests tags are added
import React, { Component } from 'react';
import Chips from 'react-chips';
import axios from 'axios';

class InterestsChips extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chips: this.props.intersts,
            suggestions: [
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

                You wana edit? then edit bossman aint nothing stopping u except
                    <ol>
                        <li> Fetch suggestions from db </li>
                        <li> Enable enter to add, right now its just adding comma for custom interest</li>

                    </ol>
                    <h4> Seperate with commas </h4>
                            <Chips
                                value = {this.props.interestChips}
                                onChange={this.props.onChipChange}
                                suggestions={[
                                    "Javascript",
                                    "Python",
                                    "Problem Solving",
                                    "Being sus",
                                    "Double sus",
                                    "Success",
                                    "men"
                                ]}
                                fromSuggestionsOnly={true}
                            />
            </div>
        )
    }


}

export default InterestsChips;
