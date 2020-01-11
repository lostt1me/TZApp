import { ACTIONS } from '../actions/actions-types';
import { combineReducers } from 'redux';
const initialState = {
    isLogin : true
}

const switchLoginRegistration = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SWITCH_LOGIN_REGISTRATION:
            return ({
                ...state, 
                isLogin : !state.isLogin
            });
        default:
            return state;
    }
}

const loginReducers = combineReducers({
    switchLoginRegistration
});

export default loginReducers;

