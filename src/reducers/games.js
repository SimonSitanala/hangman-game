import { ADD_GUESS } from '../actions/guesses'

const initialState = [
  {
    guesses: ['a', 'b', 'c'], 
    word: 'something'
  },
  {
    guesses: [],
    word: 'between'
  }
]


export default function (state = initialState, action) {
  switch(action.type) {
    case ADD_GUESS: 
      const currentGame = state[state.length - 1]
      const updatedGame = {
        ...currentGame,
        guesses: currentGame.guesses.concat(action.payload)
      }
      return state.map((game, index) => {
        if (index === state.length - 1) return updatedGame
        return game
      })
      
    default:
      return state
  }
}