import React, {useState} from 'react'

import {useSelector} from 'react-redux'

import ProfileTop from '../../molecule/ProfileTop/ProfileTop'
import PropTypes from 'prop-types';
import SinglePostImg from '../../molecule/SinglePostImg/SinglePostImg'
import Grid from '../../atom/Box/Grid';
import Add from '../../atom/Icons/Add/Add';
import AddPostModal from '../../organism/AddPostModal/AddPostModal';

//will need redux state
const posts = 1;
const followers = 0;
const following = 1;

const Profile = ({imgPosts}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const {
        loading, 
        error, 
        userId, 
        fullname, 
        email, 
        profileImage
    } = useSelector(state=> state.user);

    return (
        <div className="a-container m-auto">
            <ProfileTop
                style={{margin:"0 auto"}}
                image={profileImage} 
                posts={posts} 
                followers={followers} 
                following={following}
                username={fullname}
            />
            <br/>
            <Add 
                className="a-add-post-icon" 
                onClick={()=> setIsOpen(true)}
            />
            <AddPostModal 
                modalIsOpen={modalIsOpen} 
                closeModal={()=>setIsOpen(false)}
            />
            <hr/>
            <Grid col="1fr 1fr 1fr" style={{justifyItems:"center", rowGap:20}}>
                {
                    imgPosts && imgPosts.map(({image, alt}, index)=>(
                        <SinglePostImg key={index} image={image} al={alt}/>
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
