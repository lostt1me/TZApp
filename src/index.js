import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import  { loginForm }  from './components/login-form';
import * as serviceWorker from './serviceWorker';
import { store } from './redux/store/store';

ReactDOM.render(
    <Provider store={store}>
        <div className='App-header' >
          <BrowserRouter >             
            <Route exact path="/" component={loginForm} />
          </BrowserRouter>
        </div> 
    </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();
