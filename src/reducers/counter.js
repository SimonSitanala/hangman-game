import { SET_WORD } from '../actions/random-word'

export default function counter(state = 0, action) {
  switch(action.type) {
    case SET_WORD:
      return state + 1
      
    default:
      return state
  }
}