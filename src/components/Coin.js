import React, { Component } from "react";


class Coin extends Component {

  constructor(props) {
    super(props);
    this.reunions = props.reunions;
  }

  selectMemberReunionsByType(e) {
      this.resetMap();
    var self = this;
    e.reunions.forEach(function(reunion) {
        if (reunion.category === self.props.type) {
          var marker = document.getElementById(reunion.element_id);
          marker.classList.add("selected");
        }
    })
  }

  resetMap() {
    var selectedReunions = map.querySelectorAll(".selected");
    selectedReunions.forEach(function(r) {
      r.classList.remove("selected");
    })
  }

  render() {
    return (
      <div className="coin" onClick={()=>{this.selectMemberReunionsByType(this.props)}}>{this.props.counts}</div>
    )
  }
}

export default Coin;
