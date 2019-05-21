import React, { Component } from 'react';

export default class Joke extends Component {

    tellNewJoke = () => {
        const joke = {
            id: 1005,
            type: "Sean Joke",
            setup: "What do you call a Fly with no wings?",
            punchline: "A Walk"
        }
        this.props.setNewJokeState(joke);
    }

    render() {
        return(
            <div>
                <header>Joke Type: {this.props.type}</header>
                <h2>{this.props.setup}</h2>
                <p>{this.props.punchline}</p>
                <button onClick={this.tellNewJoke}>Tell A New Joke</button>
            </div>
        )
    }
}