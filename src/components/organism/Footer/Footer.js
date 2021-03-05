import React from 'react';
import styled from 'styled-components';

const CenterText = styled.p`
    text-align:center;
    color:gray;
    font-size:1rem;
    border-top:1px solid gray;
    padding:16px;
`

const Footer = () => {
    return (
        <CenterText>all rights reserved &copy; Ankit Bhowmik 2021 project </CenterText>
    )
}

export default Footer
