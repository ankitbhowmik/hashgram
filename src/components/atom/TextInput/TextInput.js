import styled from "styled-components";
import { css } from "styled-components";
import PropsTypes from "prop-types";

const StyledTextInput = styled.input.attrs(props=> ({
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

const TextInput = ({label, name, ...props}) => {
    return (
        <>
            {label && <label htmlFor={name || label}>{label}</label>}
            <StyledTextInput {...props}/>
        </>
    )
}

TextInput.propTypes = {
    label: PropsTypes.string
}

export default TextInput;