import styled, { css } from "styled-components";
import Box from "./Box";

const FlexBox = styled(Box)`
    display:flex;
    flex-direction: ${props => props.direction || "row"};
    text-align: ${props => props.align || "left"};
    ${props => props.plain && css`
            border: none;
            background-color: none;
        `
    }
    justify-content: ${props => props.justifyContent || "flex-start"};
    align-items: ${props => props.alignItems || "stretch"}
`

export default FlexBox;