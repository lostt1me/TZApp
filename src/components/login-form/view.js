import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import loginStyle from './view.module.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const patternEmail = "([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})";

export const LoginForm = ({onChange, isLogin}) => {
     return (
        <Card className={loginStyle.login}>
            <CardContent >
                <Tabs
                    value={isLogin? 0 : 1} 
                    onChange={onChange}
                >
                    <Tab label="Login" />
                    <Tab label="Registration" />
                </Tabs>
                <div>
                    <TextField required label="Login" />
                    <TextField type="password" required label="Password" />
                    {!isLogin ? <TextField required label="Email" pattern={patternEmail} /> : undefined}
                </div>
                <div >
                    <Button variant="contained" >Submit</Button>    
                </div>    
            </CardContent>
        </Card>
    );
};

LoginForm.propTypes = {
    isLogin: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};