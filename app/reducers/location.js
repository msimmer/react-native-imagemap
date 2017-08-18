import * as types from '../actions/actionTypes'

const initialState = { region: {foo: 1} }

export default function location(state = initialState, action = {}) {
    switch (action.type) {
        case types.LOCATION_SET:
            return { ...state, ...action }
        case types.COORDS_SET_REGION:
            return { ...state, region: { ...state.region, ...action.region } }
        default:
            return state
    }
}
