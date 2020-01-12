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

export const LoginForm = ({onChange, isLogin}) => {
     return (
         <form>
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
                        <Field name="Email" component={TextField} label="Email" required pattern={patternEmail}/>
                        {!isLogin ? <Field name="Name" component={TextField} required label="Name"/> : undefined}
                        <Field name="Password" component={TextField} type="password" required label="Password" />
                    </div>
                    <div >
                        <Button variant="contained" >Submit</Button>    
                    </div>    
                </CardContent>
            </Card>
        </form>
    );
};

LoginForm.propTypes = {
    isLogin: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};
//<TextField required label="Login" />