import React from 'react';
import PropTypes from 'prop-types';

import {useDispatch} from 'react-redux';

import FlexBox from '../../atom/Box/Flex';
import Button from '../../atom/button/Button';
import Grid from '../../atom/Box/Grid';
import Avatar from '../../atom/Avatar/Avatar';

import {RightDiv, Text, TextSmall} from './ProfileTop.style';

const ProfileTop = ({image, posts, followers, following, username}) => {
    const dispatch = useDispatch();

    return (
        <Grid col="1fr 3fr 1fr" style={{alignItems:"center", justifyItems:"center"}}>
            <Avatar 
                size="large"
                image={image || "/noPic.png"}
            />
            <RightDiv>
                <div>
                    <Text>{username}</Text> &nbsp;
                    <Button color="primary">Edit Profile</Button>
                    <Button 
                        color="gray" 
                        style={{float:"right"}}
                        onClick={ ()=> dispatch({type:"LOGOUT_REQUEST"})}
                    >
                        Logout
                    </Button>
                </div>
                <FlexBox plain style={{justifyContent: "space-between"}}>
                    <TextSmall>{posts} Posts</TextSmall>
                    <TextSmall>{followers} Followers</TextSmall>
                    <TextSmall>{following} Following</TextSmall>
                </FlexBox>
                <div>
                    <TextSmall style={{marginLeft:5}}>bio</TextSmall>
                </div>
            </RightDiv>
        </Grid>
    )
}

ProfileTop.propTypes = {
    image: PropTypes.string, 
    posts: PropTypes.number, 
    followers: PropTypes.number, 
    following: PropTypes.number
}

export default ProfileTop
