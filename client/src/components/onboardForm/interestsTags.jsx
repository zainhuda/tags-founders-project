// this is how the interests tags are added
import React, { Component } from 'react';
import Chips from 'react-chips';
import axios from 'axios';

class InterestsTags extends Component {

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
    handleSave = () => {
            const data = {interests: this.state.chips};

            axios.post('api/update_interests', {
                body: JSON.stringify(data)
            }).then((res) => {
                console.log("update res: ", res);
                this.handleClose();
            });
        };

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
                                value = {this.props.chips}
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
                            <input type="submit" value="Next" onClick={this.handleSave}/>
            </div>
        )
    }


}

export default InterestsTags;
