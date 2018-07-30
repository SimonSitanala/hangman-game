import React from 'react'
import { Link } from 'react-router-dom'

export default class WelcomePage extends React.PureComponent {
  render() {
    return (<div>
      This is some welcome text.
      
      <Link to="/hangman">Start Playing!</Link>
    </div>)
  }
}