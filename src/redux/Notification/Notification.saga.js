import {all, takeEvery, select, put} from 'redux-saga/effects';
import { SHOW_NOTIFICATION, HIDE_NOTIFICATION, TOGGLE_NOTIFICATION } from './Notification.type';

export function* notificationWatcher(){
    yield all([
        takeEvery(TOGGLE_NOTIFICATION, toggleNotification)
    ])
}

function* toggleNotification(){
    const {notification} = yield select();
    if(notification.show)
        yield put({type: HIDE_NOTIFICATION});
    else
        yield put({type: SHOW_NOTIFICATION});
}
