import React, { Component } from 'react';
import Oakland from "./components/Oakland";
import './App.css';
import members from "./oakland.json";
import Wrapper from "./components/Wrapper";


class App extends Component {

  state = {
    members
  };

  removeMember = id => {
    const members = this.state.members.filter(members => members.id !== id);
    this.setState({ members });
  }

  render() {
    return (
      <wrapper>
      
        <header className="App-header">
          <img src="https://pbs.twimg.com/profile_images/913102538081148928/58i0mJwi_400x400.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The Clicky Game</h1>
        </header>
        <h1>Select a Game Card below, without choosing the same one twice. Every correct guess will log a win, if you guess the same card more than once, a loss will register and the game restarts</h1>
        
        
        
        <title>Oakland Raiders</title>
        {this.state.members.map(members => (
          <Oakland
            removeMember={this.removeMember}
            id={members.id}
            key={members.id}
            name={members.name}
            image={members.image}
            position={members.position}
          />
          
        
        
        ))}
        
        
      
      </wrapper>
    );
  }
}

export default App;
