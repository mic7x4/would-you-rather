import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProgressBar from './ProgressBar'

export class AnsweredQuestion extends Component {
  render() {
    const { question, users, totalVotes, authedUser } = this.props;
    const { author, optionOne, optionTwo } = question;
    const optionOnePercent = Math.round(
      (optionOne.votes.length / totalVotes) * 100
    );
    const optionTwoPercent = Math.round(
      (optionTwo.votes.length / totalVotes) * 100
    );
    return (
      <div className="question">
        <div className="card question-card" key={question.id}>
          <div className="card-header question-header">
            <h4>Asked by {users[author].name} </h4>
          </div>
          <div className="card-body">
            <div className="question-body">
              <div className="question-avatar">
                <img
                  src={users[author].avatarURL}
                  alt={`avatar of ${users[author].name}`}
                />
              </div>
              <div className="question-content">
                <h3>Results: </h3>
                <ProgressBar
                  option={optionOne}
                  authedUser={authedUser}
                  optionPercent={optionOnePercent}
                  totalVotes={totalVotes}
                />
                <ProgressBar
                  option={optionTwo}
                  authedUser={authedUser}
                  optionPercent={optionTwoPercent}
                  totalVotes={totalVotes}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
  const question = questions[id];
  const { optionOne, optionTwo } = question;
  const votes = optionOne.votes.concat(optionTwo.votes);
  const totalVotes = votes.length;
  return {
    question: question ? question : null,
    users,
    authedUser,
    totalVotes,
    votes,
  };
}

export default withRouter(connect(mapStateToProps)(AnsweredQuestion));
