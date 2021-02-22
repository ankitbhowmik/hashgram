import styled from "styled-components";

const Rectangle = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: lightgray;
    margin-bottom: ${props => props.gap};
`

export default Rectangle;