import React, { Component } from 'react';


class LocationItem extends Component {

    render() {
        return (
            <article>
                <h3>{this.props.location.name}</h3>
                <p>{this.props.location.address}</p>
            </article>
        )
    }
}

export default LocationItem;