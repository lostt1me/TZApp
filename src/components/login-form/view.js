import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import loginStyle from './view.module.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const patternEmail = "([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})";

//Пробую соединить form-redux и material-ui
const renderTextField = ({ label, input, meta: { touched, invalid, error }, ...custom}) => (
    <div>
        <TextField
            label={label}
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    </div>
)

renderTextField.propTypes = {
    label: PropTypes.any,
    input: PropTypes.any,
    meta: PropTypes.any
}

export const LoginForm = ({onChange, isLogin, onSubmit, handleSubmit, submitting}) => {
     return (
         <form onSubmit={handleSubmit(onSubmit)}>
            <Card className={loginStyle.login}>
                <CardContent >
                    <Tabs
                        value={isLogin? 0 : 1} 
                        onChange={onChange}
                    >
                        <Tab label="Login" />
                        <Tab label="Registration" />
                    </Tabs>
                    <div className={loginStyle.textField}>
                        <Field name="Email" component={renderTextField} label="Email" pattern={patternEmail}/>
                        {!isLogin ? <Field name="Name" component={renderTextField} label="Name"/> : undefined}
                        <Field name="Password" component={renderTextField} type="password" label="Password" />
                    </div>
                    <div >
                        <Button variant="contained" type="submit" disabled={submitting}>Submit</Button>    
                    </div>    
                </CardContent>
            </Card>
        </form>
    );
};

LoginForm.propTypes = {
    isLogin: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func,
    submitting: PropTypes.any
};
//<TextField required label="Login" />