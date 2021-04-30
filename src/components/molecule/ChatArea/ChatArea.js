import React from 'react'
import Send from '../../atom/Icons/Send/Send'

import {Chat,
    ChatBox,
    ChatInputs,
    StyledInput,
    StyledButton,
    Msg,
    MsgText} from './Chat.style';


const ChatArea = () => {
    return (
        <Chat>
            <ChatBox>
                <Msg><MsgText me>hello</MsgText></Msg>
                <Msg><MsgText other>hello1</MsgText></Msg>
                <Msg><MsgText me>hello2</MsgText></Msg>
                <Msg><MsgText other>hello3</MsgText></Msg>
                <Msg><MsgText other>hello4</MsgText></Msg>
            </ChatBox>
            <ChatInputs>
                <StyledInput 
                    placeholder="Message ;)"
                />
                <StyledButton type="submit"><Send/></StyledButton>
            </ChatInputs>
        </Chat>
    )
}

export default ChatArea
