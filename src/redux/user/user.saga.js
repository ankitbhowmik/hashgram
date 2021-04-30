import {takeEvery, all, put, call, select} from 'redux-saga/effects';
import axios from 'axios';

import url from '../../constant/url'
import {
	FETCH_USER,
	FETCH_USER_DATA,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAIL,
	VERIFY_TOKEN,
	LOGOUT} from './user.type.js';

export function* userWatcher(){
	yield all([
		takeEvery(FETCH_USER ,fetchUser),
		takeEvery(VERIFY_TOKEN, verifyToken),
		takeEvery("LOGOUT_REQUEST", logout)
	])
}

function* fetchUser(params){
	const {data} = params;
	yield put({type: FETCH_USER_DATA});
	try{
		const res = yield call(axios.post, url.login, data, {withCredentials: true });

		if(res.data.msg === "success")
			yield put({type:FETCH_USER_SUCCESS, payload: res.data.doc});
		else
			yield put({type:FETCH_USER_FAIL, payload: res.data.err });

	}catch(err){
		yield put({type:FETCH_USER_FAIL, payload: "SOME SERVER ERROR OCCURED"});
	}
}

function* verifyToken(){
	yield put({type: FETCH_USER_DATA});
	const verifyToken = yield call(axios.get, url.verifyToken, {withCredentials:true});
	const {auth, data} = verifyToken.data;
	
	if(auth === "success") yield put({type: FETCH_USER_SUCCESS, payload: data});
	else if(auth === "fail") yield put({type:FETCH_USER_FAIL, payload:""});
	else yield put({type:FETCH_USER_FAIL, payload: "SOME SERVER ERROR OCCURED"});
} 

function* logout(){
	const state = yield select();
	try{
		const res = yield call(axios.post, url.logout, {}, {withCredentials:true});
		yield put({type: LOGOUT});
	}catch(err){
		alert("some thing went wrong you can delete the cookie ;) for logout");
	}
}
