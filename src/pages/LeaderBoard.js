import React, { Component } from "react";
import { connect } from "react-redux";
import Score from "../components/Score";

export class LeaderBoard extends Component {
  render() {
    const { sortedUsers } = this.props;

    return (
      <div>
        {sortedUsers.map((user) => (
          <Score key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    sortedUsers: Object.values(users).sort(
      (a, b) =>
        [b.questions.length + Object.values(b.answers).length] -
        [a.questions.length + Object.values(a.answers).length]
    ),
  };
}

export default connect(mapStateToProps)(LeaderBoard);
