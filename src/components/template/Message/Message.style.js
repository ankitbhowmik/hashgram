import Grid from '../../atom/Box/Grid';
import styled from 'styled-components';
// import { device } from '../../../theme/mediaQuery';

export const StyledGrid = styled(Grid)`
    background-color:white;
    min-height:75vh;
`

export const StyledDiv = styled.div`
    border: 0.5px solid lightgray;
    height: 100%;
`

export const Div = styled.div`
    border-bottom: 0.5px solid lightgray;
`

export const Hoverable = styled.div`
    &:hover{
        cursor: pointer;
    }
    & div:hover{
        background-color: #f1f1f1;
    }
`