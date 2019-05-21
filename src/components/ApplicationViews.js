import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './locations/LocationList'
import EmployeeList from './employee/EmployeeList'
import AnimalManager from "../modules/AnimalManager"


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
        .then(() => this.setState(newState))
    }


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
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals}
                                        deleteAnimal={this.deleteAnimal} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
            </>
        )
    }
}

export default ApplicationViews