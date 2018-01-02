import React, { Component } from "react";
import MemberTable from './MemberTable';

class MapContainer extends Component {

  render() {
    return (
      <div id="map-container">
        <div id="panel" className="side-panel">
          <MemberTable summaryCounts={this.props.summaryCounts} reunionsForMember={this.props.reunionsForMember} selection={this.props.selection} setSelection={this.props.setSelection.bind(this)} />
         </div>
      </div>
    );
  }
}

export default MapContainer;
