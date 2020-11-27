import { FETCH_CARDS, SET_CARD } from './types'
import api from '../../utils/api'

export const fetchCards = (limit) => {
    return async (dispatch) => {
        try {
            const res = await api.get(`api/card${limit !== undefined ? `?&limit=${limit}` : ''}`)
            dispatch({ type: FETCH_CARDS, payload: res.data })
            dispatch({ type: SET_CARD, payload: res.data[0] })
        } catch (error) {
            console.error(error)
        }
    }
}

export const setActiveCard = (card) => {
    return (dispatch) => {
        dispatch({ type: SET_CARD, payload: card })
    }
}
