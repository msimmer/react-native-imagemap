import * as types from './actionTypes'
import { push } from 'react-router-redux'

// history
export function navigate(_route) {
    if (typeof _route != 'string') {
        throw new Error(`Route supplied to \`navigate\` must be a string, \`${typeof _route}\` given`)
    }
    return (dispatch) => {
        const route = `/${_route.replace(/^\//, '')}`
        dispatch(push(route))
        return { route, type: types.HISTORY_PUSH }
    }
}

// geo location
export function setLocation(location) {
    return (dispatch) =>
        navigator.geolocation.getCurrentPosition(
            (location) => dispatch({ location, type: types.LOCATION_SET }),
            (err) => {
                console.error(err)
                return {}
            }
        )
}

export function getLocation() {
}


// photos
// markers
// galleries
