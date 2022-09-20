import React, { Component } from "react";
import { connect } from "react-redux";
import { SET_API_DATA } from "./redux/types";
import axios from "axios";
import "./App.css";
import Interface from "./components/Interface";

class App extends Component {
  async componentDidMount() {
    try {
      const result = await axios.get("https://fakestoreapi.com/products");
      // console.log(result.data);
      this.props.dispatch({ type: SET_API_DATA, payload: result.data });
    } catch (error) {
      console.log("API Error!");
    }
  }

  render() {
    return <Interface />;
  }
}

// function mapStateToProps() {}

export default connect()(App);
