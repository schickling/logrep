import { LOG_ADD_MESSAGE } from '../actions/log'

export default function log(state = [], action) {
  switch (action.type) {
    case LOG_ADD_MESSAGE:
      return [...state, {
        text: action.message,
        date: action.date,
      }]
    default:
      return state
  }
}
