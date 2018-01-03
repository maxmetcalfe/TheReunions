import React, { Component } from "react";
import MapContainer from './MapContainer';
import CategoryDescriptions from './CategoryDescriptions';
import ReunionList from './ReunionList';

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
    return (
      <div>
      <CategoryDescriptions />
      <ReunionList reunions={this.props.reunions} />
      <MapContainer summaryCounts={this.props.summaryCounts} reunionsForMember={this.props.reunionsForMember} selection={this.state.selection} setSelection={this.setSelection.bind(this)} />
      </div>
    );
  }
}

export default App;
