import styled from 'styled-components'
import Avatar from '../../atom/Avatar/Avatar'

export const Border = styled.div`
    width: 600px;
    border: 0.5px solid lightgray;
    margin-bottom: 100px;
`

export const ImageDiv = styled.div`
    width: 598px;
    max-height: 598px;
    background-color:lightgray;
    overflow: hidden;
    background-color:white;
`

export const NameDiv = styled.div`
    height: 60px;
    width: 100%;
    position: relative;
    background-color:white;
    border-bottom:0.5px solid lightgray;
`

export const NameText = styled.span`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 70px;
    cursor:pointer;
`

export const StyledAvatar = styled(Avatar)`
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
`