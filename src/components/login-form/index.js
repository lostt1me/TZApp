import { connect } from 'react-redux'
import { switchLoginRegistrationCreateActions, loginSubmitCrateActions } from '../../redux/actions/actions-types'
import { LoginForm as view } from './view'
import { reduxForm } from 'redux-form'

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
        onSubmit: () => {
            dispatch(loginSubmitCrateActions());
        }
    };
};
const ViewConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(view)

export const loginForm = reduxForm({
    form: 'login'
})(ViewConnect)
