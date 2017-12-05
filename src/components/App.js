import React, { Component } from "react";
import MemberTable from './MemberTable';

class App extends Component {

  render() {
    return <MemberTable summaryCounts={this.props.summaryCounts} reunionsForMember={this.props.reunionsForMember}/>
  }
}

export default App;
