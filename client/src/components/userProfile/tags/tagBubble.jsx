import React,{Component} from 'react';

class TagBubble extends Component {
	render() {
		return(
			<div>
				<div color="black">{this.props.tag}</div>
			</div>
		)
	}
}

export default TagBubble;