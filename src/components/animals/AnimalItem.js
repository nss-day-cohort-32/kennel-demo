import React, { Component } from 'react';

class AnimalItem extends Component {

    state = {
        saveDisabled: false
    }

    handleClick = (event) => {
        console.log("click", event, this.props.animal.id);
        this.setState({
            saveDisabled: true
        })
        this.props.deleteAnimal(this.props.animal.id);
    }

    render() {
        return (
            <article>
                <h3>{this.props.animal.name}</h3>
                <button onClick={this.handleClick} disabled={this.state.saveDisabled}>Delete</button>
                {/*<button onClick={}>Details</button>*/}
            </article>
        )
    }
}

export default AnimalItem;