import React from 'react';
import FlexBox from '../../atom/Box/Flex';
import Logo from '../../atom/Logo/Logo';
import TextInput from '../../atom/TextInput/TextInput';
import NavbarLeftItems from '../../molecule/NavbarLeftItems/NavbarLeftItems';
import styled from 'styled-components';
import Notification from '../Notification/Notification';

const StyledDiv = styled.div`
    height:51px;
    position:relative;
    user-select:none;
`

const CenterDiv = styled.div`
    flex-grow: 1;
    text-align: center;
    align-self: center;
`

const FixedDiv = styled.div`
    background-color:white;
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:1;
`

const AbsoluteNotification = styled.div`
    position:absolute;
    top: 64px;
    right: -16px;
`

const Navbar = () => {
    return (
        <StyledDiv>
            <FixedDiv>
            <FlexBox style={{padding:0, margin:"0 auto"}} plain className="a-container">
                <Logo>HashGram</Logo>
                <CenterDiv>
                    <TextInput style={{margin:"0 auto"}} plain placeholder="search"/>
                </CenterDiv>
                <NavbarLeftItems/>
            </FlexBox>
            </FixedDiv>
            <AbsoluteNotification>
                <Notification/>
            </AbsoluteNotification>
        </StyledDiv>
    )
}

export default Navbar;
