import React from 'react'
import ProfileTop from '../../molecule/ProfileTop/ProfileTop'

//will need redux state
const image = "http://localhost:6006/DSC_0011.JPG";
const posts = 1;
const followers = 0;
const following = 1;

const Profile = () => {
    return (
        <div className="a-container">
            <ProfileTop 
                style={{margin:"0 auto"}}
                image={image} 
                posts={posts} 
                followers={followers} 
                following={following}
            />
        </div>
    )
}

export default Profile
