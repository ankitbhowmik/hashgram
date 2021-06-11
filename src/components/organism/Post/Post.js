import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'

import ResponsiveImg from '../../atom/ResponsiveImg/ResponsiveImg'
//import Rectangle from '../../atom/Skeleton/Rectangle'
import { P, Span } from '../../atom/Text/Text'
import CommentBox from '../../molecule/LikeComment/LikeComment'
import ViewPostModal from '../../modals/ViewPostModal/ViewPostModal'

import {
    Border,
    ImageDiv,
    NameDiv,
    NameText,
    StyledAvatar
} from './Post.style';

/*
const LoadingPost = () => (
    <Border>
        <NameDiv>
            <StyledAvatar size="small" />
            <NameText>
                <Rectangle width="150px" height="13px" gap="5px" />
                <Rectangle width="200px" height="13px" />
            </NameText>
        </NameDiv>
        <ImageDiv style={{ height: 350 }} />
    </Border>
)
*/

const Post = ({ post_id, likes, comments, image, caption, author }) => {
    const history = useHistory();

    const [showViewModal, setShowViewModal] = useState(false);
    return (
        <Border>
            <NameDiv>
                <StyledAvatar
                    size="small"
                    image={author.profileImage ? `${process.env.REACT_APP_HOST_URL}${author.profileImage}` : "/noPic.png"}
                />
                <NameText
                    onClick={() => history.push(`/acc/profile/${author._id}`)}
                >
                    {author.fullname} <br />
                    <Span color="gray">{author.email}</Span>
                </NameText>
            </NameDiv>
            <ImageDiv>
                {image && <ResponsiveImg src={`${process.env.REACT_APP_HOST_URL}${image}`} alt={image} />}
            </ImageDiv>

            <CommentBox post_id={post_id} likes={likes} comments={comments}>
                <P m="0">{caption}</P>
                <P color="gray" m="0" onClick={() => setShowViewModal(true)}>View all {comments.length} comments</P>
            </CommentBox>
            <ViewPostModal modalIsOpen={showViewModal} post_id={post_id} likes={likes} comments={comments} comments={comments} closeModal={() => setShowViewModal(false)} />
        </Border>
    )
}

Post.propTypes = {
    likes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    image: PropTypes.string,
    caption: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Post
