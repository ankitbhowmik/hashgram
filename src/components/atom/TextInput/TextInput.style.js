import styled from "styled-components";
import {css} from "styled-components";

export const StyledTextInput = styled.input.attrs(props=> ({
        type: props.type || "text", 
        ...props
    })
)`
    padding: 3px 10px;
    border-radius: 3px;
    border: 1px solid lightgrey;
    display: block;
    ${
        props=> !props.plain && css`
            min-height: 2.9em;
            width: 100%;
        `
    }
`