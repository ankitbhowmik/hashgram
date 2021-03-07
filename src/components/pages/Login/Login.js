import React from 'react'

import styled from 'styled-components'

import Grid from '../../atom/Box/Grid'
import LoginForm from '../../molecule/LoginForm/LoginForm'
import ResponsiveImg from '../../atom/ResponsiveImg/ResponsiveImg'
import Box from '../../atom/Box/Box'
import { Link } from 'react-router-dom'

const LeftDiv = styled.div`
    height: 600px;
`

const RightDiv = styled.div`
    width:372px;
`

const Login = () => {
    return (
        <div className="a-container">
            <Grid alignItems="center" mt="50px">
                <LeftDiv>
                    <ResponsiveImg src="/iphonex.png"/>
                </LeftDiv>
                <RightDiv>
                    <LoginForm/>
                    <br/>
                    <Box padding="15px" >
                        dont't have a account sign up <Link to="/signup">signup</Link>
                    </Box>
                </RightDiv>
            </Grid>
        </div>
    )
}

export default Login
