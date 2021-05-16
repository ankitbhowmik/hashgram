import React from 'react';
import Modal from 'react-modal'

import FlexBox from '../../atom/Box/Flex';

Modal.setAppElement("#root");
const customStyle = {
	overlay: {
		backgroundColor: "rgba(0,0,0,0.2)"
	},
	content: {
		top: "80px",
		margin: "0 auto",
		padding:0,
		maxWidth: "786px",
		maxHeight: "450px",
	}
}
const ViewPost = ({ modalIsOpen, closeModal }) => {
  return (
  	<Modal
  		isOpen={modalIsOpen}
  		style={customStyle}
  	>
  		<FlexBox>
  			<h1 onClick={closeModal}> x </h1>
  		</FlexBox>
  	</Modal>
  )
}

export default ViewPost;