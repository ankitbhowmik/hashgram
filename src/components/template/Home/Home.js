import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import Grid from '../../atom/Box/Grid'
import styled from 'styled-components'
import Suggestion from '../../organism/Suggestion/Suggestion'
import Post from '../../organism/Post/Post';

import { POST_SAGA_GET_HOME_POSTS } from '../../../redux/post/post.type';

const StickyDiv = styled.div`
    position: sticky;
    top: 5em;
`

const Home = ({ people }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: POST_SAGA_GET_HOME_POSTS });
    }, [dispatch])

    const { homePosts } = useSelector(state => state.post);

    return (
        <div className="a-container">
            <Grid col="3fr 2fr">
                <div style={{ padding: "10px" }}>
                    {
                        homePosts.map((data, index) => (
                            <Post
                                key={data._id}
                                post_id={data._id}
                                likes={data.likes}
                                comments={data.comments}
                                image={data.image}
                                caption={data.caption}
                                author={data.author}
                            />
                        ))
                    }
                </div>
                <div style={{ height: "100%" }}>
                    <StickyDiv>
                        <Suggestion people={people} />
                    </StickyDiv>
                </div>
            </Grid>
        </div>
    )
}

export default Home
