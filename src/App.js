import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GamePage from './components/GamePage'
import WelcomePage from './components/WelcomePage'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Route exact path="/" component={WelcomePage} />
          <Route path="/hangman" component={GamePage} />
        </div>
      </Provider>
    );
  }
}

export default App;
 