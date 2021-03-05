import React from 'react'
import SignupForm from '../../molecule/SignupForm/SignupForm'
import Box from '../../atom/Box/Box'

const Signup = () => {
    return (
        <>
           <SignupForm/> 
           <br/>
           <Box padding="15px" width="400px" style={{margin:"0 auto"}}>
               have an account <a href="#">click here </a>
           </Box>
        </>
    )
}

export default Signup
