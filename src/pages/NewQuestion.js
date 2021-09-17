import React, { Component } from "react";
import { connect } from "react-redux";
import { handleCreateQuestion } from "../actions/questions";

export class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const { optionOneText, optionTwoText } = this.state;
    await dispatch(handleCreateQuestion({ optionOneText, optionTwoText }));
    this.setState({
      optionOneText: "",
      optionTwoText: "",
    });
    history.push("/");
  };

  render() {
    const { optionOneText, optionTwoText } = this.state;
    return (
      <div className="card">
        <div className="card-header new-question"> Create New Question</div>
        <div className="card-body">
          <div className="add-form">
            <h2>Would you rather...</h2>
            <input
              type="text"
              className="option-field"
              placeholder="Enter Option One Text Here"
              name="optionOneText"
              value={optionOneText}
              onChange={this.handleChange}
            />
            <h3 className="separator">OR</h3>
            <input
              type="text"
              className="option-field"
              placeholder="Enter Option Two Text Here"
              name="optionTwoText"
              value={optionTwoText}
              onChange={this.handleChange}
            />
            <button
              className="btn btn-poll"
              onClick={this.handleSubmit}
              disabled={(!optionOneText || !optionTwoText) || (optionOneText === optionTwoText)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(NewQuestion);
