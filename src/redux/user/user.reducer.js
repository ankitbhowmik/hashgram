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
	error: null,
	loading: true,
	search: [],
	userId: "",
	userEmail: "",
	userFullName: "",
	userProfileImage: "",
	searchLoading: false,
	profileData: {
		bio: "",
		email: "",
		followers: 0,
		followings: 0,
		fullname: "",
		posts: 0,
		profileImage: "",
		profileId: "",
	},
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
				userId: action.userId,
				userEmail: action.email,
				userFullName: action.fullname,
				userProfileImage: action.profileImage,
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
				profileData: {
					bio: action.payload.bio,
					posts: action.payload.posts,
					email: action.payload.email,
					profileId: action.payload._id,
					fullname: action.payload.fullname,
					followers: action.payload.followers,
					followings: action.payload.followings,
					profileImage: action.payload.profileImage,
				}
			}
		default:
			return state
	}
}

export default userReducer;