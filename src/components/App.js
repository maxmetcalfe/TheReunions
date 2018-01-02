import React, { Component } from "react";
import MapContainer from './MapContainer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {selection: null};
    window.app = this;
  }

  setSelection(selectedItem) {
    this.setState({selection: selectedItem});
  }

  render() {
    return <MapContainer summaryCounts={this.props.summaryCounts} reunionsForMember={this.props.reunionsForMember} selection={this.state.selection} setSelection={this.setSelection.bind(this)} />
  }
}

export default App;
