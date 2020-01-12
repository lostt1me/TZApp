import { connect } from 'react-redux'
import { switchLoginRegistrationCreateActions} from '../../redux/actions/actions-types'
import { LoginForm as view } from './view'
import { reduxForm } from 'redux-form'

const mapStateToProps = (state) => {
    return {
        isLogin: state.switchLoginRegistration.isLogin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: () => {
            dispatch(switchLoginRegistrationCreateActions());
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
