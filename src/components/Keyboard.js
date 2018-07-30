import React from 'react'

export default class Keyboard extends React.PureComponent {
  render() {
    return (<div>
      { 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => {
          return (<button 
            key={letter} 
            onClick={() => this.props.handleClick(letter)}
          >
            { letter }
          </button>)
        })
      }
    </div>)
  }
}