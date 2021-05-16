import {
	USER_FETCH_DATA,
	USER_FETCH_SUCCESS,
	USER_FETCH_FAIL,
	USER_LOGOUT,
	USER_SET_PROFILE_IMAGE,
	USER_SET_EDIT_PROFILE
} from './user.type.js';

const initialState = {
	email: "",
	userId: "",
	error: null,
	loading: true,
	fullname: "",
	profileImage: "",
	followings:0,
	followers:0,
	posts:0,
	bio:"",
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_FETCH_DATA:
			return {
				...state,
				loading: true
			}
		case USER_FETCH_SUCCESS:
			return {
				...state,
				error: null,
				loading: false,
				bio: action.payload.bio,
				userId: action.payload._id,
				posts: action.payload.posts,
				email: action.payload.email,
				fullname: action.payload.fullname,
				followers: action.payload.followers,
				followings: action.payload.followings,
				profileImage: action.payload.profileImage,
			}
		case USER_FETCH_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		case USER_LOGOUT:
			return {
				...initialState,
				loading: false,
			}
		case USER_SET_PROFILE_IMAGE: 
			return {
				...state,
				profileImage: `${process.env.REACT_APP_HOST_URL}${action.value}`
			}
		case USER_SET_EDIT_PROFILE :
			return{
				...state,
				bio: action.bio,
				fullname: action.fullname,
				email: action.email,
			}
		default:
			return state
	}
}

export default userReducer;