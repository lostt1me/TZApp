import { ACTIONS } from '../actions/actions-types';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const initialState = {
    isLogin : true
}

const loginFormReducers = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SWITCH_LOGIN_REGISTRATION:
            return ({
                ...state, 
                isLogin : !state.isLogin
            });
        case ACTIONS.LOGIN_SUBMIT:
            alert("submit reducer");
            return state;
        default:
            return state;
    }
}


const loginReducers = combineReducers({
    loginFormReducers,
    form: formReducer
});

export default loginReducers;

