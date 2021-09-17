import { showLoading, hideLoading } from 'react-redux-loading'
import { _saveQuestionAnswer, _saveQuestion } from '../Utils/_DATA'

export const RETRIEVE_QUESTIONS = 'RETRIEVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const CREATE_QUESTION = "CREATE_QUESTION"

export function retrieveQuestions(questions) {
  return {
    type: RETRIEVE_QUESTIONS,
    questions
  }
}

function saveAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer,
  }
}

export const handleSaveAnswer = (details) => async (dispatch) => {
  dispatch(showLoading())
  try {
    await _saveQuestionAnswer(details)
    dispatch(saveAnswer(details))
    return dispatch(hideLoading())
  } catch (error) {
    alert('An error occured trying to save your answer. Try again!', error)
  }
}

function createQuestion(question) {
  return {
    type: CREATE_QUESTION,
    question
  }
}

export const handleCreateQuestion = (question) => async (dispatch, getState) => {
  dispatch(showLoading())
  const { authedUser } = getState();
  try {
    const data = await _saveQuestion({ ...question, author: authedUser })
    dispatch(createQuestion(data))
    return dispatch(hideLoading())
  } catch (error) {
    alert("An error occured trying to save your question. Try again!", error)
  }
}
