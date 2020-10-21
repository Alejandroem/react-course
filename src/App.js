import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// Class component
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: '28' },
      { name: 'Manu', age: '29' },
      { name: 'Stephanie', age: '26' }
    ]
  }

  switchNameHandler = () => {
    console.log('was click');
  }

  render() {
    return (
      // Wrap everything into one component
      <div className="App">
        <h1> Hi, I'm a react App </h1>
        <p> This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].name}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].name}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].name}/>
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
