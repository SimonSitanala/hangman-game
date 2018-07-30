export const SET_WORD = 'SET_WORD'

export function setRandomWord(word) {
  return {
    type: SET_WORD,
    payload: word
  }
}