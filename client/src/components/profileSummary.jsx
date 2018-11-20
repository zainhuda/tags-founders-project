import React, {Component} from 'react';

class ProfileSummary extends Component {
  render() {
    return (
      <div>
        Listing #{this.props.number}
      </div>
    );
  }
}

export default ProfileSummary;