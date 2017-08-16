import * as types from '../actions/actionTypes'
import Local from '../Local'

const initialState = []

export default function gallery(state = initialState, action = {}) {
    let galleries
    switch (action.type) {
        case types.GALLERY_ADD:
            galleries = [...state, action.gallery]
            Local.update({ galleries })
            return galleries
        case types.GALLERIES_LOAD:
            return [...action.galleries]
        default:
            return state
    }
}
