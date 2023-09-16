import SearchBar from './SearchBar'
import * as React from 'react'

export default function Search() {
    const [currentLocation, setCurrentLocation] = React.useState("");

    return (
        <div className='search'>
            <input
                value={ currentLocation }
                onChange={ (e) => setCurrentLocation(e) }
                placeholder="Type a location..."
            />
            <SearchBar setCurrentLocation={ setCurrentLocation } />
        </div>
    )
}