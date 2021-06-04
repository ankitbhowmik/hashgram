import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Main from './components/pages/Main/Main';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import Footer from './components/organism/Footer/Footer';
import ProtectedRoute from './components/molecule/utils/ProtectedRoute';

import { USER_SAGA_VERIFY_TOKEN } from './redux/user/user.type';

const App = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { userId } = useSelector(state => state.user);

    //apply dispatch for verfiy token from backend '/user/verify-token'
    useEffect(() => {
        dispatch({ type: USER_SAGA_VERIFY_TOKEN });
        if (!userId) {
            history.push("/login")
        }
    }, [dispatch, userId, history]);

    return (
        <div className="a-container">
            <Switch>
                <Route path="/login"><Login /></Route>
                <Route path="/signup"><Signup /></Route>
                <ProtectedRoute path="/acc"><Main /></ProtectedRoute>
                <Route path="/"><Redirect to="/login" /></Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default App;
