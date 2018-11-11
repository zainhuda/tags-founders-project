import React, {Component} from 'react';

class Listing extends Component {
  render() {
    return (
      <div>
        Listing #{this.props.number}
      </div>
    );
  }
}

export default Listing;