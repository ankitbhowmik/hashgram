import React from 'react'
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup'

import { CloseIcon } from '../AddPostModal/AddPostModal.style';
import TextInput from '../../atom/TextInput/TextInput';
import Button from '../../atom/button/Button';
import { USER_SAGA_EDIT_PROFILE } from '../../../redux/user/user.type';

Modal.setAppElement("#root");
const customStyle = {
	overlay: {
		backgroundColor: "rgba(0,0,0,0.2)"
	},
	content: {
		top: "80px",
		margin: "0 auto",
		maxWidth: "786px",
		maxHeight: "450px",
	}
}
const EditProfileModal = ({ modalIsOpen, closeModal }) => {
	const dispatch = useDispatch();
	const { fullname, email, bio } = useSelector(state => state.user);

	const initialValues = {
		fullname: fullname || "",
		email: email || "",
		bio: bio || "",
	}
	const validationSchema = yup.object({
		fullname: yup.string().required("User name is required"),
		email: yup.string().required("Email name is required"),
		bio: yup.string().required("Bio cannot be empty"),
	});

	const onSubmit = (value) => {
		dispatch({ type: USER_SAGA_EDIT_PROFILE, value, closeModal });
	}

	return (
		<Modal
			isOpen={modalIsOpen}
			style={customStyle}
		>
			<CloseIcon onClick={closeModal}> X </CloseIcon>
			<h1>Edit your Profile</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				<Form>
					<TextInput
						label="FullName"
						name="fullname"
					/>
					<TextInput
						label="Email"
						name="email"
					/>
					<TextInput
						label="Enter your Bio"
						name="bio"
					/>
					<Button width="100%" margin="20px 0" type="submit">Submit</Button>
				</Form>

			</Formik>
		</Modal>
	)
}

export default EditProfileModal
