import React from 'react';
import styled from 'styled-components';

import FlexBox from '../../atom/Box/Flex';
import Home from '../../atom/Icons/Home/Home';
import Message from '../../atom/Icons/Message/Message';
import Like from '../../atom/Icons/Like/Like';
import Profile from '../../atom/Icons/Profile/Profile';
import { Link, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleNotification } from '../../../redux/Notification/Notification.type';

const StyledFlexBox = styled(FlexBox)`
    width: 190px;
    justify-content:space-evenly;
    align-self:center;
`

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
            
            <Like onClick={()=> dispatch(toggleNotification())}/> 

            <Link to={`${url}/profile`}> 
                <Profile/> 
            </Link>
        </StyledFlexBox>
    )
}

export default NavbarLeftItems
