import {randomWord} from '../lib/game'
import { SET_WORD } from '../actions/random-word'
import { NEW_GAME } from '../actions/guesses'

const initialState = null

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_WORD:
      return action.payload
      
    case NEW_GAME:
      return action.payload
    
    default:
      return state
  }
}