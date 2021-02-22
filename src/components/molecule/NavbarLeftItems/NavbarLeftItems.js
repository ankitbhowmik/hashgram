import React from 'react';
import styled from 'styled-components';

import FlexBox from '../../atom/Box/Flex';
import Home from '../../atom/Icons/Home/Home';
import Message from '../../atom/Icons/Message/Message';
import Like from '../../atom/Icons/Like/Like';
import Profile from '../../atom/Icons/Profile/Profile';

const StyledFlexBox = styled(FlexBox)`
    width: 190px;
    justify-content:space-evenly;
    align-self:center;
`

const NavbarLeftItems = () => {
    return (
        <StyledFlexBox plain={true}>
            <Home/>
            <Message/>
            <Like/>
            <Profile/>
        </StyledFlexBox>
    )
}

export default NavbarLeftItems
