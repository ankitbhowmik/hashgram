import styled from "styled-components";
import { css } from "styled-components";

const TextInput = styled.input.attrs((type, ...props)=> ({
    type: "text",
    ...props
}) )`
    padding: 3px 10px;
    border-radius: 3px;
    border: 1px solid lightgrey;
    ${
        props=> !props.plain && css`
            min-height: 2.5em;
            width: 100%;
        `
    }
`

export default TextInput;