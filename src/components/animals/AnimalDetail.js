import React, { Component } from "react"
import "./Animal.css"
import dog from "./DogIcon.svg"


export default class Animal extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="animal">
                <div key={this.props.animal.id} className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <img src={dog} className="icon--dog" />
                            <h4>{this.props.animal.name}</h4>
                        </div>
                        <button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true },
                                    () => this.props.deleteAnimal(this.props.animal.id)
                                )
                            }
                        }
                            disabled={this.state.saveDisabled}
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}