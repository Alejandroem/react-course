import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      // Wrap everything into one component
      <div className="App">
        <h1> Hi, I'm a react App </h1>
        <p> This is really working!</p>
        <Person />
      </div>
    );
    /*
    return React.createElement(
        'div',
        {
            className: 'App'
        },
        React.createElement(
            'h1',
            null,
            'I\'m a react App!!!'
        )
    )*/
  }
}

export default App;
