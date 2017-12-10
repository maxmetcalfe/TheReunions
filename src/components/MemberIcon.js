import React, { Component } from "react";

class MemberIcon extends Component {
  
  constructor(props) {
    super(props);
    this.reunions = props.reunions;
  }

  selectMemberReunions(e) {
    this.resetMap();
    e.reunions.forEach(function(reunion) {
        var marker = document.getElementById(reunion.element_id);
        marker.classList.add("selected");
    })
  }

  resetMap() {
    var selectedReunions = map.querySelectorAll(".selected");
    selectedReunions.forEach(function(r) {
      r.classList.remove("selected");
    })
  }

  render() {
    var text = this.props.text.toUpperCase();
    return (
      <div className="member-icon" onClick={()=>{this.selectMemberReunions(this.props)}}>
        {text}
      </div>
    );
  }
}

export default MemberIcon;
