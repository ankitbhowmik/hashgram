import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Main from './components/pages/Main/Main';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import Footer from './components/organism/Footer/Footer';
import ProtectedRoute from './components/molecule/utils/ProtectedRoute';

import { USER_SAGA_VERIFY_TOKEN } from './redux/user/user.type';
import SocketProvider from './helpers/socket';

const App = () => {
    const dispatch = useDispatch();

    //apply dispatch for verfiy token from backend '/user/verify-token'
    useEffect(() => {
        dispatch({ type: USER_SAGA_VERIFY_TOKEN });
    }, [dispatch]);

    return (
        <div className="a-container">
            <Switch>
                <Route path="/login"><Login /></Route>
                <Route path="/signup"><Signup /></Route>
                <ProtectedRoute path="/acc">
                    <SocketProvider>
                        <Main />
                    </SocketProvider>
                </ProtectedRoute>
                <Route path="/"><Redirect to="/login" /></Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default App;
