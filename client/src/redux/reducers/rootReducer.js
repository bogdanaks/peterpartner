import { combineReducers } from 'redux'

import { appReducer } from './appReducer'
import { cardReducer } from './cardReducer'

export const rootReducer = combineReducers({
    app: appReducer,
    card: cardReducer,
})
