import axios from 'axios';
import { takeEvery, all, put, call, takeLatest } from 'redux-saga/effects';

import url from '../../constant/url'
import {
	USER_SAGA_FETCH,
	USER_FETCH_DATA,
	USER_FETCH_SUCCESS,
	USER_FETCH_FAIL,
	USER_SAGA_VERIFY_TOKEN,
	USER_LOGOUT,
	USER_SET_EDIT_PROFILE,
	LOGOUT_SAGA_REQUEST,
	USER_SAGA_EDIT_PROFILE,
} from './user.type.js';

export function* userWatcher() {
	yield all([
		takeEvery(USER_SAGA_FETCH, fetchUser),
		takeEvery(USER_SAGA_VERIFY_TOKEN, verifyToken),
		takeEvery(LOGOUT_SAGA_REQUEST, logout),
		takeLatest(USER_SAGA_EDIT_PROFILE, editProfile),
	])
}

function* fetchUser(params) {
	const { data } = params;
	yield put({ type: USER_FETCH_DATA });
	try {
		const res = yield call(axios.post, url.login, data, { withCredentials: true });

		if (res.data.msg === "success")
			yield put({ type: USER_FETCH_SUCCESS, payload: res.data.doc });
		else
			yield put({ type: USER_FETCH_FAIL, payload: res.data.err });

	} catch (err) {
		yield put({ type: USER_FETCH_FAIL, payload: "SOME SERVER ERROR OCCURED" });
	}
}

function* verifyToken() {
	yield put({ type: USER_FETCH_DATA });
	const verifyToken = yield call(axios.get, url.verifyToken, { withCredentials: true });
	const { auth, data } = verifyToken.data;
	if (auth === "success") yield put({ type: USER_FETCH_SUCCESS, payload: data });
	else if (auth === "fail") yield put({ type: USER_FETCH_FAIL, payload: "" });
	else yield put({ type: USER_FETCH_FAIL, payload: "SOME SERVER ERROR OCCURED" });
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

