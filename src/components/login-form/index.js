//import React from 'react'
import { connect } from 'react-redux'
import {switchLoginRegistrationCreateActions} from '../../redux/actions/actions-types'
import view  from './view'

const mapStateToProps = (state) => {
    if (state.switchLoginRegistration.isLogin) {
        return {
            isLogin: 0
        };
    }
    else {
        return {
            isLogin: 1
        };
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
