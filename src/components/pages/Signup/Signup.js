import React from 'react'
import SignupForm from '../../molecule/SignupForm/SignupForm'
import Box from '../../atom/Box/Box'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <>
           <br/> <br/>
           <SignupForm/> 
           <br/>
           <Box padding="15px" width="400px" style={{margin:"0 auto"}}>
               have an account <Link to="/login">click here </Link>
           </Box>
        </>
    )
}

export default Signup
