import React from 'react'
import { randomWord, showGuess, wrongGuessCount, wrongGuessLimit, gameFinished, isWinner } from '../lib/game'
import { setRandomWord } from '../actions/random-word'
import { connect } from 'react-redux'
import Keyboard from './Keyboard'
import { addGuess, newGame } from '../actions/guesses'

class GamePage extends React.PureComponent {
  componentDidMount() {
    // dispatch action to set random word
    const word = randomWord()
    this.props.setRandomWord(word)
  }
  
  handleClickLetter = (guess) => {
    this.props.addGuess(guess)
  }
  
  render() {   
    console.log('calling render function', this.props)
    if (!this.props.word) return 'Loading...'
     
    return (<div>
      <h1>Game page</h1>
      
      { wrongGuessLimit(this.props.word, this.props.guesses) && 'You have failed' }
      
      { isWinner(this.props.word, this.props.guesses) && 'Congrats' }
      
      { !gameFinished(this.props.word, this.props.guesses) && <div>
        Word: { this.props.word && showGuess(this.props.word, this.props.guesses) }
        
        <Keyboard handleClick={this.handleClickLetter} />
        
        Incorrect guesses: { wrongGuessCount(this.props.word, this.props.guesses) }
      </div> }
      
      <button onClick={this.props.newGame}>New Game</button>
    </div>)
  }
}

const mapStateToProps = (state) => {
  console.log('calling mapstatetoprops', state)
  return {
    word: state.randomWord,
    guesses: state.guesses
  }
}

const mapDispatchToProps = {
  setRandomWord,
  addGuess,
  newGame
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)