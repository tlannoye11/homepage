// Import the React and ReactDOM libraries.
import React from 'react';
import ReactDOM from 'react-dom';
import JokeApp from './components/JokeApp';

// Take the completed Dad Joke app component and render it on the screen.
ReactDOM.render(<JokeApp />, document.querySelector('.joke-modal'));
