import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import  loginReducers  from '../reducers/login'

export const store = createStore(
    loginReducers,
    applyMiddleware(thunk)
    );