import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { USER_SAGA_GET_SEARCHS } from '../../../redux/user/user.type';
import FlexBox from '../../atom/Box/Flex';
import Logo from '../../atom/Logo/Logo';
import NavbarLeftItems from '../../molecule/NavbarLeftItems/NavbarLeftItems';
import Search from '../Search/Search';

import {
    StyledDiv,
    CenterDiv,
    FixedDiv,
} from './Navbar.style';

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);
    const dispatch = useDispatch();
    const searchUser = (e) => dispatch({ type: USER_SAGA_GET_SEARCHS, searchText: e.target.value });

    return (
        <StyledDiv>
            <FixedDiv>
                <FlexBox style={{ padding: 0, margin: "0 auto" }} plain className="a-container">
                    <Logo>HashGram</Logo>
                    <CenterDiv>
                        <input
                            style={{ margin: "0 auto" }}
                            placeholder="search"
                            onChange={searchUser}
                            onFocus={() => setShowSearch(true)}
                            onBlur={() => setTimeout(() => setShowSearch(false), 100)}
                        />
                    </CenterDiv>
                    <NavbarLeftItems />
                </FlexBox>
                <Search show={showSearch} />
            </FixedDiv>
        </StyledDiv>
    )
}

export default Navbar;
