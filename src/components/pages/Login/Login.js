import React from 'react'

import styled from 'styled-components'

import Grid from '../../atom/Box/Grid'
import LoginForm from '../../molecule/LoginForm/LoginForm'
import ResponsiveImg from '../../atom/ResponsiveImg/ResponsiveImg'
import Box from '../../atom/Box/Box'
import { Link } from 'react-router-dom'

const LeftDiv = styled.div`
    height: 600px;
    position: relative;
`

const AbsoluteCenterDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const RightDiv = styled.div`
    width:372px;
`

const Login = () => {
    return (
        <div className="a-container">
            <Grid alignItems="center" mt="50px">
                <LeftDiv>
                    <ResponsiveImg src="/iphonex.png" />
                    <AbsoluteCenterDiv>
                        <h4>Test Credential</h4>
                        <p>Email : ankit@hashgram.com</p>
                        <p>Password : 12345</p>
                    </AbsoluteCenterDiv>
                </LeftDiv>
                <RightDiv>
                    <LoginForm />
                    <br />
                    <Box padding="15px" >
                        dont't have a account sign up <Link to="/signup">signup</Link>
                    </Box>
                </RightDiv>
            </Grid>
        </div>
    )
}

export default Login
