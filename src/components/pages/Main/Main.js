import React, { useContext, useEffect } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Navbar from '../../organism/Navbar/Navbar'
import Home from '../../template/Home/Home'
import Profile from '../../template/Profile/Profile';
import Message from '../../template/Message/Message';
import { CHAT_SAGA_GET_CHATS, CHAT_SAGA_GET_SOCKET_MESSAGE } from '../../../redux/chat/chat.type';
import { useDispatch, useSelector } from 'react-redux';
import { SocketContext } from '../../../helpers/socket';

// this peoples and posts is just to mock data from backend
//remove it when backend is completed
const peoples = [
    { image: "/DSC_0011.JPG", name: "Ankit", username: "ankit.bhowmik" },
    { image: null, name: "Rohan", username: "rohan.das" },
    { image: "/DSC_0011.JPG", name: "lens", username: "lenscart" }
];

const Main = ({ people = peoples }) => {
    const { userId } = useSelector(state => state.user);
    const { path } = useRouteMatch();
    const dispatch = useDispatch();
    const socket = useContext(SocketContext);

    useEffect(() => {
        if (socket) {
            socket.emit("add-user", userId)
            socket.on("send-message", ({ chatId, message }) => {
                dispatch({ type: CHAT_SAGA_GET_SOCKET_MESSAGE, chatId, message })
            })
        }

    }, [socket])

    useEffect(() => {
        dispatch({ type: CHAT_SAGA_GET_CHATS });
    }, [dispatch])

    return (
        <>
            <Navbar />
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
