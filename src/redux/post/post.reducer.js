import { POST_FETCH_SUCCESS, 
    POST_FETCH_DATA, 
    POST_FETCH_FAIL, 
    POST_ADD_NEW_POST, 
    HOME_POST_FETCH_SUCCESS,
    HOME_POST_FETCH_FAIL,
    POST_SET_HOME_POST
} from './post.type';

const initialState = {
	loading: true,
	error: "",
	posts:[],
    homePosts:[],
    homePostError: "",
    commentLoader:false,
}

const postReducer = (state=initialState, action) => {
    switch(action.type){
    	case POST_FETCH_DATA:
    		return {
    			...state,
    			loading:true,
    		}
        case POST_FETCH_SUCCESS : 
            return {
                ...state,
            	loading:false,
            	error:"",
            	posts: action.payload,
            }
        case POST_FETCH_FAIL:
         	return {
         		...state,
         		loading:false,
         		error: action.payload
         	}
        case POST_ADD_NEW_POST :
            return {
                ...state, 
                posts: [action.newPost, ...state.posts]
            }
        case HOME_POST_FETCH_SUCCESS:
            return{
                ...state,
                homePostError:"",
                homePosts: [...action.homePosts],
            }
        case HOME_POST_FETCH_FAIL:
            return{
                ...state,
                homePostError : action.payload,
            }
        case POST_SET_HOME_POST: 
            return{
                ...state,
                homePosts: [...action.homePosts],
            }
        default : 
        	return state
    }
}

export default postReducer;