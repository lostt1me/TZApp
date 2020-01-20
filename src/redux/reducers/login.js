import { ACTIONS } from '../actions/actions-types';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { useDispatch } from 'react-redux';
import { loginSubmitCrateActions } from '../actions/actions-types'

//const dispatch = useDispatch();
const initialState = {
    isLogin : true
}
const baseUrl = 'http://193.124.114.46:3001';
async function loginFetch(data) {
    try {
        const result = await fetch(baseUrl + '/sessions/create', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: data.Email,
                password: data.Password
            })
        });
        const token = await result.json();   
        return token; 
    } catch(err) {
        alert(err);
    }
}

export function doLogin(data) {
    return async () => {
        try {
            const token = await loginFetch(data);
            //dispatch(loginSubmitCrateActions(token))
        } catch(err) {
            alert(err);
        }
    }
}

const loginFormReducers = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SWITCH_LOGIN_REGISTRATION:
            return ({
                ...state, 
                isLogin : !state.isLogin
            });
        case ACTIONS.LOGIN_SUBMIT:
                alert(action.data);
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

