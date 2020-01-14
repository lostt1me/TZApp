export const ACTIONS = {
    SWITCH_LOGIN_REGISTRATION : 'SWITCH-LOGIN-REGISTRATION',
    LOGIN_SUBMIT : 'LOGIN-SUBMIT'
};


/*
* action creators
*/

export const switchLoginRegistrationCreateActions = () => {
    return ({
        type : ACTIONS.SWITCH_LOGIN_REGISTRATION
    });
}

export const loginSubmitCrateActions = () => {
    return ({
        type : ACTIONS.LOGIN_SUBMIT
    });
}