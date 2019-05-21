import React, {Component}from 'react';
import AnimalItem from './AnimalItem';


export default class AnimalList extends Component {

    render() {
        return (
            <section>
                <h2>All Animals</h2>
                {
                    this.props.animals.map((item) => {
                        return <AnimalItem key={item.id} animal={item}
                            deleteAnimal={this.props.deleteAnimal} />
                    })
                }
            </section>
        )
    }
}