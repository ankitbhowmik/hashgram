import {
	USER_FETCH_DATA,
	USER_FETCH_SUCCESS,
	USER_FETCH_FAIL,
	USER_LOGOUT,
	USER_SET_PROFILE_IMAGE,
	USER_SET_EDIT_PROFILE,
	USER_SET_SEARCH_LOADING,
	USER_SET_SEARCH,
	USER_SET_PROFILE_DATA
} from './user.type.js';

const initialState = {
	email: "",
	userId: "",
	profileId: "",		//use this id to show data in profile page.
	error: null,
	loading: true,
	fullname: "",
	profileImage: "",
	followings: 0,
	followers: 0,
	posts: 0,
	bio: "",
	search: [],
	searchLoading: false,
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
				userId: action.payload
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
				profileImage: action.value,
			}
		case USER_SET_EDIT_PROFILE:
			return {
				...state,
				bio: action.bio,
				email: action.email,
				fullname: action.fullname,
			}
		case USER_SET_SEARCH_LOADING:
			return {
				...state,
				searchLoading: action.value,
			}
		case USER_SET_SEARCH:
			return {
				...state,
				search: action.search
			}
		case USER_SET_PROFILE_DATA:
			return {
				...state,
				bio: action.payload.bio,
				email: action.payload.email,
				followers: action.payload.followers,
				followings: action.payload.followings,
				fullname: action.payload.fullname,
				posts: action.payload.posts,
				profileImage: action.payload.profileImage,
				profileId: action.payload._id,
			}
		default:
			return state
	}
}

export default userReducer;