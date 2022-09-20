import React, { Component } from "react";
import { connect } from "react-redux";
import { ON_DELETE_ITEM, INCREMENT, DECREMENT } from "../../redux/types";

class ShoppingCartItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <>
        <div className="carItem">
          <p>{item.details.title}</p>
          <img src={item.details.image} alt={item.details.title} />
          <p>Quantity: {item.quantity}</p>
          <div className="btn changeQuantity">
            <button
              onClick={() =>
                this.props.dispatch({ type: INCREMENT, payload: item.id })
              }
            >
              + 1
            </button>
            <button
              onClick={() =>
                this.props.dispatch({ type: DECREMENT, payload: item.id })
              }
            >
              - 1
            </button>
          </div>
          <button
            onClick={() =>
              this.props.dispatch({
                type: ON_DELETE_ITEM,
                payload: item.id,
              })
            }
          >
            Delete
          </button>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    shoppingCartItems: state.shoppingCartItems,
  };
}

export default connect(mapStateToProps)(ShoppingCartItem);
