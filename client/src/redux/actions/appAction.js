import { SET_CURRENCY, SHOW_ERROR, HIDE_ERROR } from './types'

export const showError = (message) => {
    return { type: SHOW_ERROR, payload: message }
}

export const hideError = () => {
    return { type: HIDE_ERROR }
}

export const setActiveCurrency = (symbol, name) => {
    return { type: SET_CURRENCY, payload: { symbol, name } }
}
