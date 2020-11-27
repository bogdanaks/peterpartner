import { FETCH_CARDS, SET_CARD } from '../actions/types'

const initialState = {
    cards: [],
    activeCard: {},
}

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CARDS:
            return { ...state, cards: action.payload }
        case SET_CARD:
            return { ...state, activeCard: action.payload }
        default:
            return state
    }
}
