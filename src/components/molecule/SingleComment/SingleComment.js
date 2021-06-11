import React from 'react';

import Avatar from '../../atom/Avatar/Avatar';
import { P } from '../../atom/Text/Text';
import { SingleCommentContainer } from "./SingleComment.style";

const SingleComment = ({ image, userName, comment }) => {
    return (
        <SingleCommentContainer>
            {image && <Avatar size="small" image={`${process.env.REACT_APP_HOST_URL}${image}`} />}
            <P><b>{userName}</b> {comment}</P>
        </SingleCommentContainer>
    )
}

export default SingleComment
