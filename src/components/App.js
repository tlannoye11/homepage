import React from 'react';
import Joke from './Joke';
import Spinner from './Spinner';
import icanhazdadjoke from '../apis/icanhazdadjoke';

class App extends React.Component {
    state = { 
        joke: null,
        errorMessage: ''
    }
    componentDidMount() {
        this.getJoke();
    }
    
    getJoke = async term => {
        const response = await icanhazdadjoke.get();
        
        this.setState({joke: response.data.joke});
    }

    render() {
        if (this.state.errorMessage && !this.state.joke) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.joke) {
            return <Joke joke={this.state.joke} anotherJoke={this.getJoke} />;
        }

        return <Spinner />;
    }
};

export default App;
