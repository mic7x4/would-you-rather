export function getanswered(question, userId) {
  const { optionOne, optionTwo } = question;
  return optionOne.votes.concat(optionTwo.votes).includes(userId)
}