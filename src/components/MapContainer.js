import React, { Component } from "react";
import MemberTable from './MemberTable';

class MapContainer extends Component {

  getclassName(props) {
    return props.visible ? "visible" : "";
  }

  render() {
      return (
        <div id="map-container" className={this.getclassName(this.props)}>
          <div id="map"></div>
          <div id="panel" className="side-panel">
            <MemberTable summaryCounts={this.props.summaryCounts} reunionsForMember={this.props.reunionsForMember} selection={this.props.selection} setSelection={this.props.setSelection.bind(this)} />
           </div>
        </div>
      );
  }
}

export default MapContainer;
