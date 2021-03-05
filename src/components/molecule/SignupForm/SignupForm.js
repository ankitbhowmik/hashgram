import React from 'react'
import { LoginBox } from '../LoginForm/LoginForm'
import Logo from '../../atom/Logo/Logo'
import TextInput from '../../atom/TextInput/TextInput'
import Button from '../../atom/button/Button'
import { Span } from '../../atom/Text/Text'

const SignupForm = () => {
    return (
        <LoginBox>
            <Logo>Hashgram</Logo>
            <Span color="green">Signup to get access to hashgram</Span>
            <form>
                <TextInput
                    label="mobile number or email"
                    name="email"
                />
                <TextInput
                    label="fullname"
                    name="fullname"
                />
                <TextInput
                    label="username"
                    name="username"
                />
                <TextInput
                    label="password"
                    type="password"
                />
                <Button>Signup</Button>
            </form>
        </LoginBox>
    )
}

export default SignupForm
