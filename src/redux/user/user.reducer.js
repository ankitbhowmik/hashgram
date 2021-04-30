import {
	FETCH_USER_DATA,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAIL,
	LOGOUT} from './user.type.js';

const initialState = {
	loading:true,
	error:null,
	userId:"",
	fullname:"",
	email:"",
	profileImage:"",
}

const userReducer = (state=initialState, action)=>{
	switch(action.type){
		case FETCH_USER_DATA:
			return {
				...state, 
				loading:true
			}
		case FETCH_USER_SUCCESS:
			return {
				loading:false,
				error:null,
				userId:action.payload._id,
				fullname: action.payload.fullname,
				email: action.payload.email,
				profileImage: action.payload.profileImage
			}
		case FETCH_USER_FAIL:
			return {
				...state, 
				loading:false, 
				error:action.payload
			}
		case LOGOUT:
			return {
				loading:false,
				error:null,
				userId:"",
				fullname:"",
				email:"",
				profileImage:"",
			}
		default :
			return state
	}
}

export default userReducer;