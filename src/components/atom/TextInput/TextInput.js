import React from 'react';
import PropsTypes from "prop-types";
import { useField } from 'formik';

import { StyledTextInput } from './TextInput.style';
import { P } from "../Text/Text";

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            {label && <label htmlFor={props.name || label}>{label}</label>}
            <StyledTextInput
                {...props}
                {...field}
            />
            {
                meta.touched
                && meta.error
                && <P color="red">{meta.error}</P>
            }
        </>
    )
}

TextInput.propTypes = {
    label: PropsTypes.string
}

export default TextInput;