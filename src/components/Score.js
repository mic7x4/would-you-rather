import React, { Component } from "react";

export class Score extends Component {
  render() {
    const { avatarURL, name, answers, questions } = this.props.user;
    const answered = Object.keys(answers).length;
    const created = questions.length;
    const total = answered + created;
    return (
      <div className="card">
        <div className="card-body leaderboard">
          <div className="question-avatar">
            <img src={avatarURL} alt={`avatar of ${name}`} />
          </div>
          <div className="leaderboard-details">
            <h2>{name}</h2>
            <p>
              Answered questions <span>{answered}</span>{" "}
            </p>
            <hr />
            <p>
              Created questions <span>{created}</span>{" "}
            </p>
          </div>
          <div className="leaderborad-score">
            <div className="score">Score</div>
            <div className="score-number">{total}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Score;
