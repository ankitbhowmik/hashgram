import React from 'react';
import FlexBox from '../../atom/Box/Flex';
import Button from '../../atom/button/Button';
import styled from 'styled-components';
import Grid from '../../atom/Box/Grid';
import Avatar from '../../atom/Avatar/Avatar';
import PropTypes from 'prop-types';

const RightDiv = styled.div`
    flex-grow:1;
    width: 400px;
    &>*{
        margin-bottom:10px;
    }
`

const Text = styled.span`
    font-size:1.6em;
`

const TextSmall = styled.span`
    font-size:1em;
`

const ProfileTop = ({image, posts, followers, following}) => {
    return (
        <Grid col="1fr 3fr 1fr" style={{alignItems:"center", justifyItems:"center"}}>
            <Avatar 
                size="large"
                image={image}
            />
            <RightDiv>
                <div>
                    <Text>UserName</Text> &nbsp;
                    <Button color="primary">Edit Profile</Button>
                    <Button color="gray" style={{float:"right"}}>Logout</Button>
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
