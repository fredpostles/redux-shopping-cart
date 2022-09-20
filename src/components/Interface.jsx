import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";
import { SET_SCREEN_MODE, SET_SEARCH_TERM } from "../redux/types";

class Interface extends Component {
  onScreenMode = (screenMode) => {
    this.props.dispatch({ type: SET_SCREEN_MODE, payload: screenMode });
  };

  render() {
    const { products, filteredData, screenMode } = this.props;

    const results =
      filteredData && filteredData.length > 0 ? filteredData : products;

    if (screenMode === 0) {
      return (
        <>
          <button onClick={() => this.onScreenMode(1)}>
            View shopping cart
          </button>
          <input
            type="text"
            onInput={(e) => {
              this.props.dispatch({
                type: SET_SEARCH_TERM,
                payload: e.target.value,
              });
            }}
          />
          {results.map((product) => (
            <Product
              onScreenMode={this.onScreenMode}
              key={product.id}
              product={product}
            />
          ))}
        </>
      );
    } else if (screenMode === 1)
      return (
        <>
          <input
            type="text"
            onInput={(e) => {
              this.props.dispatch({
                type: SET_SEARCH_TERM,
                payload: e.target.value,
              });
            }}
          />
          <ShoppingCart onScreenMode={this.onScreenMode} products={products} />
        </>
      );
    else return <h1>Loading...</h1>;
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    screenMode: state.screenMode,
    searchTerm: state.searchTerm,
    filteredData: state.filteredData,
  };
}

export default connect(mapStateToProps)(Interface);
