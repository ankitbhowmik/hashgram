import styled, { css } from 'styled-components'


export const PostInfo = styled.div`
    background: white;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const InputComment = styled.input`
    width: 80%;
    border: none;
    height: 40px;
    padding: 10px;
    outline:none;
`

export const ButtonComment = styled.button`
    width: 20%;
    height: 40px;
    border: none;
    background-color: transparent;
    color: #DC143C;
    cursor: pointer;
    font-weight:bolder;
    ${props=> props.disabled && css` opacity:0.3`}
`

export const CommentContainer = styled.div`
    background-color:white;
    border-top: 0.5px solid #ddd;
    padding: 4px;
`