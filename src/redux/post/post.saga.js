import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import axios from 'axios';

import url from '../../constant/url';

import {
	POST_SAGA_GET_POSTS,
	POST_SAGA_GET_HOME_POSTS,
	POST_SAGA_CHANGE_LIKE,
	POST_SAGA_ADD_COMMENTS,
	POST_FETCH_DATA,
	POST_FETCH_SUCCESS,
	POST_FETCH_FAIL,
	HOME_POST_FETCH_SUCCESS,
	HOME_POST_FETCH_FAIL,
	POST_SET_HOME_POST,
} from './post.type.js';

export function* postWatcher() {
	yield all([
		takeLatest(POST_SAGA_GET_POSTS, getPosts),
		takeLatest(POST_SAGA_GET_HOME_POSTS, getHomePosts),
		takeLatest(POST_SAGA_CHANGE_LIKE, changeLike),
		takeLatest(POST_SAGA_ADD_COMMENTS, addComment),
	])
}

function* getPosts() {
	yield put({ type: POST_FETCH_DATA });
	try {
		const response = yield call(axios.get, url.getPost, { withCredentials: true });
		const { posts, msg } = response.data;
		if (msg === "success") yield put({ type: POST_FETCH_SUCCESS, payload: posts.posts });
		else if (msg === "fail") yield put({ type: POST_FETCH_FAIL, payload: "some server error occured." });
	} catch (err) {
		yield put({ type: POST_FETCH_FAIL, payload: "oops someting went wrong please check your internet connection" });
		alert("no catch condition");
	}
}

function* getHomePosts() {
	try {
		const response = yield call(axios.get, url.getHomePost, { withCredentials: true });
		const { homePosts, msg } = response.data;
		if (msg === "success") {
			yield put({ type: HOME_POST_FETCH_SUCCESS, homePosts })
		} else if (msg === "fail") {
			yield put({ type: HOME_POST_FETCH_FAIL, payload: "some server error occured" });
		}
	} catch (err) {
		yield put({ type: HOME_POST_FETCH_FAIL, payload: "oops something went wrong please check your internet connection" });
	}
}

function* changeLike(params) {
	const { postId } = params;
	const { user: { userId }, post: { homePosts } } = yield select();

	const response = yield call(axios.post, url.changeLike, { postId }, { withCredentials: true });
	const { msg, like } = response.data;
	if (msg === "success" && !like) {
		for (let post of homePosts) {
			if (post._id === postId || post === undefined) {
				post.likes = post.likes.filter(usr => usr !== userId);
				break;
			}
		}
	} else if (msg === "success" && like) {
		for (let post of homePosts) {
			if (post._id === postId || post === undefined) {
				post.likes = [...post.likes, userId];
				break;
			}
		}
	}
	yield put({ type: POST_SET_HOME_POST, homePosts })
}

function* addComment(params) {
	const { post_id, comment, setComment, setLoader } = params;
	setLoader(true);
	const { post: { homePosts } } = yield select();

	const response = yield call(axios.post, url.addComment, { post_id, comment }, { withCredentials: true });
	const { msg, data } = response.data;
	if (msg === "success") {
		for (let post of homePosts) {
			if (post._id === post_id || post === undefined) {
				post.comments = [...post.comments, data];
				break;
			}
		}
		yield put({ type: POST_SET_HOME_POST, homePosts });
		setComment("");
	} else if (msg === "fail") {
		alert("something went wrong");
	}
	setLoader(false);
}
