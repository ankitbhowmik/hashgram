import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { H1, P } from '../../atom/Text/Text';
import PostLike from '../../atom/Icons/PostLike/PostLike'
import Comment from '../../atom/Icons/Comment/Comment'
import { InputComment, ButtonComment, CommentContainer, PostInfo} from './LikeComment.style';
import { POST_SAGA_ADD_COMMENTS, POST_SAGA_CHANGE_LIKE } from '../../../redux/post/post.type';

const CommentBox = ({post_id, likes, comments, children}) => {
	const dispatch = useDispatch();
	const [comment, setComment] = useState("");
	const [loader, setLoader] = useState(false);

	const {userId} = useSelector(state => state.user);

	const onClickPostComment = () => {
		dispatch({type: POST_SAGA_ADD_COMMENTS, post_id, comment, setComment, setLoader});
	}

	const onClickPostLike = () => {
        dispatch({ type: POST_SAGA_CHANGE_LIKE, postId: post_id });
    }

  	return (
  		<>
  			<PostInfo>
                <div>
                    <PostLike like={likes.includes(userId)} onClick={onClickPostLike} />
                    <Comment style={{ marginLeft: 16 }} />
                </div>
                <b>{likes.length} Likes</b>
                { children }
                <div>
                    { comments.slice(-2).map(dt=> <P key={dt._id} m="0"> <b>{dt.user.fullname}</b> {dt.comment} </P>) }
                </div>
            </PostInfo>
		  	<CommentContainer>
		  		{
		  			loader ? 
		  			<H1 m="0"> Loading...</H1> 
		  			: <> 
		  				<InputComment
					            type="text"
					            value={comment}
					            placeholder="Add a Comment"
					            onChange={(e) => setComment(e.target.value)}
					        />
					        <ButtonComment
					            disabled={!comment}
					            onClick={onClickPostComment}
					        >
					            Post
					        </ButtonComment>
				      </>
		  		}
		    </CommentContainer>
	    </>
  	)
}

export default CommentBox;