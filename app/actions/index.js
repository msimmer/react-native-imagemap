import * as types from './actionTypes'
import { push } from 'react-router-redux'
import { AlertIOS } from 'react-native'

const LATITUDE_DELTA = 0.0100
const LONGITUDE_DELTA = 0.0100

// geo location
export function setLocation() {
    return (dispatch) =>
        new Promise((resolve, reject) =>
            navigator.geolocation.getCurrentPosition(
                (location) => {
                    dispatch({ location, type: types.LOCATION_SET })
                    resolve(location)
                },
                reject,
                {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0,
                }
            )
        ).catch(err => {
            AlertIOS.alert(err.message)
            dispatch({ location: { coords: {} }, type: types.LOCATION_SET })
        })
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

export function setRegion(_region) {
    let region = _region
    if (!{}.hasOwnProperty.call(_region, 'latitudeDelta') ||
        !{}.hasOwnProperty.call(_region, 'latitudeDelta')) {
        region = { ...region, latitudeDelta: LATITUDE_DELTA, longitudeDelta: LONGITUDE_DELTA }
    }
    return { region, type: types.COORDS_SET_REGION }
}
