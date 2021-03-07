import React from 'react'
import ProfileTop from '../../molecule/ProfileTop/ProfileTop'
import PropTypes from 'prop-types';
import SinglePostImg from '../../molecule/SinglePostImg/SinglePostImg';
import Grid from '../../atom/Box/Grid';

//will need redux state
const image = "/DSC_0011.JPG";
const posts = 1;
const followers = 0;
const following = 1;

const Profile = ({imgPosts}) => {
    return (
        <div className="a-container m-auto">
            <ProfileTop
                style={{margin:"0 auto"}}
                image={image} 
                posts={posts} 
                followers={followers} 
                following={following}
            />
            <br/>
            <hr/>
            <Grid col="1fr 1fr 1fr" style={{justifyItems:"center", rowGap:20}}>
                {
                    imgPosts && imgPosts.map(({image, alt})=>(
                        <SinglePostImg image={image} al={alt}/>
                    ))
                }
            </Grid>
        </div>
    )
}

Profile.propTypes = {
    imgPosts : PropTypes.array.isRequired
}

export default Profile
