import React, { Component } from "react";


class Coin extends Component {

  render() {

    return (
      <div className="coin">{this.props.counts}</div>  
    )
  }
}

export default Coin;
