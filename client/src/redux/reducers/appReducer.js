import { SET_CURRENCY, SHOW_ERROR, HIDE_ERROR } from '../actions/types'

const initialState = {
    currentCurrency: {
        symbol: '£',
        name: 'GBP',
    },
    error: {
        message: '',
    },
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENCY:
            return { ...state, currentCurrency: action.payload }
        case SHOW_ERROR:
            return { ...state, error: { message: action.payload } }
        case HIDE_ERROR:
            return { ...state, error: { message: '' } }
        default:
            return state
    }
}
