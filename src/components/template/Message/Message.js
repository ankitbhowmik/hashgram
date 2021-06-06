import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import People from '../../molecule/People/People';
import { P } from '../../atom/Text/Text';
import ChatArea from '../../molecule/ChatArea/ChatArea';

import {
    StyledGrid,
    StyledDiv,
    Div,
    Hoverable
} from './Message.style';
import { CHAT_SAGA_GET_MESSAGES } from '../../../redux/chat/chat.type';

const Message = () => {
    const { chats, chatId } = useSelector(state => state.chat);
    const { userFullName, userEmail, userProfileImage } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const getChat = (chatId) => {
        dispatch({ type: CHAT_SAGA_GET_MESSAGES, chatId })
    };

    return (
        <StyledGrid col="1fr 2fr">
            <StyledDiv>
                <Div>
                    <P style={{ margin: 17 }} size="23px" className="center-text"> {userFullName} </P>
                </Div>
                {
                    chats.map((pep, index) => (<Hoverable key={index}>
                        <People
                            name={pep.fullname}
                            username={pep.email}
                            image={pep.profileImage}
                            onClick={() => getChat(pep.chatId)}
                        />
                    </Hoverable>))
                }
            </StyledDiv>
            <StyledDiv>
                {/* only to be shown if a user is clicked */}
                <div style={{ borderBottom: "1px solid lightgray" }}>
                    <People
                        name={userFullName}
                        username={userEmail}
                        image={userProfileImage}
                    />
                </div>
                <ChatArea />
            </StyledDiv>
        </StyledGrid>
    )
}

export default Message;