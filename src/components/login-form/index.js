import { connect } from 'react-redux'
import { switchLoginRegistrationCreateActions} from '../../redux/actions/actions-types'
import { LoginForm as view } from './view'

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
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(view)
