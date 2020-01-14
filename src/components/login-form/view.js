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
const renderTextField = ({ input,label, type }) => (
    <TextField label={label}
        {...input}
        required
        type={type}
  />
)
renderTextField.propTypes = {
    label: PropTypes.string,
    input: PropTypes.any,
    type: PropTypes.string
}

const renderTabsPanel = ({value, onChange}) => (
    <Tabs
        value={value} 
        onChange={onChange}
    >
        <Tab label="Login" />
        <Tab label="Registration" />
    </Tabs>
)
renderTabsPanel.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func    
}
export const LoginForm = ({onChange, isLogin, onSubmit}) => {
     return (
         <form onSubmit={onSubmit}>
            <Card className={loginStyle.login}>
                <CardContent >
                    <Field name="TabsPanel" component={renderTabsPanel} onChange={onChange} value={isLogin? 0 : 1}/>
                    <div className={loginStyle.textField}>
                        <Field name="Email" component={renderTextField} label="Email" pattern={patternEmail}/>
                        {!isLogin ? <Field name="Name" component={renderTextField} label="Name"/> : undefined}
                        <Field name="Password" component={renderTextField} type="password" label="Password" />
                    </div>
                    <div >
                        <Button variant="contained" type="submit">Submit</Button>    
                    </div>    
                </CardContent>
            </Card>
        </form>
    );
};

LoginForm.propTypes = {
    isLogin: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};
//<TextField required label="Login" />