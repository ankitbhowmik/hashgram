import React from 'react';
import FlexBox from '../../atom/Box/Flex';
import Logo from '../../atom/Logo/Logo';
import TextInput from '../../atom/TextInput/TextInput';
import NavbarLeftItems from '../../molecule/NavbarLeftItems/NavbarLeftItems';
import styled from 'styled-components';

const StyledDiv = styled.div`
    height:51px;
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

const Navbar = () => {
    return (
        <StyledDiv>
        <FixedDiv>
        <FlexBox style={{padding:0, margin:"0 auto"}} plain className="a-container">
            <Logo>HashGram</Logo>
            <CenterDiv>
                <TextInput style={{textAlign:"center"}} plain placeholder="search"/>
            </CenterDiv>
            <NavbarLeftItems/>
        </FlexBox>
        </FixedDiv>
        </StyledDiv>
    )
}

export default Navbar;
