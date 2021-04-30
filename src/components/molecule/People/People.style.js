import FlexBox from '../../atom/Box/Flex';
import Avatar from '../../atom/Avatar/Avatar';
import styled from 'styled-components';

export const RelativeFlexBox = styled(FlexBox)`
    position:relative;
    justify-content: space-between;
    border:1px solid black;
    height:60px;
    align-items: center;
    padding:10px;
    max-width:400px;
    border:none;
    background-color:white;
`

export const StyledAvatar = styled(Avatar)`
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
`

export const StyledText = styled.span`
    position: absolute;
    top: 50%;
    left:75px;
    transform: translateY(-50%);
`
