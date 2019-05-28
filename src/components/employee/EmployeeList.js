import React, { Component } from 'react'
import AnimalItem from "../animals/AnimalItem"



class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
                <h2>All Employees</h2>
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id}>
                            {employee.name}
                            <h6 class="card-subtitle mb-2 text-muted">Caretaker For</h6>
                            <div className="animals--caretaker">
                                {
                                    this.props.animals
                                        .filter(anml => anml.employeeId === employee.id)
                                        .map(anml => <AnimalItem key={anml.id} animal={anml} {...this.props} />)
                                }
                            </div>
                        </div>

                    )
                }
                <hr />
            </section>
        )
    }
}

export default EmployeeList