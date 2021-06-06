import axios from 'axios';
import { takeEvery, all, put, call, takeLatest } from 'redux-saga/effects';

import url from '../../constant/url'
import {
	USER_LOGOUT,
	USER_FETCH_DATA,
	USER_FETCH_FAIL,
	USER_SAGA_FETCH,
	USER_FETCH_SUCCESS,
	USER_SAGA_LOGOUT_REQUEST,
	USER_SET_EDIT_PROFILE,
	USER_SAGA_EDIT_PROFILE,
	USER_SAGA_VERIFY_TOKEN,
	USER_SAGA_GET_SEARCHS,
	USER_SET_SEARCH_LOADING,
	USER_SET_SEARCH,
	USER_SAGA_GET_PROFILE_DATA,
	USER_SET_PROFILE_DATA,
} from './user.type.js';

export function* userWatcher() {
	yield all([
		takeEvery(USER_SAGA_FETCH, fetchUser),
		takeEvery(USER_SAGA_LOGOUT_REQUEST, logout),
		takeEvery(USER_SAGA_VERIFY_TOKEN, verifyToken),
		takeLatest(USER_SAGA_EDIT_PROFILE, editProfile),
		takeEvery(USER_SAGA_GET_SEARCHS, getSearch),
		takeLatest(USER_SAGA_GET_PROFILE_DATA, getProfileData),
	])
}

function* fetchUser(params) {
	const { data } = params;
	yield put({ type: USER_FETCH_DATA });
	try {
		const res = yield call(axios.post, url.login, data, { withCredentials: true });
		if (res.data.msg === "success") {
			yield put({
				type: USER_FETCH_SUCCESS,
				userId: res.data.userId,
				fullname: res.data.fullname,
				email: res.data.email,
				profileImage: res.data.profileImage,
			});
		} else {
			yield put({ type: USER_FETCH_FAIL, payload: res.data.err });
		}

	} catch (err) {
		yield put({ type: USER_FETCH_FAIL, payload: "SOME SERVER ERROR OCCURED" });
	}
}

function* verifyToken() {
	yield put({ type: USER_FETCH_DATA });
	const verifyToken = yield call(axios.get, url.verifyToken, { withCredentials: true });
	const { auth, data } = verifyToken.data;
	if (auth === "success") {
		yield put({
			type: USER_FETCH_SUCCESS,
			userId: data._id,
			fullname: data.fullname,
			email: data.email,
			profileImage: data.profileImage,
		});
	}
	else if (auth === "fail") {
		yield put({ type: USER_FETCH_FAIL, payload: "" });
	} else {
		yield put({ type: USER_FETCH_FAIL, payload: "SOME SERVER ERROR OCCURED" });
	}
}

function* logout() {
	try {
		yield call(axios.post, url.logout, {}, { withCredentials: true });
		yield put({ type: USER_LOGOUT });
	} catch (err) {
		alert("some thing went wrong you can delete the cookie ;) for logout");
	}
}

function* editProfile(params) {
	const { value: { fullname, email, bio }, closeModal } = params;
	try {
		const response = yield call(axios.post, url.editProfile, { bio, email, fullname }, { withCredentials: true });
		if (response.data.msg === "success") {
			const { bio, email, fullname } = response.data;
			yield put({ type: USER_SET_EDIT_PROFILE, bio, email, fullname });
			yield alert("profile updated successfully");
			closeModal();
		} else if (response.data.msg === "fail") {
			alert("Some Error Occured Please try again");
		}
	} catch (err) {
		console.log("error ", err);
		alert("something went wrong")
	}
}

function* getSearch(params) {
	const { searchText } = params;
	yield put({ type: USER_SET_SEARCH_LOADING, value: true });
	const response = yield call(axios.post, url.searchUser, { search: searchText }, { withCredentials: true });
	yield put({ type: USER_SET_SEARCH, search: response.data });
	yield put({ type: USER_SET_SEARCH_LOADING, value: false });
}

function* getProfileData(params) {
	const getUrl = params.profileId ? `${url.getProfileData}/${params.profileId}` : url.getProfileData;
	const response = yield call(axios.get, getUrl, { withCredentials: true });
	if (response.data.msg === "success") {
		yield put({ type: USER_SET_PROFILE_DATA, payload: response.data.data });
	} else {
		console.log("something went wrong");
	}
}