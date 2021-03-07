import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import Footer from './components/organism/Footer/Footer';
import Main from './components/pages/Main/Main';

const App = () => {
    return (
        <div className="a-container">
            <Switch>
                <Route path="/login"><Login/></Route>
                <Route path="/signup"><Signup/></Route>
                <Route path="/acc"><Main/></Route>
                <Route path="/"><Redirect to="/login"/></Route>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;
