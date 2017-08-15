import * as types from '../actions/actionTypes'

const initialState = { route: '/' }

export default function history(state = initialState, action = {}) {
    switch (action.type) {
        case types.HISTORY_PUSH:
            return { ...state, ...action }
        default:
            return state
    }
}
