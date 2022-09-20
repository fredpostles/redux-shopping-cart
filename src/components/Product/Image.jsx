import React, { Component } from "react";

class Image extends Component {
  render() {
    const { image, title } = this.props;

    return <img src={image} alt={title} />;
  }
}

export default Image;
