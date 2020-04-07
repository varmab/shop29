import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'

import { catalog } from './shop/redux/reducers'

export const store=createStore(
    combineReducers({catalog}),
    applyMiddleware(thunk)
)