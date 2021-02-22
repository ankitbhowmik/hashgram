import styled from "styled-components";

export const H1 = styled.h1`
    font-size: ${props => props.size || 16};
    color: ${props => props.color || "black"};
`

export const P = styled.p`
    font-size: ${props => props.size || 16};
    color: ${props => props.color || "black"};
`
export const Span = styled.span`
    font-size: ${props => props.size};
    color: ${props => props.color || "black"};
`