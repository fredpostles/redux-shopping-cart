import React, { Component } from "react";

class Rating extends Component {
  render() {
    const { rate, count } = this.props.rating;

    return (
      <>
        <p>
          Rating: {rate} from {count} users.
        </p>
      </>
    );
  }
}

export default Rating;
