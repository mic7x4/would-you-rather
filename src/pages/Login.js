import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { setActiveUser } from "../actions/shared";
import logo192 from "../assets/logo192.png";
import Header from '../components/Header'

export class Login extends Component {
  state = {
    user: "",
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState(() => ({
      [name]: value,
    }));
  };

  handleLogin = () => {
    const { dispatch } = this.props;
    dispatch(setActiveUser(this.state.user));
  };

  render() {
    const { userIds, users } = this.props;
    return (
      <div className="login-page">
        <LoadingBar />
        <Header />
        <div className="card">
          <div className="card-header">
            <h3>Welcome to the Would You Rather App!</h3>
            <p>Please sign in to continue</p>
          </div>
          <div className="card-body">
            <div className="login-form">
              <div className="logo">
                <img className="login-logo" src={logo192} alt="" />
              </div>

              <select name="user" onChange={this.handleChange}>
                <option defaultChecked>Select User</option>
                {userIds &&
                  userIds.map((userId) => (
                    <option key={users[userId].id} value={userId}>
                      {users[userId].name}
                    </option>
                  ))}
              </select>
              <button
                className="btn login-btn"
                onClick={this.handleLogin}
                disabled={!this.state.user}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
    userIds: Object.keys(users),
  };
}

export default connect(mapStateToProps)(Login);
