import { combineReducers } from 'redux'
import token from './token'
import auth from './auth'

export const reducers = combineReducers({ token, auth })

export type ReducersType = ReturnType<typeof reducers>
