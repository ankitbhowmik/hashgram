import React from 'react';
import Modal from 'react-modal'

import FlexBox from '../../atom/Box/Flex';
import CommentBox from '../../molecule/LikeComment/LikeComment'
import SingleComment from '../../molecule/SingleComment/SingleComment';
import { CloseIcon } from '../AddPostModal/AddPostModal.style';

Modal.setAppElement("#root");
const customStyle = {
	overlay: {
		backgroundColor: "rgba(0,0,0,0.2)"
	},
	content: {
		top: "80px",
		margin: "0 auto",
		padding: 0,
		maxWidth: "400px",
		maxHeight: "450px",
	}
}
const ViewPost = ({ modalIsOpen, closeModal, comments, post_id, likes }) => {
	return (
		<Modal
			isOpen={modalIsOpen}
			style={customStyle}
		>
			<CloseIcon onClick={closeModal}>x</CloseIcon>
			<FlexBox alignItems="center" justifyItems="center" plain>
				<div>
					{
						comments.length
							? comments.map(cmt => (<SingleComment image={cmt.user.profileImage} userName={cmt.user.fullname} comment={cmt.comment} />))
							: <h1>No comments :(</h1>
					}
				</div>
			</FlexBox>
			<CommentBox post_id={post_id} likes={likes} comments={comments} noPostInfo />
		</Modal>
	)
}

export default ViewPost;