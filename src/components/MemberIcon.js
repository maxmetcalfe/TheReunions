import React, { Component } from "react";

class MemberIcon extends Component {

  render() {
    var text = this.props.text.toUpperCase();
    return (
      <div className="member-icon">
        {text}
      </div>
    );
  }
}

export default MemberIcon;
