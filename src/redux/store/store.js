import { createStore } from 'redux'
import  loginReducers  from '../reducers/login'

export const store = createStore (loginReducers);