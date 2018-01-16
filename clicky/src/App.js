import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h5>Wins:</h5>
          <h5>Losses:</h5>
        <header className="App-header">
          <img src="https://pbs.twimg.com/profile_images/913102538081148928/58i0mJwi_400x400.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The Clicky Game</h1>
        </header>
        <h1>Select a Game Card below, without choosing the same one twice. Every correct guess will log a win, if you guess the same card more than once, a loss will register and the game restarts</h1>
       
      </div>
    );
  }
}

export default App;
