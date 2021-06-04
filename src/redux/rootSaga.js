import { all } from 'redux-saga/effects';
import { userWatcher } from './user/user.saga';
import { postWatcher } from './post/post.saga';
import { notificationWatcher } from './Notification/Notification.saga';

function* rootSaga() {
    yield all([
        userWatcher(),
        postWatcher(),
        notificationWatcher(),
    ])
}

export default rootSaga;