import { SHOW_ALERT, HIDE_ALERT } from '../actions/types'

const initialState = {
    alert: false,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return { ...state, alert: true }
        case HIDE_ALERT:
            return { ...state, alert: false }
        default:
            return state
    }
}
