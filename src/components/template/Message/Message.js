import React from 'react';
import Grid from '../../atom/Box/Grid';
import styled from 'styled-components';
import People from '../../molecule/People/People';
import { P } from '../../atom/Text/Text';
import ChatArea from '../../molecule/ChatArea/ChatArea';

const StyledGrid = styled(Grid)`
    background-color:white;
    min-height:75vh;
`

const StyledDiv = styled.div`
    border: 0.5px solid lightgray;
    height: 100%;
`

const Div = styled.div`
    border-bottom: 0.5px solid lightgray;
`

const Hoverable = styled.div`
    &:hover{
        cursor: pointer;
    }
    & div:hover{
        background-color: #f1f1f1;
    }
`
const people = [
    {name: "ankit", username: "ankit.bhowmik", image:"/DSC_0011.JPG"},
    {name: "ankit", username: "ankit.bhowmik", image:"/DSC_0011.JPG"},
    {name: "ankit", username: "ankit.bhowmik", image:"/DSC_0011.JPG"},
    {name: "ankit", username: "ankit.bhowmik", image:"/DSC_0011.JPG"},
];

const Message = ()=>{
    return (
        <StyledGrid col="1fr 2fr">
            <StyledDiv>
                <Div>
                    <P style={{margin:17}} size="23px" className="center-text"> username </P>
                </Div>
                {
                    people.map(pep=>(<Hoverable>
                                <People 
                                    name={pep.name}
                                    username={pep.username}
                                    image={pep.image}
                                /> 
                            </Hoverable>))
                }    
            </StyledDiv>
            <StyledDiv>
                {/* only to be shown if a user is clicked */}
                <div style={{borderBottom:"1px solid lightgray"}}>
                    <People
                        name="ankit"
                        username="ankit.bhowmik"
                        image={"/DSC_0011.JPG"}
                    />
                </div>
                <ChatArea/>
            </StyledDiv>
        </StyledGrid>
    )
}

export default Message;