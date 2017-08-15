import * as types from '../actions/actionTypes'

const initialState = []

export default function marker(state = initialState, action = {}) {
    switch (action.type) {
        // case types.HISTORY_PUSH:
        //     return { ...state, ...action }
        default:
            return state
    }
}
