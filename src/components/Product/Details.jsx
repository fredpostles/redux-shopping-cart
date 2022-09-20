import React, { Component } from "react";

class Details extends Component {
  render() {
    const { title, description } = this.props;

    return (
      <>
        <h1>{title}</h1>
        <p>{description}</p>
      </>
    );
  }
}

export default Details;
