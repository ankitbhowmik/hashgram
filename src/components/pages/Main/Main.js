import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Navbar from '../../organism/Navbar/Navbar'
import Home from '../../template/Home/Home'
import Profile from '../../template/Profile/Profile';
import Message from '../../template/Message/Message';

// this peoples and posts is just to mock data from backend
//remove it when backend is completed
const peoples = [
    { image: "/DSC_0011.JPG", name: "Ankit", username: "ankit.bhowmik" },
    { image: null, name: "Rohan", username: "rohan.das" },
    { image: "/DSC_0011.JPG", name: "lens", username: "lenscart" }
];

const Main = ({ people = peoples }) => {
    const { path } = useRouteMatch();
    return (
        <>
            <Navbar />
            <br />
            <Switch>
                <Route path={`${path}/home`}>
                    <Home people={people} />
                </Route>
                <Route path={`${path}/profile/:profileId?`}>
                    <Profile />
                </Route>
                <Route path={`${path}/message`}>
                    <Message />
                </Route>
            </Switch>
        </>
    )
}

export default Main
