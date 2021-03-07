import {all} from 'redux-saga/effects';
import { notificationWatcher } from './Notification/Notification.saga';

function* rootSaga(){
    yield all([
        notificationWatcher(),
    ])
}

export default rootSaga;