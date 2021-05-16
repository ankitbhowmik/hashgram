import React from 'react';

import { useDispatch } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';

import Home from '../../atom/Icons/Home/Home';
import Like from '../../atom/Icons/Like/Like';
import Profile from '../../atom/Icons/Profile/Profile';
import Message from '../../atom/Icons/Message/Message';
import Notification from '../../organism/Notification/Notification';
import { toggleNotification } from '../../../redux/Notification/Notification.type';

import {
    StyledFlexBox,
    AbsoluteDiv,
    RelativeDiv
} from './NavbarLeftItems.style';

const NavbarLeftItems = () => {
    const { url } = useRouteMatch();
    const dispatch = useDispatch();
    return (
        <StyledFlexBox plain={true}>
            <Link to={`${url}/home`}>
                <Home />
            </Link>
            <Link to={`${url}/message`}>
                <Message />
            </Link>

            <RelativeDiv>
                <Like onClick={() => dispatch(toggleNotification())} />
                <AbsoluteDiv>
                    <Notification />
                </AbsoluteDiv>
            </RelativeDiv>

            <Link to={`${url}/profile`}>
                <Profile />
            </Link>
        </StyledFlexBox>
    )
}

export default NavbarLeftItems
