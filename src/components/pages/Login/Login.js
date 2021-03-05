import React from 'react'

import styled from 'styled-components'

import Grid from '../../atom/Box/Grid'
import LoginForm from '../../molecule/LoginForm/LoginForm'
import ResponsiveImg from '../../atom/ResponsiveImg/ResponsiveImg'
import Footer from '../../organism/Footer/Footer'
import Box from '../../atom/Box/Box'

const LeftDiv = styled.div`
    height: 600px;
`

const RightDiv = styled.div`
    width:372px;
`

const Login = () => {
    return (
        <div className="a-container">
            <Grid alignItems="center">
                <LeftDiv>
                    <ResponsiveImg src="http://localhost:6006/iphonex.png"/>
                </LeftDiv>
                <RightDiv>
                    <LoginForm/>
                    <br/>
                    <Box padding="15px" >
                        dont't have a account sign up <a href="#">signup</a>
                    </Box>
                </RightDiv>
            </Grid>
            <Footer/>
        </div>
    )
}

export default Login
