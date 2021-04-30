import styled, { css } from 'styled-components'

export const Chat = styled.div`
    position:relative;
    height: 80vh;
`

export const ChatBox = styled.div`
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

export const ChatInputs = styled.div`
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

export const StyledInput = styled.input.attrs(props=> ({
    type: "text"
}))`
    flex-grow: 1;
    background-color: transparent;
    border:none;
    outline:none;
`

export const StyledButton = styled.button`
    border:none;
    outline: none;
    background-color:transparent;
`

export const Msg = styled.div`
    margin-top:40px;
    border-radius: 25px;
`

export const MsgText = styled.span`
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