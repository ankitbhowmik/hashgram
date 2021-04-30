import styled from 'styled-components'
import Box from '../../atom/Box/Box'

export const StyledBox = styled(Box)`
    position: relative;
    border-radius: 5px;
    padding: 30px;
    display:${props => props.show ? "block" : "none"};
    z-index:10;
`

export const Triangle = styled.div`
    height: 14px;
    width: 14px;
    background-color: white;
    border-left: 1px solid lightgrey;
    border-bottom: 1px solid lightgray;
    transform: rotate(135deg);
    position:absolute;
    right: 80px;
    top: -8px;
`
