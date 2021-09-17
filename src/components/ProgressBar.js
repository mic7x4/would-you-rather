import React, { Component } from 'react'

export class ProgressBar extends Component {
  render() {
    const { option, authedUser, optionPercent, totalVotes } = this.props;
    return (
      <div
        className={`answer
                    ${option.votes.includes(authedUser) ? "answered" : ""}`}
      >
        <h4>Would you rather {option.text}?</h4>
        <div className="progress-bar">
          <div className="percentage" style={{ width: `${optionPercent}%` }}>
            <h3 className="percentage-number">{`${optionPercent}%`}</h3>
          </div>
        </div>
        <h3 className="total-votes">{`${option.votes.length} out of ${totalVotes} votes`}</h3>
      </div>
    );
  }
}

export default ProgressBar
