import React, { Component } from "react";
import Header from './Header';
import MapContainer from './MapContainer';
import CategoryDescriptions from './CategoryDescriptions';
import ReunionList from './ReunionList';

var MAP_CONTAINER_BUTTON_CLASS = "map-container-button";
var MAP_CONTAINER_CLOSE_BUTTON_CLASS = "map-container-close-button";

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

  mapContainerHiddenLayout() {
    return (
      <div>
        <Header />
        <CategoryDescriptions />
        <div className={MAP_CONTAINER_BUTTON_CLASS} onClick={this.displayMapContainer.bind(this)}>SHOW MAP</div>
      </div>
    );
  }

  mapContainerVisibleLayout() {
    return (
      <div>
        <div className={MAP_CONTAINER_CLOSE_BUTTON_CLASS} onClick={this.hideMapContainer.bind(this)}>Close</div>
        <MapContainer summaryCounts={this.props.summaryCounts} reunions={this.props.reunions} reunionsForMember={this.props.reunionsForMember} selection={this.state.selection} setSelection={this.setSelection.bind(this)} visible={this.state.mapContainerVisible}/>
      </div>
    );
  }

  render() {
    if (this.state.mapContainerVisible) {
      return this.mapContainerVisibleLayout();
    } else {
      return this.mapContainerHiddenLayout();
    }
  }
}

export default App;
