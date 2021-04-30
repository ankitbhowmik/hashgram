import React from 'react';

import People from '../../molecule/People/People';
import { P } from '../../atom/Text/Text';
import ChatArea from '../../molecule/ChatArea/ChatArea';

import {StyledGrid,
    StyledDiv,
    Div,
    Hoverable} from './Message.style';

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
                    people.map((pep, index)=>(<Hoverable key={index}>
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