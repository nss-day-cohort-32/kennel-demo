import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './locations/LocationList'
import EmployeeList from './employee/EmployeeList'
import AnimalManager from "../modules/AnimalManager"
import AnimalDetail from "./animals/AnimalDetail"
import AnimalForm from "./animals/AnimalForm"


class ApplicationViews extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Doodles" },
        { id: 2, name: "Jack" },
        { id: 3, name: "Angus" },
        { id: 4, name: "Henley" },
        { id: 5, name: "Derkins" },
        { id: 6, name: "Checkers" }
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: []
    }

    deleteAnimal = (id) => {
        const newState = {};
        AnimalManager.deleteAnimal(id)
        .then(AnimalManager.getAll)
        .then(animals => {
            console.log("animals", animals);
            newState.animals = animals
        })
        .then(() => {
            this.props.history.push("/animals")
            this.setState(newState)
        })
    }

    addAnimal = (animal) =>
        AnimalManager.post(animal)
        .then(() => AnimalManager.getAll())
        .then(animals =>
            this.setState({
                animals: animals
            })
    );


    componentDidMount(){
        console.log("APPVIEWS componentDidMount");
        const newState = {};
        AnimalManager.getAll()
            .then(animals => {
                console.log("animals", animals);
                newState.animals = animals})
            .then(() => this.setState(newState))
    }

    render() {
        console.log("APPVIEWS render");
        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} {...props}
                                        deleteAnimal={this.deleteAnimal} />
                }} />

                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!animal) {
                        animal = { id: 404, name: "404", breed: "Dog not found" }
                    }

                    return <AnimalDetail animal={animal}
                        deleteAnimal={this.deleteAnimal} />
                }} />

                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees} />
                }} />

                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
            </>
        )
    }
}

export default withRouter(ApplicationViews)