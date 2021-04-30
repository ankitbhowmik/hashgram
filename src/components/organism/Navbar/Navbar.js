import React from 'react';
import FlexBox from '../../atom/Box/Flex';
import Logo from '../../atom/Logo/Logo';
// import TextInput from '../../atom/TextInput/TextInput';
import NavbarLeftItems from '../../molecule/NavbarLeftItems/NavbarLeftItems';

import {StyledDiv,
    CenterDiv,
    FixedDiv,
    } from './Navbar.style';

const Navbar = () => {
    return (
        <StyledDiv>
            <FixedDiv>
            <FlexBox style={{padding:0, margin:"0 auto"}} plain className="a-container">
                <Logo>HashGram</Logo>
                <CenterDiv>
                    {/* <TextInput style={{margin:"0 auto"}} plain placeholder="search"/> */}
                    <input style={{margin:"0 auto"}} placeholder="search"/>
                </CenterDiv>
                <NavbarLeftItems/>
            </FlexBox>
            </FixedDiv>
            
        </StyledDiv>
    )
}

export default Navbar;
