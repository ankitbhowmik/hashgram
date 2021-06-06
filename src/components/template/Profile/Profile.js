import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import Grid from '../../atom/Box/Grid';
import Add from '../../atom/Icons/Add/Add';
import ProfileTop from '../../molecule/ProfileTop/ProfileTop';
import SinglePostImg from '../../molecule/SinglePostImg/SinglePostImg';
import AddPostModal from '../../modals/AddPostModal/AddPostModal';

import { POST_SAGA_GET_POSTS } from '../../../redux/post/post.type';
import { USER_SAGA_GET_PROFILE_DATA } from '../../../redux/user/user.type';

const Profile = () => {
    const dispatch = useDispatch();
    const { profileId } = useParams();
    const location = useLocation();
    const { userId, profileData } = useSelector(state => state.user);


    useEffect(() => {
        dispatch({ type: USER_SAGA_GET_PROFILE_DATA, profileId });
        dispatch({ type: POST_SAGA_GET_POSTS, profileId });
    }, [dispatch, location.pathname, profileId])

    const { posts } = useSelector(state => state.post);

    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <div className="a-container m-auto">
            <ProfileTop style={{ margin: "0 auto" }} />
            <br />
            {
                userId === profileData.profileId && (<Add
                    className="a-add-post-icon"
                    onClick={() => setIsOpen(true)}
                />)
            }
            <AddPostModal
                modalIsOpen={modalIsOpen}
                closeModal={() => setIsOpen(false)}
            />
            <hr />
            <Grid col="1fr 1fr 1fr" style={{ justifyItems: "center", rowGap: 20 }}>
                {
                    posts && posts.map((post) => (
                        <SinglePostImg key={post._id} image={`${process.env.REACT_APP_HOST_URL}/${post.image}`} alt={post.image} />
                    ))
                }
            </Grid>
        </div>
    )
}

export default Profile
