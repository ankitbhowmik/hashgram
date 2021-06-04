import {
    POST_FETCH_FAIL,
    POST_FETCH_DATA,
    POST_ADD_NEW_POST,
    POST_FETCH_SUCCESS,
    POST_SET_HOME_POST,
    HOME_POST_FETCH_FAIL,
    HOME_POST_FETCH_SUCCESS,
} from './post.type';

const initialState = {
    error: "",
    posts: [],
    loading: true,
    homePosts: [],
    homePostError: "",
    commentLoader: false,
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_FETCH_DATA:
            return {
                ...state,
                loading: true,
            }
        case POST_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: "",
                posts: action.payload,
            }
        case POST_FETCH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case POST_ADD_NEW_POST:
            return {
                ...state,
                posts: [action.newPost, ...state.posts]
            }
        case HOME_POST_FETCH_SUCCESS:
            return {
                ...state,
                homePostError: "",
                homePosts: [...action.homePosts],
            }
        case HOME_POST_FETCH_FAIL:
            return {
                ...state,
                homePostError: action.payload,
            }
        case POST_SET_HOME_POST:
            return {
                ...state,
                homePosts: [...action.homePosts],
            }
        default:
            return state
    }
}

export default postReducer;