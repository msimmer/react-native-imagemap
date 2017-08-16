import * as types from '../actions/actionTypes'

const initialState = []

export default function gallery(state = initialState, action = {}) {
    switch (action.type) {
        case types.GALLERY_ADD:
            return [...state, action.gallery]
        default:
            return state
    }
}
