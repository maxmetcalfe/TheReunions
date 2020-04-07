import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from './Header';
import MapContainer from './MapContainer';
import CategoryDescriptions from './CategoryDescriptions';
import ReunionList from './ReunionList';
import { dataLoaded } from "../actions";

const MAP_CONTAINER_BUTTON_CLASS = "map-container-button";
const MAP_CONTAINER_CLOSE_BUTTON_CLASS = "map-container-close-button";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { mapContainerVisible: false };
    window.app = this;
  }

  displayMapContainer() {
    this.setState({ mapContainerVisible: true });
  }

  hideMapContainer() {
    this.setState({ mapContainerVisible: false });
  }

  mapContainerHiddenLayout(hasData) {
    let reunions = this.props.data && this.props.data.data && this.props.data.data.reunions;
    let showMapButton = hasData ? <div className={MAP_CONTAINER_BUTTON_CLASS} onClick={this.displayMapContainer.bind(this)}>SHOW MAP</div> : null;

    return (
      <div>
        <Header />
        <CategoryDescriptions />
        <ReunionList reunions={reunions}/>
        {showMapButton}
      </div>
    );
  }

  mapContainerVisibleLayout() {
    let reunions = this.props.data && this.props.data.data && this.props.data.data.reunions;
    let reunionsForMember = this.props.data && this.props.data.data && this.props.data.data.reunionsForMember;
    let summaryCounts = this.props.data && this.props.data.data && this.props.data.data.summaryCounts;
    let selection = this.props.data && this.props.data.selection;

    return (
      <div>
        <a href="#" className={MAP_CONTAINER_CLOSE_BUTTON_CLASS} onClick={this.hideMapContainer.bind(this)}></a>
        <MapContainer summaryCounts={summaryCounts}
          reunions={reunions}
          reunionsForMember={reunionsForMember}
          selection={selection}
        />
      </div>
    );
  }

  render() {

    // If we don't have any data yet, fetch it.
    // FIX ME: Why is data double nested?
    let hasData = this.props.data && Object.keys(this.props.data).length > 0;
    if (!hasData) {
      fetch("/api/data")
        .then((response) => response.json())
        .then((data) => this.props.dispatch(dataLoaded(data)))
        .catch((e) => console.warn("Failed to load data: " + e))
    }

    if (this.state.mapContainerVisible) {
      return this.mapContainerVisibleLayout();
    } else {
      return this.mapContainerHiddenLayout(hasData);
    }
  }
}

const mapStateToProps = (data, dispatch) => {
  return { data, dispatch: dispatch };
};

App.propTypes = {
  data: PropTypes. object.isRequired,
  dispatch: PropTypes.func
};

export default connect(
  mapStateToProps
)(App);
