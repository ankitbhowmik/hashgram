import {all} from 'redux-saga/effects';
import { notificationWatcher } from './Notification/Notification.saga';
import {userWatcher} from './user/user.saga';

function* rootSaga(){
    yield all([
        notificationWatcher(),
        userWatcher()
    ])
}

export default rootSaga;