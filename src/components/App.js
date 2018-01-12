import React, { Component } from "react";
import MapContainer from './MapContainer';
import CategoryDescriptions from './CategoryDescriptions';
import ReunionList from './ReunionList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { selection: null };
    this.state = { mapContainerVisible: false };
    window.app = this;
  }

  setSelection(selectedItem) {
    this.setState({selection: selectedItem});
  }

  displayMapContainer() {
    this.setState({ mapContainerVisible: true });
  }

  hideMapContainer() {
    this.setState({ mapContainerVisible: false });
  }

  getMapContainerButtonClassName() {
    return this.state.mapContainerVisible ? "map-container-button" : "map-container-button visible";
  }

  getMapContainerCloseButtonClassName() {
    return this.state.mapContainerVisible ? "map-container-close-button visible" : "map-container-close-button";
  }

  render() {
    return (
      <div>
        <div className={this.getMapContainerCloseButtonClassName()} onClick={this.hideMapContainer.bind(this)}>Close</div>
        <CategoryDescriptions />
        <MapContainer summaryCounts={this.props.summaryCounts} reunionsForMember={this.props.reunionsForMember} selection={this.state.selection} setSelection={this.setSelection.bind(this)} visible={this.state.mapContainerVisible}/>
        <div className={this.getMapContainerButtonClassName()} onClick={this.displayMapContainer.bind(this)}>show map</div>
      </div>
    );
  }
}

export default App;
