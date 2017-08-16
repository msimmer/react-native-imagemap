import * as types from './actionTypes'
import { push } from 'react-router-redux'

// geo location
export function setLocation() {
    return (dispatch) =>
        navigator.geolocation.getCurrentPosition(
            (location) => dispatch({ location, type: types.LOCATION_SET }),
            (error) => {
                console.error(error)
                // dispatch({ error, type: LOCATION_SET_ERROR })
            }
        )
}

// galleries
export function addGallery(state) {
    const gallery = {
        ...state,
        coordinates: { // for MapView API; see `LatLng` schema
            latitude: state.location.coords.latitude,
            longitude: state.location.coords.longitude,
            latitudeDelta: 0.0100, // set these to application defaults? see here: https://github.com/airbnb/react-native-maps/issues/637
            longitudeDelta: 0.0100,
        }
    }
    return { gallery, type: types.GALLERY_ADD }
}

export function loadGalleries({ galleries }) {
    return { galleries, type: types.GALLERIES_LOAD }
}
