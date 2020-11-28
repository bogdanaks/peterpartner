import { SET_CURRENCY } from '../actions/types'

const initialState = {
    currentCurrency: {
        symbol: '£',
        name: 'GBP',
    },
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENCY:
            return { ...state, currentCurrency: action.payload }
        default:
            return state
    }
}
