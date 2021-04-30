import React, {useState} from 'react'

import axios from 'axios';
import {Formik, Form} from 'formik'
import * as yup from 'yup'
import {useHistory} from 'react-router-dom'

import { LoginBox } from '../LoginForm/LoginForm'
import Logo from '../../atom/Logo/Logo'
import TextInput from '../../atom/TextInput/TextInput'
import Button from '../../atom/button/Button'
import { Span, P } from '../../atom/Text/Text'

import url from '../../../constant/url'

const initialValues = {
    email:"",
    fullname:"",
    username:"",
    password:"",
}

const validationSchema = yup.object({
    email: yup.string().required("email is required"),
    fullname: yup.string().required("fullname is required"),
    username: yup.string().required("username is required"),
    password: yup.string().required("password is required"),
})

const SignupForm = () => {
    const history = useHistory();
    const [emailErr, setEmailErr] = useState({bool: false, msg:""});
    const onSubmit = async (data)=>{
        const response = await axios.post(url.signup, data); 

        if(response.data.msg === "success"){
            alert("new account has been created");
            history.push("/login");
        }else if(response.data.msg === "fail"){
            setEmailErr({bool:true, msg:response.data.error.email});
        }

    }
    return (
        <LoginBox>
            <Logo>Hashgram</Logo>
            <Span color="green">Signup to get access to hashgram</Span>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >   
                <Form>
                    <TextInput
                        label="mobile number or email"
                        name="email"
                    />
                    {emailErr.bool && <P color="red">{emailErr.msg}</P>}
                    <TextInput
                        label="fullname"
                        name="fullname"
                    />
                    <TextInput
                        label="username"
                        name="username"
                    />
                    <TextInput 
                        name="password" 
                        type="password"
                        label="enter password" 
                        placeholder="my password"
                    />
                    <Button>Signup</Button>
                </Form>
            </Formik>
        </LoginBox>
    )
}

export default SignupForm
