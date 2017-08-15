import * as types from '../actions/actionTypes'

const initialState = {}

export default function location(state = initialState, action = {}) {
    switch (action.type) {
        case types.LOCATION_SET:
        case types.LOCATION_GET:
            return { ...state, ...action }
        default:
            return state
    }
}
