import React from 'react'

import TextInput from '../../atom/TextInput/TextInput'
import Logo from '../../atom/Logo/Logo'
import Button from '../../atom/button/Button'
import styled from 'styled-components'
import Box from '../../atom/Box/Box'


export const LoginBox = styled(Box)`
    padding:25px 55px;
    max-width:400px;
    margin: 0 auto;
    & > *{
        margin: 10px 0;
    }
    & button{
        display: block;
        margin:15px auto;
    }
`

const LoginForm = () => {
    return (
        <LoginBox>
        <Logo>Hashgram</Logo>
        <form style={{textAlign:"left"}}>
            <TextInput 
                name="username" 
                label="enter username"
            />
            <TextInput 
                name="password" 
                type="password"
                label="enter password" 
            />
            <Button width="280px">
                    Login
            </Button>

        </form>
        <p>forgot password</p>
    </LoginBox>
    )
}

export default LoginForm
