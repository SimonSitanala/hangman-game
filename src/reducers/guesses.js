import { ADD_GUESS, NEW_GAME } from '../actions/guesses'

const initialState = []

export default function (state = initialState, action) {
  // start with an empty array
  
  switch(action.type) {
    case ADD_GUESS:
      // when ADD_GUESS happens, add letter to array
      return [...state, action.payload]
      
    case NEW_GAME:
      return []
    
    default: 
      return state
  }
}