import React, { Component } from "react";
import { connect } from "react-redux";
import Categories from "../components/Categories";

export class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Categories />
      </div>
    );
  }
}

export default connect()(Home);
