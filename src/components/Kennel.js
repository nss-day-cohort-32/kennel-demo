import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import Footer from "./footer/Footer"

import "./kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Kennel