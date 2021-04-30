import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {Formik, Form} from 'formik'
import * as yup from 'yup'

import TextInput from '../../atom/TextInput/TextInput'
import Logo from '../../atom/Logo/Logo'
import Button from '../../atom/button/Button'
import styled from 'styled-components'
import Box from '../../atom/Box/Box'
import Alert from '../../atom/Alert/Alert'

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

const initialValues = {
    email:"",
    password:"",
}

const validationSchema = yup.object({
    email: yup.string().required("email is required"),
    password: yup.string().required("password is required"),
})

//main component
const LoginForm = () => {
    const dispatch = useDispatch();
    const {error, userId} = useSelector( state => state.user );

    const onSubmit = (data)=>{
        dispatch({type: "FETCH_USER", data});
    }

    if(userId) return <Redirect to="/acc/home"/>

    return (
        <LoginBox>
        <Logo>Hashgram</Logo>
        { error && <Alert variant="danger">{error}</Alert> }
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form style={{textAlign:"left"}}>
                <TextInput 
                    name="email" 
                    label="enter email"
                    placeholder="example@you.com"
                />
                <TextInput 
                    name="password" 
                    type="password"
                    label="enter password" 
                    placeholder="my password"
                />
                <Button
                    type="submit"
                    width="260px">
                    Login
                </Button>
            </Form>
        </Formik>
        
        <p>forgot password</p>
    </LoginBox>
    )
}

export default LoginForm
