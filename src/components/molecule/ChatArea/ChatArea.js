import React from 'react'
import styled, { css } from 'styled-components'
import Send from '../../atom/Icons/Send/Send'

const Chat = styled.div`
    position:relative;
    height: 80vh;
`

const ChatBox = styled.div`
    overflow: scroll;
    position: absolute;
    top:0;
    left:0;
    right:0;
    height:calc(100% - 80px);
    display: flex;
    flex-direction: column-reverse;
    padding:40px;
`

const ChatInputs = styled.div`
    width:97%;
    border-radius: 25px;
    padding: 12px;
    border: 1px solid lightgray;
    display:flex;
    justify-content: space-between;
    position:absolute;
    bottom:10px;
    left:10px;
    right:10px;
`

const StyledInput = styled.input.attrs(props=> ({
    type: "text"
}))`
    flex-grow: 1;
    background-color: transparent;
    border:none;
    outline:none;
`

const StyledButton = styled.button`
    border:none;
    outline: none;
    background-color:transparent;
`

const Msg = styled.div`
    margin-top:40px;
    border-radius: 25px;
`

const MsgText = styled.span`
    padding:10px 25px;
    border-radius: 25px;
    ${
        prop=> prop.me && css`
            background-color: dodgerblue;
            float: right;
        `
    }
    ${
        prop=> prop.other && css`
            background-color: yellow;
        `
    }
`

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
