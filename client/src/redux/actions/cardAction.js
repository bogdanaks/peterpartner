import { FETCH_CARDS, SET_CARD } from './types'
import api from '../../utils/api'

import { showError } from './appAction'

import { store } from '../store'

export const fetchCards = (limit) => {
    return async (dispatch) => {
        try {
            const activeCard = store.getState().card.activeCard
            const res = await api.get(`api/card${limit !== undefined ? `?&limit=${limit}` : ''}`)
            dispatch({ type: FETCH_CARDS, payload: res.data })
            dispatch({
                type: SET_CARD,
                payload: Object.keys(activeCard).length !== 0 ? activeCard : res.data[0],
            })
        } catch (error) {
            if (error.response.status !== 404) {
                dispatch(showError(error.response.data.message))
            } else {
                dispatch(showError('Страница не найдена!'))
            }
        }
    }
}

export const setActiveCard = (card) => {
    return { type: SET_CARD, payload: card }
}
