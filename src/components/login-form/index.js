import { connect } from 'react-redux'
import { switchLoginRegistrationCreateActions, loginSubmitCrateActions } from '../../redux/actions/actions-types'
import { LoginForm as view } from './view'
import { reduxForm } from 'redux-form'
import { validate } from './validations'

const mapStateToProps = (state) => {
    return {
        isLogin: state.loginFormReducers.isLogin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: () => {
            dispatch(switchLoginRegistrationCreateActions());
        },
        onSubmit: async (values) => {
            //validate(values);
            dispatch(loginSubmitCrateActions(values));
        }
    };
};
const ViewConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(view)

export const loginForm = reduxForm({
    form: 'login',
    validate
})(ViewConnect)
