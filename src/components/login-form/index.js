//import React from 'react'
import { connect } from 'react-redux'
import {witchLoginRegistrationCreateActions} from '../../redux/actions/actions-types'
import view  from './view'

const mapStateToProps = (state) => {
    if (state.isLogin) {
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
            dispatch(witchLoginRegistrationCreateActions());
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(view)
