import React from 'react';
import FlexBox from '../../atom/Box/Flex';
import Avatar from '../../atom/Avatar/Avatar';
import PropTypes from 'prop-types';
import Profile from '../../atom/Icons/Profile/Profile';
import styled from 'styled-components';
import Button from '../../atom/button/Button';
import Rectangle from '../../atom/Skeleton/Rectangle';
import { P } from '../../atom/Text/Text';

const RelativeFlexBox = styled(FlexBox)`
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

const StyledAvatar = styled(Avatar)`
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
`

const StyledText = styled.span`
    position: absolute;
    top: 50%;
    left:75px;
    transform: translateY(-50%);
`

const LoadingPeople = ()=> (
    <RelativeFlexBox>
        <div>
            <StyledAvatar size="small"/>
            <StyledText>
                <Rectangle width="60px" height="12px" gap="10px"/>
                <Rectangle width="100px" height="12px"/>
            </StyledText>
        </div>
        <div>
            <Button disabled="true">Follow</Button>
        </div>
    </RelativeFlexBox>
)

const People = ({loading, image, name, username, button, style}) => {
    if(loading){
        return (<LoadingPeople/>)
    }

    return (
        <RelativeFlexBox style={style} plain direction="row">
            <div>
                {
                    image 
                    ? <StyledAvatar size="small" image={image}/>
                    : <Profile style={{transform: "scale(2.4)", transformOrigin:"0"}}/>
                }   
                <StyledText>
                    {name}
                    <P color="gray" m="0">{username}</P>
                </StyledText>
            </div>
            <div>
               { button && <Button {...button}>{button.name}</Button> }
            </div>  
        </RelativeFlexBox>
    )
}

People.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    username: PropTypes.string,
    button: PropTypes.object,
}

People.defaultProps = {
    name: "Name",
    username: "Username"
}

export default People
