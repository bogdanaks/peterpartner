import { SET_CURRENCY } from './types'

export const setActiveCurrency = (symbol, name) => {
    return { type: SET_CURRENCY, payload: { symbol, name } }
}
