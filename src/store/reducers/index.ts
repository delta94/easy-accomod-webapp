import { combineReducers } from 'redux'
import token from './token'

export const reducers = combineReducers({ token })

export type ReducersType = ReturnType<typeof reducers>
