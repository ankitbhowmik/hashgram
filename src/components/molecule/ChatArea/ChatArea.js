import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CHAT_SAGA_SEND_MESSAGE } from '../../../redux/chat/chat.type';

import Send from '../../atom/Icons/Send/Send'
import {
    Chat,
    ChatBox,
    ChatInputs,
    StyledInput,
    StyledButton,
    Msg,
    MsgText
} from './Chat.style';


const ChatArea = () => {
    const { messages } = useSelector(state => state.chat);
    const { userId } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [messageText, setMessageText] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();
        dispatch({ type: CHAT_SAGA_SEND_MESSAGE, messageText });
        setMessageText("");
    };

    return (
        <Chat>
            <ChatBox>
                {
                    messages.map(msg => (
                        <Msg key={msg._id}><MsgText own={msg.from === userId}>{msg.msg}</MsgText></Msg>
                    ))
                }
            </ChatBox>
            <form onSubmit={sendMessage}>
                <ChatInputs>
                    <StyledInput
                        placeholder="Message ;)"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                    />
                    <StyledButton type="submit"><Send /></StyledButton>
                </ChatInputs>
            </form>
        </Chat>
    )
}

export default ChatArea
