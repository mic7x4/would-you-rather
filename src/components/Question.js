import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NotFound from './NotFound'

export class Question extends React.Component {
  state = {
    selectedOption: "",
  };

  render() {
    const { question, users } = this.props;
    const { author, optionOne } = question;

    if (!question) {
      return <NotFound />
    }

    return (
      <div className="question">
        <div className="card question-card" key={question.id}>
          <div className="card-header question-header">
            <h4>{users[author].name} asks:</h4>
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
                <h3>Would You Rather...</h3>
                <span>...{optionOne.text}...</span>
                <Link to={`/questions/${question.id}`}>
                  <button className="btn btn-poll">View Poll</button>
                </Link>
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
  return {
    question,
    users,
    authedUser,
  };
}

export default connect(mapStateToProps)(Question);
