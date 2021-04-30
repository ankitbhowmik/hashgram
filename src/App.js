import React, {useEffect} from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import Footer from './components/organism/Footer/Footer';
import Main from './components/pages/Main/Main';
import ProtectedRoute from './components/utils/ProtectedRoute';

const App = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {userId} = useSelector(state => state.user);
  
    //apply dispatch for verfiy token from backend '/user/verify-token'
    useEffect(()=>{
        dispatch({type:"VERIFY_TOKEN"});
        if(!userId) {
            history.push("/login")
        }
    },[dispatch, userId, history]);

    return (
        <div className="a-container">
            <Switch>
                <Route path="/login"><Login/></Route>
                <Route path="/signup"><Signup/></Route>
                <ProtectedRoute path="/acc"><Main/></ProtectedRoute>
                <Route path="/"><Redirect to="/login"/></Route>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;
