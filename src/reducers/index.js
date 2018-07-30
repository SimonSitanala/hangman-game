import { combineReducers } from 'redux'
import randomWord from './random-word'
import guesses from './guesses'
import games from './games'

export default combineReducers({
  randomWord,
  guesses: guesses,
  games
})