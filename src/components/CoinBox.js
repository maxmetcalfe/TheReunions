import React, { Component } from "react";
import Coin from './Coin';

class CoinBox extends Component {
  
  render() {
    var divKey = this.props.member + "-" + this.props.type;
    return (
      <div key={divKey} className="coin-box">
        {Object.keys(this.props.counts).map((type) => (
            <Coin key={this.props.member + "-" + type} type={type} id={this.props.member + "-" + type} counts={this.props.counts[type]} reunions={this.props.reunions}/>
        ))}
      </div>
    )
  }
}

export default CoinBox;
