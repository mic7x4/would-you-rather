import { setAuthedUser } from './authedUser'
import { retrieveQuestions } from './questions'
import { retrieveUsers } from './users'
import { getInitialData } from '../Utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(retrieveUsers(users))
        dispatch(retrieveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}

export function setActiveUser(selectedUser) {
  return (dispatch) => {
    dispatch(setAuthedUser(selectedUser))
  }
}
