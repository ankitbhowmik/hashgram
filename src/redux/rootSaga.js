import {all} from 'redux-saga/effects';
import { notificationWatcher } from './Notification/Notification.saga';
import { userWatcher } from './user/user.saga';
import { postWatcher } from './post/post.saga';

function* rootSaga(){
    yield all([
        notificationWatcher(),
        userWatcher(),
        postWatcher(),
    ])
}

export default rootSaga;