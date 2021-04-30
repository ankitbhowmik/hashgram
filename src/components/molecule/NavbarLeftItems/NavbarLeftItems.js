import React from 'react';

import { Link, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from '../../atom/Icons/Home/Home';
import Message from '../../atom/Icons/Message/Message';
import Like from '../../atom/Icons/Like/Like';
import Profile from '../../atom/Icons/Profile/Profile';
import { toggleNotification } from '../../../redux/Notification/Notification.type';

import Notification from '../../organism/Notification/Notification';

import {StyledFlexBox,
    AbsoluteNotification,
    RelativeDiv} from './NavbarLeftItems.style';

const NavbarLeftItems = () => {
    const {url} = useRouteMatch();
    const dispatch = useDispatch();
    return (
        <StyledFlexBox plain={true}>
            <Link to={`${url}/home`}> 
                <Home/> 
            </Link>
            <Link to={`${url}/message`}> 
                <Message/> 
            </Link>
            
            <RelativeDiv>
                <Like onClick={()=> dispatch(toggleNotification())}/> 
                <AbsoluteNotification>
                    <Notification/>
                </AbsoluteNotification>
            </RelativeDiv>

            <Link to={`${url}/profile`}> 
                <Profile/> 
            </Link>
        </StyledFlexBox>
    )
}

export default NavbarLeftItems
