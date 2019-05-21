import React, { Component } from 'react';
import LocationItem from './LocationItem';


class LocationList extends Component {

    render() {
        return (
            <section className="locations">
                <h2>All Locations</h2>
                {
                    this.props.locations.map((location) => {
                        return <LocationItem key={location.id} location={location} />
                    })
                }
            </section>
        )
    }
}

export default LocationList;

