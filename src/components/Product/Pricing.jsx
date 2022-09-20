import React, { Component } from "react";

class Pricing extends Component {
  render() {
    return <p>£{this.props.price.toFixed(2)}</p>;
  }
}

export default Pricing;
