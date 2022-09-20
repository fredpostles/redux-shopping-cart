import React, { Component } from "react";
import { connect } from "react-redux";
import { processShoppingCart } from "../utils";
import ShoppingCartItem from "./ShoppingCart/ShoppingCartItem";

class ShoppingCart extends Component {
  render() {
    const processedCart = processShoppingCart(
      this.props.products,
      this.props.shoppingCartItems
    );
    return (
      <>
        <button onClick={() => this.props.onScreenMode(0)}>
          View products
        </button>
        <h1>Cart total: £{processedCart.cartTotal.toFixed(2)}</h1>
        <div className="cartItems_container">
          {processedCart.shoppingCartItems.map((item) => (
            <ShoppingCartItem key={item.id} item={item} />
          ))}
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { shoppingCartItems: state.shoppingCartItems };
}

export default connect(mapStateToProps)(ShoppingCart);
