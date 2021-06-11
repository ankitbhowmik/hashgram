import { all, takeLatest, takeEvery, put, select, call } from "@redux-saga/core/effects";
import axios from "axios";
import url from "../../constant/url";

import { CHAT_ADD_NEW_CHAT, CHAT_SAGA_CREATE_CONVERSATION, CHAT_ADD_NEW_MESSAGE, CHAT_SAGA_GET_CHATS, CHAT_SAGA_GET_MESSAGES, CHAT_SAGA_SEND_MESSAGE, CHAT_SET_CHATS, CHAT_SET_MESSAGES, CHAT_SAGA_GET_SOCKET_MESSAGE } from "./chat.type";

export function* chatWatcher() {
    yield all([
        takeLatest(CHAT_SAGA_GET_CHATS, getChats),
        takeLatest(CHAT_SAGA_GET_MESSAGES, getMessages),
        takeLatest(CHAT_SAGA_SEND_MESSAGE, sendMessage),
        takeLatest(CHAT_SAGA_CREATE_CONVERSATION, createChat),
        takeEvery(CHAT_SAGA_GET_SOCKET_MESSAGE, getSocketMessage),
    ])
}

function* createChat({ profileId }) {
    const { chat: { chats } } = yield select();
    const friendChat = chats.find(friend => friend._id === profileId)
    if (friendChat._id) {
        //yield put({ type: CHAT_SAGA_GET_MESSAGES, chatId: friendChat.chatId });
        yield call(getMessages, { chatId: friendChat.chatId });
    } else {
        const response = yield call(axios.post, url.createChat, { profileId }, { withCredentials: true });
        yield put({ type: CHAT_ADD_NEW_CHAT, friend: response.data.friend, chatId: response.data.chatId });
    }
}

function* getChats() {
    const response = yield call(axios.get, url.getChats, { withCredentials: true });
    yield put({ type: CHAT_SET_CHATS, chats: response.data.chats })
}

function* getMessages({ chatId }) {
    const response = yield call(axios.post, url.getMessages, { chatId }, { withCredentials: true });
    if (response.data.msg === "success") {
        yield put({ type: CHAT_SET_MESSAGES, messages: response.data.chat, chatId, receiverId: response.data.receiverId });
    }
}

function* sendMessage({ messageText, callback }) {
    const { chat: { chatId } } = yield select();
    const response = yield call(axios.post, url.sendMessage, { msg: messageText, chatId }, { withCredentials: true });
    if (response.data.msg === "success") {
        yield put({ type: CHAT_ADD_NEW_MESSAGE, message: response.data.message })
        if (callback) callback(response.data.message._id);
    }
}

function* getSocketMessage({ chatId, message }) {
    const { chat } = yield select();
    if (chat.chatId === chatId) {
        yield put({ type: CHAT_ADD_NEW_MESSAGE, message })
    } else {
        //some notification for new message
    }
}