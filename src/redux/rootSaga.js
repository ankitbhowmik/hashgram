import { all } from 'redux-saga/effects';

import { userWatcher } from './user/user.saga';
import { chatWatcher } from './chat/chat.saga';
import { postWatcher } from './post/post.saga';
import { notificationWatcher } from './notification/Notification.saga';

function* rootSaga() {
    yield all([
        chatWatcher(),
        userWatcher(),
        postWatcher(),
        notificationWatcher(),
    ])
}

export default rootSaga;