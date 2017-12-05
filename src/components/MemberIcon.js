import React, { Component } from "react";

class MemberIcon extends Component {
  
  constructor(props) {
    super(props);
    this.reunions = props.reunions;
    this.filterReunionsOnMember.bind(this);
  }

  filterReunionsOnMember(e) {
    e.reunions.forEach(function(reunion) {
        var marker = document.getElementById(reunion);
        console.log(marker);
        marker.classList.toggle("selected");
    })
  }

  render() {
    var text = this.props.text.toUpperCase();
    return (
      <div className="member-icon" onClick={()=>{this.filterReunionsOnMember(this.props)}}>
        {text}
      </div>
    );
  }
}

export default MemberIcon;
