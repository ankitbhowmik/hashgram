import styled from "styled-components";

export const TextArea = styled.textarea`
    width: 100%;
    min-height: 100px;
    font-size: 1em;
    padding: 10px;
`

export const InputFile = styled.input`
    border: 1px solid lightgray;
    padding: 10px 5px;
    width: 100%;
`

export const CloseIcon = styled.span`
    font-size: 1.8em;
    font-weight:bold;
    float: right;
    cursor: pointer; 
`

export const ImagePost = styled.img`
    height: 100%;
    width:auto;
    object-fit: cover;
`