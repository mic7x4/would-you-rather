import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { BrowserRouter as Router } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Login from "../pages/Login";
import Dashboard from "../pages/Dasboard";

export class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <div>
          <LoadingBar />
          {!this.props.authedUser ? <Login /> : <Dashboard />}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    authedUser,
    loading: users === {} && questions === {},
  };
}

export default connect(mapStateToProps)(App);
