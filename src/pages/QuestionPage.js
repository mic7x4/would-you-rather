import React, { Component } from "react";
import { connect } from "react-redux";
import AnsweredQuestion from "../components/AnsweredQuestion";
import UnansweredQuestion from '../components/UnansweredQuestion'
import { getanswered } from '../Utils/helpers'
import NotFound from '../components/NotFound'

export class QuestionPage extends Component {
  render() {
    const { id, user, answered } = this.props;
    if (!user) {
      return <NotFound />;
    }
    return (
      <div>
        {answered
          ? <AnsweredQuestion id={id} />
          : <UnansweredQuestion id={id} />}
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { id } = props.match.params;
  const question = questions[id]
  const answered = question && getanswered(question, authedUser);
  const user = question && users[question.author];
  return {
    id,
    user,
    answered,
  };
}

export default connect(mapStateToProps)(QuestionPage);
