import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import Grid from '../../atom/Box/Grid';
import Add from '../../atom/Icons/Add/Add';
import ProfileTop from '../../molecule/ProfileTop/ProfileTop';
import SinglePostImg from '../../molecule/SinglePostImg/SinglePostImg';
import AddPostModal from '../../modals/AddPostModal/AddPostModal';

import { POST_SAGA_GET_POSTS } from '../../../redux/post/post.type';

const Profile = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: POST_SAGA_GET_POSTS });
    }, [dispatch])

    const { posts } = useSelector(state => state.post);

    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <div className="a-container m-auto">
            <ProfileTop style={{ margin: "0 auto" }} />
            <br />
            <Add
                className="a-add-post-icon"
                onClick={() => setIsOpen(true)}
            />
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
