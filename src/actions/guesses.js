import { randomWord } from '../lib/game'

export const NEW_GAME = 'NEW_GAME'
export const ADD_GUESS = 'ADD_GUESS'

export function newGame() {
  return {
    type: NEW_GAME,
    payload: randomWord()
  }
}

export function addGuess(letter) {
  return {
    type: ADD_GUESS,
    payload: letter
  }
}