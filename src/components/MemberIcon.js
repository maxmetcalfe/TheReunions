import React, { Component } from "react";

class MemberIcon extends Component {

  render() {
    return (
      <div className="member-icon">
        {this.props.text}
      </div>
    );
  }
}

export default MemberIcon;
